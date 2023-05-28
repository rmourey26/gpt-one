export const json = {
    "elements": [{
      "type": "dropdown",
      "name": "country",
      "title": "Select a country",
      "description": "A full list of countries is queried from a RESTful web service.",
      "choicesByUrl": {
        "url": " https://marketplace.api.healthcare.gov/api/v1/",
        "valueName": "name"
      }
    }, {
      "type": "panel",
      "name": "countriesByRegion",
      "title": "Filter countries by selected region",
      "description": "Only countries from the selected region are queried.",
      "elements": [{
        "type": "dropdown",
        "name": "region",
        "title": "Select a region",
        "choices": ["Africa", "Americas", "Asia", "Europe", "Oceania"]
      }, {
        "type": "dropdown",
        "name": "reg_country",
        "title": "Select a country",
        "choicesByUrl": {
          "url": "https://surveyjs.io/api/CountriesExample?region={region}",
          "valueName": "name"
        }
      }]
    }],
    "showQuestionNumbers": false
  };