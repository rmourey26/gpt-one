// Make sure to add OPENAI_API_KEY as a secret

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
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
    messages: [{ "role": "system", "content": "You evaluate a users health profile that contains information like weight, age, height, blood type, blood pressure, medical conditions and provide general guidance to help improve the users life" }].concat(req.body.messages),
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






