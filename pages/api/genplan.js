import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function (req, res) {
  const { budgetMin, budgetMax, gender, age, chronic, zipcode } = req.body;
  const completion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: generatePrompt(budgetMin, budgetMax, gender, age, chronic, zipcode),
    temperature: 0.1,
    max_tokens: 2048,
  });
  res.status(200).json({ result: completion.data.choices[0].text });
}

function generatePrompt(budgetMin, budgetMax, gender, age, chronic, zipcode) {
  return `Suggest healthplans from healthcare.gov, uhone.com, and aetna.com priced between ${budgetMin}$ and ${budgetMax}$ for a ${age} years old ${gender} with ${chronic} residing in zipcode ${zipcode}.`;
}