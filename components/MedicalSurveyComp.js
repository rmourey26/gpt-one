import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { json } from "../medsurvjson";

function MedicalSurveyComp() {
    const survey = new Model(json);
    survey.onComplete.add((sender, options) => {
        console.log(JSON.stringify(sender.data, null, 3));
    });
    var storageName = "survey_patient_history";
    function saveSurveyData(survey) {
        var data = survey.data;
        data.pageNo = survey.currentPageNo;
        window.localStorage.setItem(storageName, JSON.stringify(data));
    }
    survey.onPartialSend.add(function(sender){
        saveSurveyData(sender);
    });
    survey.onComplete.add(function(sender, options){
        saveSurveyData(sender);
    });
    
    survey.sendResultOnPageNext = true;
    var prevData = window.localStorage.getItem(storageName) || null;
    if(prevData) {
        var data = JSON.parse(prevData);
        survey.data = data;
        if(data.pageNo) {
            survey.currentPageNo = data.pageNo;
        }
    }
    return (<Survey model={survey} />);
}

export default MedicalSurveyComp;