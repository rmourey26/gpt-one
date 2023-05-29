import { defineEndpoints } from 'next-rest-framework/client';
import { z } from 'zod';


const householdSchema = z.object({

  id: z.string(),

  effective_date: z.string(),

  has_married_couple: z.string(),
  
  income: z.string(),
  
  unemployment_received: z.string(),

  people: z.array([
    age,
    dob,
    aptc_eligible,
    does_not_cohabitate,
    gender,
    has_mec,
    is_parent,
    is_pregnant,
    relationship,
    uses_tobacco,
    utilization,
  ]),

  market: z.string(),
  place: z.object(countyfips, state, zipcode),
  year: z.string(),
  completed: z.boolean(),

});


const householdData=(
   
  { "effective_date": "", 
    "has_married_couple": "",
    "income": "",
    "unemployment_received":"",
    "people": [ 
     { 
       "age": 27, 
       "dob": "1992-01-01", 
       "aptc_eligible": true,
       "does_not_cohabitate": false, 
       "gender": "Female", 
       "has_mec": false, 
       "is_parent": false, 
       "is_pregnant": false, 
       "relationship": "Self", 
       "uses_tobacco": false, 
       "utilization": "Medium",
     }, 
     { 
       "age": 25,
       "dob": "1994-03",
       "aptc_eligible": true, 
       "does_not_cohabitate": false, 
       "gender": "Male", 
       "has_mec": false, 
       "is_parent": false, 
       "is_pregnant": false, 
       "relationship": "Spouse", 
       "uses_tobacco": false, 
       "utilization": "Medium" } ] }, 
       {
       "market": "Individual", "place": { "countyfips": "37057", "state": "NC", "zipcode": 27360 }, "year": 2019}
       );

export default defineEndpoints({

  GET: {

    output: [

      {

        status: 200,

        contentType: 'application/json',

        schema: z.array(householdSchema)

      }

    ],

    handler: ({ res }) => {

      // Any other content type will lead to TS error.

      res.setHeader('content-type', 'application/json');

      // Any other status or JSON format will lead to TS error.

      res.status(200).json([

        {

          id: 'foo',

          effective_date: 'bar',

          has_married_couple: '',

          income:'',
          
          unemployment_received: '',

          people: (['']),

          market: '',

          place: ([{}]),

          year: '',

          completed: true,

        }

      ]);

    }

  },

  POST: {

    input: {

      contentType: 'application/json',

      body: z.object({

        market: z.string(),

      }),

      query: z.object({

        place: z.object()

      })

    },

    output: [

      {

        status: 201,

        contentType: 'application/json',

        schema: householdSchema

      }

    ],

    handler: ({

      res,

      req: {

        body: {

          market // Any other attribute will lead to TS error.

        },

        query: {

          place // Any other attribute will lead to TS error.

        }

      }

    }) => {

      // Any other content type will lead to TS error.

      res.setHeader('content-type', 'application/json');

      // Any other status or JSON format will lead to TS error.

      res.status(201).json({

        id: 'foo',

        market: '',

        completed: false

      });

    }

  }

});
