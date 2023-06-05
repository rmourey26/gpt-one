import { useEffect, useState } from 'react';

import NoSSR from "../components/nossr";

// initialize OpenAI with your API key
import { Configuration, OpenAIApi, openai } from "openai";

const configuration = new Configuration({

  apiKey: process.env.OPENAI_API_KEY,

});

const openai = new OpenAIApi(configuration);


const HealthSummary = ({ healthData }) => {
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    // This is a mock function to show how one might generate a health summary
    const generateSummary = async () => {
      try {
        // format the health data into a prompt for GPT-4
        const prompt = `Generate a health summary for a person with the following details:\n` +
          `Age: ${healthData.age}\n` +
          `Weight: ${healthData.weight}\n` +
          `Height: ${healthData.height}\n` +
          `Blood Type: ${healthData.bloodType}\n` +
          `Medical Conditions: ${healthData.medicalConditions.join(", ")}`;

        // call the OpenAI API
        const response = await openai.Completion.create({
          engine: 'text-davinci-004',
          prompt: prompt,
          max_tokens: 150,
        });

        // use the generated text as the health summary
        setSummary(response.choices[0].text.trim());
      } catch (error) {
        console.error(error);
      }
    };

    generateSummary();
  }, [healthData]);

  if (!summary) {
    return <p>Loading...</p>;
  }

  return (
    <div>
     <NoSSR>
      <h2>Health Summary</h2>
      <p>{summary}</p>
      </NoSSR>
    </div>
  );
};

export default HealthSummary;

