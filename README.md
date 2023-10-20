


## gpt-one

- gpt-one is a full stack, ChatGPT integrated NextJS web app that includes NextAuth, Google Fitness API, Supabase Next-Auth plugin for user and session storage and more. 
- Dockerized and scalable. Great starting point for those looking to build their own ChatGPT Saas. 
- Full tech stack listed below 

## Getting Started with gpt-one's current configuration 

- Hearti.ai Prototype SaaS- AI Powered Health Benefits Design

- Enables users to find the best health plan among Healthcare.Gov, Uhone.com, and Aetna.com - for you and your family in minutes. 

- Or use template, change the prompts and UI to fit your use case.

## Install & Run
- Built with NodeJS 18. We'll use npm here but pnpm works too
- For dev mode at localhost:3000, after copying in your env variables into a .env.local file run:
~~~ 
npm install
npm run dev 
~~~

- Production build - be sure to copy your variables into a .env file
~~~
npm install
npm run build
npm run start 
~~~

## Tech Stack
- NextJS 13.2 with pages router
- OpenAI's ChatGPT with chat and form functionality 
- NextAuth oauth2 with Google and Okta providers configured
- Supabase Next-Auth plugin for user and session storage 
- Google Fitness API with all scopes enabled
- Next-Rest Framework
- Zod typed ACA 'Household' API
- ACA Marketplace API 
- Dockerized 
- SurveyJS with 10 page 'Patient Medical Record' form and user survey form
- React lottie
- Tailwind and Flowbite CSS
- SMART on FHIR app demo navlink
- Radix and Material UI

## Convert to AWS Cloudformation 
- Head to github.com/rmourey26/appsync-gpt to deploy this or any other NextJS app as a full stack, enterprise grade AWS Cloudformation
