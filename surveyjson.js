export const json = {
    "elements": [
      {
        "type": "ranking",
        "name": "Health-Benefits",
        "title": "Please rank the following health benefits from 1 to 7 in terms of their importance to you and your family.",
        "isRequired": true,
        "choices": [
          "Diabetes Management",
          "High Blood Pressure Management",
          "High Cholesterol Management",
          "Remote Employee Health Monitoring",
        ],
      },
      {
        "name": "Fund-Allocation",
        "type": "checkbox",
        "title": "How would you prefer additional funds for health benefits be used?",
        "description": "Please choose one option.",
        "choices": ["Improve or add benefit programs", "Reduce currently required employee contributions"],
        "isRequired": true,
        "colCount": 1,

      },
      {
        "name": "Opinion-Check",
        "type": "checkbox",
        "title": "Which of the follow statements reflects your opinion?",
        "description": "Check one",
        "choices": ["More emphasis should be placed on improving my current health plans and less on adding new alternative benefits for chronic diseases such as diabetes, high blood pressure, and cancer.", 
                    "More emphasis should be placed on adding this new alternative health benefits for chronic illneess such as diabetes, high blood pressure and cancer.",
                    "The sample emphasis, as in the past, should be placed on improving and adding both existing beneifts and new alternative health benefits."],
        "isRequired": true,
        "colCount": 1,

      }

    ],
    "showQuestionNumbers": false
  };