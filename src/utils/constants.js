export const forms = [
    {  
      "id": "1",
      "name": "A fancy form",
      "description": "This is a mocked form for Sytex's coding challenge",
      "created_at": "2023-01-01T00:00:00.000Z",
      "content": [
        {
          "index": "1.1",
          "type": "entry",
          "input_type": 3,
          "label": "Are you excited for this challenge?",
          "answer": null
        },
        {
          "index": "1.2",
          "type": "group",
          "name": "A few questions about you"
        },
        {
          "index": "1.2.1",
          "type": "entry",
          "input_type": 1,
          "label": "What's your name?",
          "answer": null
        },
        {
          "index": "1.2.2",
          "type": "entry",
          "input_type": 2,
          "label": "How long have you been coding?",
          "answer": null,
          "options": [
            {
              "label": "Less than a year",
              "value": "less_than_a_year"
            },
            {
              "label": "1-3 years",
              "value": "1_3_years"
            },
            {
              "label": "3-5 years",
              "value": "3_5_years"
            },
            {
              "label": "5-10 years",
              "value": "5_10_years"
            },
            {
              "label": "More than 10 years",
              "value": "more_than_10_years"
            }
          ]
        },
        {
          "index": "1.3",
          "type": "entry",
          "input_type": 1,
          "label": "Anything else you want to tell us?",
          "answer": null
        }
      ]
    },
    {
      "id": "2",
      "name": "Installation form",
      "description": "This is a mocked form for Sytex's coding challenge",
      "created_at": "2023-01-01T00:00:00.000Z",
      "content": [
        {
          "index": "1",
          "type": "group",
          "name": "General information"
        },
        {
          "index": "1.1",
          "type": "entry",
          "input_type": 1,
          "label": "Site name",
          "answer": null
        },
        {
          "index": "1.2",
          "type": "entry",
          "input_type": 2,
          "label": "Type of site",
          "answer": null,
          "options": [
            {
              "label": "Green field",
              "value": "greenfield"
            },
            {
              "label": "Roof top",
              "value": "rooftop"
            }
          ]
        },
        {
          "index": "1.3",
          "type": "entry",
          "input_type": 3,
          "label": "Is the site in a good condition?",
          "answer": null
        },
        {
          "index": "2",
          "type": "group",
          "name": "Technical information"
        },
        {
          "index": "2.1",
          "type": "entry",
          "input_type": 3,
          "label": "Is the site connected to the grid?",
          "answer": null
        },
        {
          "index": "2.2",
          "type": "entry",
          "input_type": 2,
          "label": "Type of external power supply",
          "answer": null,
          "options": [
            {
              "label": "Single phase",
              "value": "single_phase"
            },
            {
              "label": "Three phase",
              "value": "three_phase"
            }
          ]
        }
      ]
    },
    {
      "id": "3",
      "name": "Internet connection form",
      "description": "This is a other mocked form for Sytex's coding challenge",
      "created_at": "2023-01-01T00:00:00.000Z",
      "content": [
        {
          "index": "1",
          "type": "group",
          "name": "General information"
        },
        {
          "index": "1.1",
          "type": "entry",
          "input_type": 1,
          "label": "Site name",
          "answer": null
        },
        {
          "index": "1.2",
          "type": "entry",
          "input_type": 2,
          "label": "Type of site",
          "answer": null,
          "options": [
            {
              "label": "Green field",
              "value": "greenfield"
            },
            {
              "label": "Roof top",
              "value": "rooftop"
            }
          ]
        },
        {
          "index": "1.3",
          "type": "entry",
          "input_type": 3,
          "label": "Is the site in a good condition?",
          "answer": null
        },
        {
          "index": "2",
          "type": "group",
          "name": "Technical information"
        },
        {
          "index": "2.1",
          "type": "entry",
          "input_type": 3,
          "label": "Was it an easy connection?",
          "answer": null
        },
        {
          "index": "2.2",
          "type": "entry",
          "input_type": 2,
          "label": "Type of connection",
          "answer": null,
          "options": [
            {
              "label": "Optical fiber",
              "value": "opticalfiber"
            },
            {
              "label": "Satellite",
              "value": "satellite"
            }
          ]
        },
      ]
    },
    {
      "id": "4",
      "name": "Water conection form",
      "description": "This is a mocked water form for sytex challenge",
      "created_at": "2023-01-01T00:00:00.000Z",
      "content": [
        {
          "index": "1",
          "type": "group",
          "name": "General information"
        },
        {
          "index": "1.1",
          "type": "entry",
          "input_type": 1,
          "label": "Site name",
          "answer": null
        },
        {
          "index": "1.2",
          "type": "entry",
          "input_type": 2,
          "label": "Type of site",
          "answer": null,
          "options": [
            {
              "label": "Green field",
              "value": "greenfield"
            },
            {
              "label": "Roof top",
              "value": "rooftop"
            }
          ]
        },
        {
          "index": "1.3",
          "type": "entry",
          "input_type": 3,
          "label": "Is the site in a good condition?",
          "answer": null
        },
        {
          "index": "2",
          "type": "group",
          "name": "Technical information"
        },
        {
          "index": "2.1",
          "type": "entry",
          "input_type": 3,
          "label": "Was it an easy connection?",
          "answer": null
        },
      ]
    }
]

export const types = {
    entry: 'entry',
    group: 'group'
}

export const defaultOptions = [
  {
      label: 'Yes',
      value: 'true'
  },
  {
      label: 'No',
      value: 'false'
  }
]