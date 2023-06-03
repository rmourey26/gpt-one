export const json = {
    "pages": [
      {
        "elements": [
          {
            "type": "panel",
            "name": "patienName",
            "elements": [
              {
                "type": "text",
                "name": "patientLastName",
                "title": "(Last)",
                "isRequired": true
              },
              {
                "type": "text",
                "name": "patienFirstName",
                "startWithNewLine": false,
                "title": "(First)",
                "isRequired": true
              },
              {
                "type": "text",
                "name": "patientMiddleName",
                "title": "(M.I)"
              }
            ],
            "questionTitleLocation": "bottom",
            "title": "Patient Name"
          },
          {
            "type": "panel",
            "name": "panel2",
            "elements": [
              {
                "type": "text",
                "name": "socialsecurity",
                "title": "Social Security #:",
                "isRequired": true,
                "inputFormat": "999-99-9999"
              },
              {
                "type": "text",
                "inputType": "date",
                "isRequired": true,
                "name": "birthDate",
                "startWithNewLine": false,
                "title": "Date of birth:"
              },
              {
                "type": "radiogroup",
                "choices": [
                  {
                    "value": "male",
                    "text": "Male"
                  },
                  {
                    "value": "female",
                    "text": "Female"
                  }
                ],
                "colCount": 0,
                "isRequired": true,
                "name": "sex",
                "title": "Sex:"
              }
            ],
            "questionTitleLocation": "left",
            "title": "Social Security & Birth Date"
          },
          {
            "type": "panel",
            "name": "panel1",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [
                  {
                    "value": "patient",
                    "text": "Patient"
                  },
                  {
                    "value": "spouse",
                    "text": "Spouse"
                  }
                ],
                "colCount": 0,
                "showOtherItem": true,
                "isRequired": true,
                "name": "completedBy",
                "otherText": "Other (specify)",
                "title": "Who completed this form:"
              },
              {
                "type": "text",
                "name": "completedByOtherName",
                "visibleIf": "{completedBy} != \"patient\"",
                "startWithNewLine": false,
                "title": "Name (if other than patient):",
                "isRequired": true
              }
            ],
            "title": "Completed By"
          }
        ],
        "name": "introduction",
        "title": "Introduction"
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "choices": [
              {
                "value": "no",
                "text": "No"
              },
              {
                "value": "yes",
                "text": "Yes"
              }
            ],
            "colCount": 0,
            "isRequired": true,
            "name": "everhospitalized",
            "title": "Have you ever been hospitalized?"
          },
          {
            "type": "radiogroup",
            "choices": [
              {
                "value": "no",
                "text": "No"
              },
              {
                "value": "yes",
                "text": "Yes"
              }
            ],
            "colCount": 0,
            "isRequired": true,
            "name": "injuriesbrokenbones",
            "title": "Have you had any serious injuries and/or broken bones?"
          },
          {
            "type": "comment",
            "isRequired": true,
            "name": "injuriesbrokenbones_describe",
            "startWithNewLine": false,
            "title": "Describe",
            "visible": false,
            "visibleIf": "{injuriesbrokenbones} = \"yes\""
          },
          {
            "type": "radiogroup",
            "choices": [
              {
                "value": "unknown",
                "text": "Unknown"
              },
              {
                "value": "no",
                "text": "No"
              },
              {
                "value": "yes",
                "text": "Yes"
              }
            ],
            "colCount": 0,
            "isRequired": true,
            "name": "bloodtransfusion",
            "title": "Have you ever received a blood transfusion?"
          },
          {
            "type": "text",
            "name": "bloodtransfusion_years",
            "visible": false,
            "visibleIf": "{bloodtransfusion}=\"yes\"",
            "startWithNewLine": false,
            "title": "Approximate year(s)"
          },
          {
            "type": "radiogroup",
            "choices": [
              {
                "value": "no",
                "text": "No"
              },
              {
                "value": "yes",
                "text": "Yes"
              }
            ],
            "colCount": 0,
            "isRequired": true,
            "name": "ousideUSACanada",
            "title": "Have you ever traveled or lived outside the United States or Canada?"
          },
          {
            "type": "comment",
            "isRequired": true,
            "name": "ousideUSACanada_describe",
            "startWithNewLine": false,
            "title": "Describe",
            "visible": false,
            "visibleIf": "{ousideUSACanada} = \"yes\""
          },
          {
            "type": "matrixdropdown",
            "name": "immunizations",
            "title": "Have you received the following IMMUNIZATIONS?  If yes, indicate the approximate year it was last given:",
            "titleLocation": "top",
            "columns": [
              {
                "name": "answer",
                "title": "Please select",
                "choices": [
                  {
                    "value": "unknown",
                    "text": "Unknown"
                  },
                  {
                    "value": "no",
                    "text": "No"
                  },
                  {
                    "value": "yes",
                    "text": "Yes"
                  }
                ],
                "cellType": "radiogroup",
                "isRequired": true
              },
              {
                "name": "year",
                "title": "Year",
                "cellType": "text",
                "isRequired": true,
                "visibleIf": "{row.answer} = \"yes\""
              }
            ],
            "choices": [ 1, 2, 3, 4, 5 ],
            "rows": [
              "Pneumococcal (for pneumonia)",
              "Hepatitis A",
              "Hepatitis B",
              "Tetanus/Diphtheria within last 10 years",
              "Influenza (flu)",
              "Measles",
              "Mumps",
              "Rubella",
              "Polio"
            ]
          },
          {
            "type": "matrixdynamic",
            "name": "problems1",
            "title": "Have you ever had any of the following?",
            "titleLocation": "top",
            "columns": [
              {
                "name": "problem",
                "title": "Problem",
                "choices": [
                  "Abnormal chest x-ray",
                  "Anesthesia complications",
                  "Anxiety, depression or mental illness",
                  "Blood problems (abnormal bleeding, anemia, high or low white count)",
                  "Diabetes",
                  "Growth removed from the colon or rectum (polyp or tumor)",
                  "High blood pressure",
                  "High cholesterol or triglycerides",
                  "Sexually transmitted disease",
                  "Stroke or TIA",
                  "Treatment for alcohol and/or drug abuse",
                  "Tuberculosis or positive tuberculin skin test",
                  "Cosmetic or plastic surgery"
                ]
              },
              {
                "name": "answer",
                "title": "Please answer",
                "choices": [
                  {
                    "value": "no",
                    "text": "No"
                  },
                  {
                    "value": "yes",
                    "text": "Yes"
                  }
                ],
                "cellType": "radiogroup",
                "isRequired": true
              },
              {
                "name": "description",
                "title": "Describe the problem",
                "cellType": "comment",
                "isRequired": true,
                "visibleIf": "{row.answer} = \"yes\""
              }
            ],
            "choices": [ 1, 2, 3, 4, 5 ],
            "rowCount": 1
          },
          {
            "type": "matrixdynamic",
            "name": "problems2",
            "title": "Indicate whether you have ever had a medical problem and/or surgery related to each of the following",
            "titleLocation": "top",
            "columns": [
              {
                "name": "problem",
                "title": "Problem",
                "maxWidth": "300px",
                "choices": [
                  "Eyes (cataracts, glaucoma)",
                  "Ears, nose, sinuses, or tonsils",
                  "Thyroid or parathyroid glands",
                  "Heart valves or abnormal heart rhythm",
                  "Coronary (heart) arteries (angina)",
                  "Arteries (aorta, arteries to head, arms, legs) ",
                  "Veins or blood clots in the veins",
                  "Lungs",
                  "Esophagus or stomach (ulcer)",
                  "Bowel (small & large intestine)",
                  "Appendix",
                  "Liver or gallbladder (including hepatitis)",
                  "Hernia",
                  "Kidneys or bladder",
                  "Bones, joints or muscles",
                  "Back, neck or spine",
                  "Brain",
                  "Skin",
                  "Breasts",
                  "Females: uterus, tubes, ovaries",
                  "Males: prostate, penis, testes, vasectomy",
                  "Other: Describe"
                ],
                "cellType": "dropdown",
                "isRequired": true,
                "choicesOrder": "asc"
              },
              {
                "name": "type",
                "title": "Type",
                "choices": [
                  {
                    "value": "medical",
                    "text": "Medical Problem"
                  },
                  {
                    "value": "surgery",
                    "text": "Surgery"
                  }
                ],
                "cellType": "checkbox",
                "isRequired": true
              },
              {
                "name": "year",
                "title": "Year(s) of Surgery",
                "cellType": "text",
                "isRequired": true,
                "visibleIf": "{row.type} contains \"surgery\""
              },
              {
                "name": "describe",
                "title": "Describe",
                "cellType": "comment",
                "startWithNewLine": true,
                "isRequired": true
              }
            ],
            "choices": [ 1, 2, 3, 4, 5 ],
            "rowCount": 1,
            "addRowText": "Add Problem"
          }
        ],
        "name": "medicalHistory",
        "questionTitleLocation": "left",
        "title": "Past Medical History"
      },
      {
        "elements": [
          {
            "type": "panel",
            "name": "education",
            "elements": [
              {
                "type": "dropdown",
                "name": "schoolYearsCompleted",
                "title": "How many yeas of school have you completed?",
                "isRequired": true,
                "choicesMin": 0,
                "choicesMax": 12
              }
            ],
            "title": "Education"
          },
          {
            "type": "panel",
            "name": "occupations",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [
                  "Retired",
                  "Unemployed",
                  "Homemaker",
                  "Employed"
                ],
                "colCount": 0,
                "isRequired": true,
                "name": "employmentStatus",
                "title": "Your current employment status:"
              },
              {
                "type": "text",
                "name": "currentOcupation",
                "visible": false,
                "visibleIf": "{employmentStatus} = 'Employed'",
                "title": "Current Ocupation(s):",
                "isRequired": true
              },
              {
                "type": "comment",
                "name": "previousOccupations",
                "title": "Previous Occupations/Jobs:"
              }
            ],
            "title": "Occupations"
          },
          {
            "type": "panel",
            "name": "disability",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "disabled",
                "title": "Are you disabled?"
              },
              {
                "type": "comment",
                "name": "disableInfo",
                "title": "Info:",
                "visible": false,
                "visibleIf": "{disabled} = 'Yes'"
              }
            ],
            "title": "Disability"
          },
          {
            "type": "panel",
            "name": "abuse",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "abused",
                "title": "Have you even been physically, sexually, or emotionally abused?"
              },
              {
                "type": "comment",
                "name": "abusedInfo",
                "title": "Info:",
                "visible": false,
                "visibleIf": "{abused} = 'Yes'"
              },
              {
                "type": "matrixdropdown",
                "name": "subsctancesUsing",
                "title": "Have you used any of the following substances?",
                "rowTitleWidth": "200px",
                "titleLocation": "top",
                "columns": [
                  {
                    "name": "current",
                    "title": "Currently Use?",
                    "width": "200px",
                    "choices": [ "No", "Yes" ],
                    "cellType": "radiogroup",
                    "isRequired": true
                  },
                  {
                    "name": "previous",
                    "title": "Previously Used?",
                    "width": "200px",
                    "choices": [ "No", "Yes" ],
                    "cellType": "radiogroup",
                    "isRequired": true
                  },
                  {
                    "name": "amount",
                    "title": "Type/Amount/Frequancy",
                    "width": "200px",
                    "cellType": "text",
                    "isRequired": true,
                    "visibleIf": "{row.current} = 'Yes' or {row.previous} = 'Yes'"
                  },
                  {
                    "name": "long",
                    "title": "How Long? (Years)",
                    "width": "200px",
                    "cellType": "text",
                    "isRequired": true,
                    "visibleIf": "{row.current} = 'Yes' or {row.previous} = 'Yes'"
                  },
                  {
                    "name": "stopped",
                    "title": "When stopped? (Year)",
                    "width": "200px",
                    "cellType": "text",
                    "isRequired": true,
                    "visibleIf": "{row.previous} = 'Yes'"
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rows": [
                  "Caffeine: coffee, tea, soda",
                  "Tobacco",
                  "Alcohol - bear, wine, liquor",
                  "Recreational/Street drugs"
                ]
              }
            ],
            "title": "Abuse"
          },
          {
            "type": "panel",
            "name": "maritalStatus",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "currentlyMarried",
                "title": "Are you currently married?"
              },
              {
                "type": "text",
                "name": "currentMarriageYear",
                "visible": false,
                "visibleIf": "{currentlyMarried} = 'Yes'",
                "startWithNewLine": false,
                "title": "In what year did this marriage occure?",
                "isRequired": true
              },
              {
                "type": "paneldynamic",
                "name": "previousMarriages",
                "title": "List all previous marriages",
                "templateElements": [
                  {
                    "type": "text",
                    "name": "previousMarriageYear",
                    "title": "Year married:",
                    "isRequired": true
                  },
                  {
                    "type": "text",
                    "name": "previousMarriageDuration",
                    "startWithNewLine": false,
                    "title": "Duration (in Years):",
                    "isRequired": true
                  }
                ],
                "panelCount": 1,
                "panelAddText": "Add marriage"
              },
              {
                "type": "panel",
                "name": "currentSpouse",
                "elements": [
                  {
                    "type": "radiogroup",
                    "choices": [
                      "Not applicable",
                      "Alive",
                      "Deceased"
                    ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "currentSpouseStatus",
                    "title": " "
                  },
                  {
                    "type": "text",
                    "name": "currentSpouseAge",
                    "visible": false,
                    "visibleIf": "{currentSpouseStatus} = 'Alive'",
                    "startWithNewLine": false,
                    "title": "Age",
                    "isRequired": true
                  },
                  {
                    "type": "comment",
                    "isRequired": true,
                    "name": "currentSpouseHelthProblems",
                    "rows": 2,
                    "title": "Health problems or cause of death:",
                    "visibleIf": "{currentSpouseStatus} != 'Not applicable' "
                  },
                  {
                    "type": "radiogroup",
                    "choices": [
                      "Retired",
                      "Unemployed",
                      "Homemaker",
                      "Employed"
                    ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "currentSpouseEmploymentStatus",
                    "title": "Current employment status:",
                    "visible": false,
                    "visibleIf": "{currentSpouseStatus} = 'Alive'"
                  }
                ],
                "title": "Current Spouse Information"
              },
              {
                "type": "text",
                "name": "currentSpouseOccupation",
                "visible": false,
                "visibleIf": "{currentSpouseEmploymentStatus} = 'Employed'",
                "title": "Current occupation(s):",
                "isRequired": true
              }
            ],
            "title": "Marital Status"
          }
        ],
        "name": "socialHistory",
        "questionTitleLocation": "left",
        "title": "Social History"
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "choices": [ "Yes", "No" ],
            "colCount": 0,
            "isRequired": true,
            "name": "adopted",
            "title": "Are you adopted?"
          },
          {
            "type": "html",
            "name": "adoptedInfo",
            "visible": false,
            "visibleIf": "{adopted} = 'Yes'",
            "html": "If known, complete the following information about your <b>blood</b> relatives (include children).  Exclude adoptive parents, siblings and   adopted children."
          },
          {
            "type": "html",
            "name": "nonAdoptedInfo",
            "visible": false,
            "visibleIf": "{adopted} = 'No'",
            "html": "Complete the following information about your <b>blood</b> relatives.  Exclude adoptive siblings and adopted children. "
          },
          {
            "type": "paneldynamic",
            "name": "bloodRelativesInfo",
            "title": "Blood relatives information",
            "templateElements": [
              {
                "type": "dropdown",
                "name": "relativeType",
                "title": "Blood Relative:",
                "isRequired": true,
                "choices": [
                  "Father",
                  "Mother",
                  "Brother",
                  "Sister",
                  "Son",
                  "Daughter"
                ]
              },
              {
                "type": "radiogroup",
                "choices": [ "Alive", "Deceased", "Unknown" ],
                "colCount": 0,
                "isRequired": true,
                "name": "relativeStatus",
                "startWithNewLine": false,
                "title": "Is he/she:"
              },
              {
                "type": "text",
                "name": "relativeAge",
                "visible": false,
                "visibleIf": "{panel.relativeStatus} = 'Alive'",
                "startWithNewLine": false,
                "title": "Current age:",
                "isRequired": true
              },
              {
                "type": "text",
                "name": "relativeAgeOfDeath",
                "visible": false,
                "visibleIf": "{panel.relativeStatus} = 'Deceased'",
                "startWithNewLine": false,
                "title": "Age of death:",
                "isRequired": true
              },
              {
                "type": "panel",
                "name": "relativeDeathInfo",
                "elements": [
                  {
                    "type": "radiogroup",
                    "choices": [ "Known", "Unknown" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "relativeCauseOfDeath",
                    "title": "Cause of death:"
                  },
                  {
                    "type": "comment",
                    "isRequired": true,
                    "name": "relativeCauseOfDeathDescription",
                    "title": "Description:",
                    "visible": false,
                    "visibleIf": "{panel.relativeCauseOfDeath} = 'Known'"
                  }
                ],
                "visible": false,
                "visibleIf": "{panel.relativeStatus} = 'Deceased'"
              },
              {
                "type": "matrixdynamic",
                "name": "relativeCondition",
                "title": "Describe the illness or conditios",
                "titleLocation": "top",
                "columns": [
                  {
                    "name": "name",
                    "title": "Illness/Condition",
                    "choices": [
                      "Cancer",
                      "Heart Disease",
                      "Diabetes",
                      "Stroke/TIA",
                      "High Blood Pressure",
                      "High Cholesterol or Triglycerides",
                      "Liver Disease",
                      "Alcohol or Drug Abuse",
                      "Anxiety, Depression or Psychiatric Illness",
                      "Tuberculosis",
                      "Anesthesia Complications",
                      "Genetic Disorder",
                      "Other"
                    ],
                    "cellType": "dropdown",
                    "isRequired": true
                  },
                  {
                    "name": "description",
                    "title": "Describe",
                    "cellType": "comment",
                    "isRequired": true
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rowCount": 1,
                "addRowText": "Add illness"
              }
            ],
            "panelCount": 1,
            "panelAddText": "Add Family Member"
          },
          {
            "type": "comment",
            "name": "relativesAdditionalInfo",
            "title": "Other information about your family which you want us to know: "
          }
        ],
        "name": "familyHistory",
        "questionTitleLocation": "left",
        "title": "Family History"
      },
      {
        "elements": [
          {
            "type": "radiogroup",
            "choices": [ "No", "Yes" ],
            "colCount": 0,
            "isRequired": true,
            "name": "primaryCareProvider",
            "title": "Do you have a Primary Care Provider?"
          },
          {
            "type": "panel",
            "name": "primaryCareProviderInfo",
            "elements": [
              {
                "type": "text",
                "name": "primaryCareProviderName",
                "title": "Name:",
                "isRequired": true
              },
              {
                "type": "text",
                "name": "primaryCareProviderPhone",
                "startWithNewLine": false,
                "title": "Phone:",
                "isRequired": true
              },
              {
                "type": "comment",
                "name": "primaryCareProviderAddress",
                "title": "Address:"
              },
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "primaryCareProviderSent",
                "title": "Do you want a summary of your visit sent to this person?"
              }
            ],
            "visible": false,
            "visibleIf": "{primaryCareProvider} = 'Yes'",
            "title": "Primary Care Provider"
          },
          {
            "type": "radiogroup",
            "choices": [ "No", "Yes" ],
            "colCount": 0,
            "isRequired": true,
            "name": "primaryCareProviderRecommend",
            "title": "Did a non-Vanderbilt physician or healthcare provider recommend or arrange this visit for you?"
          },
          {
            "type": "panel",
            "name": "primaryCareProviderRecommendInfo",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [
                  {
                    "value": "primary",
                    "text": "Your Primary Care Provider (as listed above) "
                  },
                  {
                    "value": "other",
                    "text": "Other physician or healthcare provider"
                  }
                ],
                "colCount": 0,
                "isRequired": true,
                "name": "primaryCareProviderWhoSent",
                "title": "Who sent you?"
              },
              {
                "type": "panel",
                "name": "primaryCareProviderOtherInfo",
                "elements": [
                  {
                    "type": "text",
                    "name": "primaryCareProviderOtherName",
                    "title": "Name:",
                    "isRequired": true
                  },
                  {
                    "type": "text",
                    "name": "primaryCareProviderOtherPhone",
                    "startWithNewLine": false,
                    "title": "Phone:",
                    "isRequired": true
                  },
                  {
                    "type": "comment",
                    "name": "primaryCareProviderOtherAddress",
                    "title": "Address:"
                  },
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "primaryCareProviderOtherSent",
                    "title": "Do you want a summary of your visit sent to this person?"
                  }
                ],
                "visible": false,
                "visibleIf": "{primaryCareProviderWhoSent} = 'other'",
                "title": "Other physician or healthcare provider"
              }
            ],
            "visible": false,
            "visibleIf": "{primaryCareProviderRecommend} = 'Yes'"
          }
        ],
        "name": "healthcareProvider",
        "questionTitleLocation": "left",
        "title": "Healthcare Provider Information"
      },
      {
        "elements": [
          {
            "type": "panel",
            "name": "currentUsingMedication",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "currentMedication",
                "title": "Are you currently taking any prescription and/or non-prescription medications including vitamins, nutritional supplements, oral contraceptives, pain relievers, diuretics, laxatives, herbal remedies, and cold medications? "
              },
              {
                "type": "matrixdynamic",
                "name": "currentMedicationList",
                "visible": false,
                "visibleIf": "{currentMedication} = 'Yes'",
                "title": "Medication list",
                "description": "Please add all medication you are currently taking",
                "columns": [
                  {
                    "name": "name",
                    "title": "Name of Medication",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "dose",
                    "title": "Dose",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "often",
                    "title": "How Often Taken",
                    "cellType": "text",
                    "isRequired": true
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rowCount": 1,
                "addRowText": "Add medication"
              }
            ],
            "title": "Medications currently using"
          },
          {
            "type": "panel",
            "name": "recentlyUsedMedication",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "recentlyUsedMedication",
                "title": "Are there other medications you have recently used?"
              },
              {
                "type": "matrixdynamic",
                "name": "recentlyUsedMedicationList",
                "visible": false,
                "visibleIf": "{recentlyUsedMedication} = 'Yes'",
                "title": "Medication list",
                "description": "Please add all medication you have recently used",
                "columns": [
                  {
                    "name": "name",
                    "title": "Name of Medication",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "dose",
                    "title": "Dose",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "often",
                    "title": "How Often Taken",
                    "cellType": "text",
                    "isRequired": true
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rowCount": 1,
                "addRowText": "Add medication"
              }
            ],
            "title": "Medication recently used"
          },
          {
            "type": "radiogroup",
            "choices": [ "No", "Yes" ],
            "colCount": 0,
            "isRequired": true,
            "name": "aspirinContainingProducts",
            "title": "Have you taken aspirin-containing products in the last two weeks?"
          },
          {
            "type": "radiogroup",
            "choices": [ "No", "Yes" ],
            "colCount": 0,
            "isRequired": true,
            "name": "steroidDrugs",
            "title": "Have you taken steroid or cortisone-type drugs within the last year?"
          }
        ],
        "name": "medications",
        "title": "Medications"
      },
      {
        "elements": [
          {
            "type": "panel",
            "name": "allergiesMedication",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "hasAllergiesMedication",
                "title": "Have you had hives, skin rash, breathing problems, or other allergic reactions to medications?"
              },
              {
                "type": "matrixdynamic",
                "name": "allergiesMedicationList",
                "visible": false,
                "visibleIf": "{hasAllergiesMedication} = 'Yes'",
                "title": "Medication list",
                "columns": [
                  {
                    "name": "name",
                    "title": "Name of Medication",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "description",
                    "title": "Describe Allergic Reaction",
                    "cellType": "comment",
                    "isRequired": true
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rowCount": 1,
                "addRowText": "Add medication"
              }
            ],
            "title": "Allergies to Medication"
          },
          {
            "type": "panel",
            "name": "unpleasentToMedication",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "hasUnpleasantMedication",
                "title": "Are there medications, other than those you are allergic to, that you would prefer not to take due to prior unpleasant side effects?"
              },
              {
                "type": "matrixdynamic",
                "name": "unpleasantMedicationList",
                "visible": false,
                "visibleIf": "{hasUnpleasantMedication} = 'Yes'",
                "title": "Medication list",
                "columns": [
                  {
                    "name": "name",
                    "title": "Name of Medication",
                    "cellType": "text",
                    "isRequired": true
                  },
                  {
                    "name": "description",
                    "title": "Describe the Reaction",
                    "cellType": "text",
                    "isRequired": true
                  }
                ],
                "choices": [ 1, 2, 3, 4, 5 ],
                "rowCount": 1,
                "addRowText": "Add medication"
              },
              {
                "type": "panel",
                "name": "allergiesReaction",
                "elements": [
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "allergicReactionXRay",
                    "title": "Iodine or X-ray contrast dye"
                  },
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "allergicReactionBee",
                    "startWithNewLine": false,
                    "title": "Bee or wasp stings"
                  },
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "allergicReactionLatext",
                    "title": "Latex or Rubber"
                  },
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "allergicReactionTape",
                    "startWithNewLine": false,
                    "title": "Adhesive tape"
                  }
                ],
                "questionTitleLocation": "left",
                "title": "Have you had an allergic reaction to:"
              }
            ],
            "title": "Unpleasant Side Effects to Medications"
          },
          {
            "type": "panel",
            "name": "foodAllergiesInfo",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "hasFoodAllergies",
                "title": "Do you have any food allergies?"
              },
              {
                "type": "comment",
                "name": "foodAllergiesDescription",
                "title": "Describe",
                "visible": false,
                "visibleIf": "{hasFoodAllergies} = 'Yes'"
              }
            ],
            "questionTitleLocation": "left",
            "title": "Food Allergies"
          }
        ],
        "name": "allergies",
        "title": "Allergies"
      },
      {
        "elements": [
          {
            "type": "matrix",
            "columns": [ "No", "Yes" ],
            "isAllRowRequired": true,
            "isRequired": true,
            "name": "sympthoms",
            "rows": [
              "Skin rash, sore, excessive bruising or change of a mole?",
              "Excessive thirst or urination?",
              "Change in sexual drive or performance?",
              "Significant headaches, seizures, slurred speech or difficulty moving an arm or leg?",
              "Eye problems such as double or blurred vision, cataracts or glaucoma?",
              "Diminished hearing, dizziness, hoarseness or sinus problems?",
              {
                "value": "dentures",
                "text": "Do you wear dentures?"
              },
              "Bothered with cough, shortness of breath, wheezing or asthma?",
              "Coughing up sputum or blood?",
              "Exposed to anyone with tuberculosis?",
              "“Blacked out” or lost consciousness?",
              "Chest pain or pressure, rapid or irregular heart beats, or known difficulty with a heart valve?",
              "Awakening at night with shortness of breath?",
              "Abnormal swelling in the legs or feet?",
              "Pain in the calves of your legs when you walk?",
              "Difficulty with swallowing, heartburn, nausea, vomiting or stomach trouble?",
              "Significant problems with constipation, diarrhea, blood/changes in bowel movements?",
              {
                "value": "colon_rectum_x-ray",
                "text": "Have you had a colon or rectum x-ray or instrument examination (proctoscopy, sigmoidoscopy, colonoscopy)?"
              },
              {
                "value": "endoscopy",
                "text": "Have you had an upper endoscopy to evaluate the stomach for varices?"
              },
              "Have you had any treatment for varices? (sclerotherapy, banding)",
              "Difficulty starting your urinary stream, completely emptying your bladder or leaking urine from your bladder?",
              "Burning or pain when urinating?",
              "Pain, stiffness or swelling in your back, joints or muscles?",
              "Fever within the last month?",
              "Enlarged glands (lymph nodes)?",
              "Feel you are at risk for HIV or AIDS?",
              "Immunized for influenza, tetanus/diphtheria and/or pneumonia within the last year?",
              "Experiencing an unusually stressful situation?",
              "Weight gain or loss of more than 10 pounds during the last 6 months?",
              "Problems falling asleep, staying asleep, sleep apnea or disruptive snoring?",
              "Have you ever felt a need to cut down on your alcohol consumption?",
              "Do relatives/friends worry or complain about your alcohol consumption?",
              "Have you been physically, sexually, or emotionally abused?"
            ],
            "title": "Indicate whether you have experienced the following symptoms during recent months, unless otherwise specified",
            "titleLocation": "top"
          },
          {
            "type": "radiogroup",
            "choices": [ " Ful", "Upper", "Lower", "Partial" ],
            "colCount": 0,
            "isRequired": true,
            "name": "howWearDentures",
            "title": "How do you wear dentures?",
            "visible": false,
            "visibleIf": "{sympthoms.dentures}  = 'Yes'"
          },
          {
            "type": "multipletext",
            "name": "colonRectumDate",
            "visible": false,
            "visibleIf": "{sympthoms.colon_rectum_x-ray} = 'Yes'",
            "title": "Whe did you do a colon or rectum x-ray or instrument examination (proctoscopy, sigmoidoscopy, colonoscopy)?  Approximate date:",
            "isRequired": true,
            "items": [
              {
                "name": "mo",
                "title": "Month"
              },
              {
                "name": "year",
                "title": "Year"
              }
            ],
            "colCount": 2
          },
          {
            "type": "multipletext",
            "name": "endoscopyDate",
            "visible": false,
            "visibleIf": "{sympthoms.endoscopy} = 'Yes'",
            "title": "Whe did you have an upper endoscopy to evaluate the stomach for varices?  Approximate date:",
            "isRequired": true,
            "items": [
              {
                "name": "mo",
                "title": "Month"
              },
              {
                "name": "year",
                "title": "Year"
              }
            ],
            "colCount": 2
          },
          {
            "type": "panel",
            "name": "questionsToFemale",
            "elements": [
              {
                "type": "radiogroup",
                "choices": [ "Unknown", "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "abnormalPapSmear",
                "title": "Have you ever had an abnormal Pap smear?"
              },
              {
                "type": "radiogroup",
                "choices": [ "No", "Yes" ],
                "colCount": 0,
                "isRequired": true,
                "name": "menopause",
                "title": "Have you experienced menopause or had a hysterectomy?"
              },
              {
                "type": "panel",
                "name": "panelNoMenopause",
                "elements": [
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "concernedAboutMenstrualPeriods",
                    "title": "Are you concerned about your menstrual periods?"
                  },
                  {
                    "type": "radiogroup",
                    "choices": [ "No", "Yes" ],
                    "colCount": 0,
                    "isRequired": true,
                    "name": "pregnant",
                    "title": "Might you be pregnant at this time?"
                  },
                  {
                    "type": "text",
                    "name": "lastMenstrualPeriod",
                    "title": "Date of onset of your last menstrual period:",
                    "inputType": "date"
                  },
                  {
                    "type": "panel",
                    "name": "panelPapSmearExam",
                    "elements": [
                      {
                        "type": "radiogroup",
                        "choices": [ "No", "Yes" ],
                        "colCount": 0,
                        "isRequired": true,
                        "name": "papSmearExam",
                        "title": "Have you ever done Pap smear and pelvic exam:"
                      },
                      {
                        "type": "multipletext",
                        "name": "papSmearExamDate",
                        "visible": false,
                        "visibleIf": "{papSmearExam} = 'Yes'",
                        "title": "Approximate date of your last Pap smear and pelvic exam:",
                        "isRequired": true,
                        "items": [
                          {
                            "name": "mo",
                            "title": "Month"
                          },
                          {
                            "name": "year",
                            "title": "Year"
                          }
                        ],
                        "colCount": 2
                      },
                      {
                        "type": "radiogroup",
                        "choices": [ "No", "Yes" ],
                        "colCount": 0,
                        "isRequired": true,
                        "name": "mammogram",
                        "title": "Have you ever done mammogram:"
                      },
                      {
                        "type": "multipletext",
                        "name": "mammogramDate",
                        "visible": false,
                        "visibleIf": "{mammogram} = 'Yes'",
                        "title": "Approximate date of your last mammogram:",
                        "isRequired": true,
                        "items": [
                          {
                            "name": "mo",
                            "title": "Month"
                          },
                          {
                            "name": "year",
                            "title": "Year"
                          }
                        ],
                        "colCount": 2
                      }
                    ]
                  },
                  {
                    "type": "panel",
                    "name": "panelPregnancies",
                    "elements": [
                      {
                        "type": "text",
                        "name": "pregnancies",
                        "title": "Pregnancies:",
                        "isRequired": true,
                        "inputType": "number"
                      },
                      {
                        "type": "text",
                        "name": "liveBirths",
                        "startWithNewLine": false,
                        "title": "Live Births:",
                        "isRequired": true,
                        "inputType": "number"
                      },
                      {
                        "type": "text",
                        "name": "abortions",
                        "startWithNewLine": false,
                        "title": "Miscarriages/abortions:",
                        "isRequired": true,
                        "inputType": "number",
                        "min": 0
                      }
                    ],
                    "title": "Number of:"
                  }
                ],
                "visible": false,
                "visibleIf": "{menopause} = 'No'"
              }
            ],
            "visible": false,
            "visibleIf": "{sex} = 'female'",
            "title": "For Female Patients"
          }
        ],
        "name": "systemsReview",
        "questionTitleLocation": "left",
        "title": "System Review"
      },
      {
        "elements": [
          {
            "type": "matrix",
            "columns": [ "No", "Yes" ],
            "isAllRowRequired": true,
            "name": "performingActivities",
            "rows": [
              "Eating",
              "Bathing",
              "Dressing",
              "Walking",
              "Using Toilet",
              "Housekeeping"
            ],
            "title": "Do you have difficulty performing these activities by YOURSELF?"
          },
          {
            "type": "radiogroup",
            "choices": [ "No", "Yes" ],
            "colCount": "0",
            "isRequired": true,
            "name": "specialDietary",
            "title": "Do you have any special dietary needs?"
          },
          {
            "type": "comment",
            "isRequired": true,
            "name": "specialDietaryDescription",
            "title": "Please describe your special dietery:",
            "visibleIf": "{specialDietary} = 'Yes'"
          },
          {
            "type": "radiogroup",
            "choices": [ "House", "Apartment", "Nursing Home" ],
            "colCount": 0,
            "showOtherItem": true,
            "isRequired": true,
            "name": "livingArrangement",
            "title": "What is your current living arrangement?"
          },
          {
            "type": "radiogroup",
            "choices": [ "Alone", "With Spouse/Family", "With others" ],
            "colCount": 0,
            "isRequired": true,
            "name": "liveWithWhom",
            "title": "Do you live?"
          },
          {
            "type": "comment",
            "isRequired": true,
            "name": "liveWithWhomDescription",
            "title": "Please describe with whom do you live:",
            "visibleIf": "{liveWithWhom} = 'With others'"
          },
          {
            "type": "comment",
            "name": "peopleProvidedAssistence",
            "title": "List family or friends able to provide assistance with your homecare needs if you would ever require such assistance:",
            "titleLocation": "top"
          }
        ],
        "name": "selfCare",
        "questionTitleLocation": "top",
        "title": "Self-Care/Home Environment Assessment"
      },
      {
        "elements": [
          {
            "type": "checkbox",
            "choices": [
              "How to stop smoking",
              "Exercise",
              "Stress",
              "Safe sexual practices",
              "Safety (seat belts, smoke detectors, firearms)",
              "Nutrition",
              "Weight control",
              "Violent & abusive behavior",
              "Living wills",
              "Diabetes",
              "Cancer screening   "
            ],
            "colCount": "3",
            "showOtherItem": true,
            "name": "interestedInTopics",
            "title": "Are you interested in more information about a specific topic(s)?"
          }
        ],
        "name": "educationalNeeds",
        "title": "Educational Needs"
      }
    ],
    "showProgressBar": "top",
    "showQuestionNumbers": "off",
    "title": "Patient Past Medical, Social & Family History",
    "questionErrorLocation": "bottom"
  };