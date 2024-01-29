// Make sure to add OPENAI_API_KEY as a secret
import { Database } from 'lib/supabase';
import { createClient } from '@supabase/supabase-js';
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
  timeout: 300,
});

const openai = new OpenAIApi(configuration);


function markdownToPlainText(markdown) {
  // Replace any Markdown-specific syntax with plain text equivalents
  const plainText = JSON.stringify(markdown)
    .replace(/(\*\*|__)(.*?)\1/gms, '$2') // bold text
    .replace(/(\*|_)(.*?)\1/gms, '$2') // italic text
    .replace(/#+\s?(.*)/gms, '$1') // headings
    .replace(/(?:^|\n)([*-] .*)/gms, '$1\n') // unordered lists
    .replace(/(?:^|\n)(\d+\. .*)/gms, '$1\n') // ordered lists
    .replace(/```(?:\w+)?\n([\s\S]+?)\n```/gms, '$1') // code blocks
    .replace(/\[(.*?)\]\((.*?)\)/gms, '$1 ($2)'); // links

  return plainText;
}

global.messages = [
  {
    role: "system",
    content: "You provide guidance pertaining to health plans available within the marketplace at healthcare.gov. Additionally, you never ask the customer to provide photos. Also, do not mention that you are a bot."
  },
];
  
export default async function(req, res) {
  const requestMethod = req.method;
  const completion = await openai.createChatCompletion({
    // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
    model: "gpt-3.5-turbo",
    messages: [{ "role": "system", "content": "You provide the most appropriate Healthcare.gov health plan based upon the users age, gender, marital status, number of children, income, budget, medical coverage needs, chronic diseases and conditions, preferred providers. You never ask the customer to upload or provide any photos as our website has no means of doing so at this time. Also, do not mention that you are a bot." }].concat(req.body.messages),
  });
  switch (requestMethod) {
    case 'GET':
      res.status(200).markdownToPlainText(completion.data.choices[0].message)
    default:
      res.status(200).json({ result: completion.data.choices[0].message })
  
      
  console.log(markdownToPlainText(({ result:completion.data.choices[0].message }))+"that was markdown")
  console.log(JSON.stringify(completion.data.choices[0].message)+"that was json stringified")
}
  
};


 
   
  





