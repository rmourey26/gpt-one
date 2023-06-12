import { defineEndpoints } from 'next-rest-framework/client';
import { z } from 'zod';

//in house aca data api 
const householdSchema = z.object({

  household: z.object(

    {
      effective_date: z.string(),
      income: z.string(),
      has_married_couple: z.string(),
      unemployment_received: z.string(),
      people: z.array([{
        age: z.string(),
        dob: z.string(),
        aptc_eligible: z.boolean(),
        does_not_cohabitate: z.boolean(),
        gender: z.string(),
        has_mec: z.boolean(),
        is_parent: z.boolean(), 
        is_pregnant: z.boolean(),
        relationship: z.string(),
        uses_tobacco: z.string(),
        utilization: z.string(),
    }]),
    
  market: z.string(),

  place: z.object(
    {
      countyfips: z.string(), 
      state: z.string(), 
      zipcode: z.string()
    }),

  year: z.string(),
    
    
    }), 


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
        
        Accept: 'application/json',
        contentType: 'application/json',

        schema: z.object(householdSchema)

      }

    ],

    handler: ({ res }) => {

      // Any other content type will lead to TS error.

      res.setHeader(['Accept', 'application/json'],['content-type', 'application/json']);

      // Any other status or JSON format will lead to TS error.

      res.status(200).json([

        {

          household: ({
            income: '',
            people: ([{
              age: '',
              aptc_eligible: true,
              gender: '',
              uses_tobacco: null,
            }])

          }),
         
          market: '',

          place: ([{
            countyfips: '',
            state: '',
            zipcode: '',
          }]),

          year: '',

        }

      ]);

    }

  },

  POST: {

    input: {
      Accept: 'application/json',
      contentType: 'application/json',

      body: z.object({

        household: z.object(),

        market: z.string(),

        place: z.object(),

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

          household,
          market,
                          // Any other attribute will lead to TS error.

        },

        query: {

          place, // Any other attribute will lead to TS error.

        }

      }

    }) => {

      // Any other content type will lead to TS error.

      res.setHeader('content-type', 'application/json');
res.setHeader('Accept', 'application/json');
      // Any other status or JSON format will lead to TS error.

      res.status(201).json({

        household,

        market,

        place,

      });

    }

  }

});
