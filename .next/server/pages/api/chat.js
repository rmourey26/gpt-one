"use strict";
(() => {
var exports = {};
exports.id = 170;
exports.ids = [170];
exports.modules = {

/***/ 185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ chat)
});

;// CONCATENATED MODULE: external "openai"
const external_openai_namespaceObject = require("openai");
;// CONCATENATED MODULE: external "aws-amplify"
const external_aws_amplify_namespaceObject = require("aws-amplify");
;// CONCATENATED MODULE: ./pages/api/chat.js
// Make sure to add OPENAI_API_KEY as a secret


// Amplify SSR configuration needs to be done within each API route
external_aws_amplify_namespaceObject.Amplify.configure({
    ...awsExports,
    ssr: true
});
const configuration = new external_openai_namespaceObject.Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new external_openai_namespaceObject.OpenAIApi(configuration);
function markdownToPlainText(markdown) {
    // Replace any Markdown-specific syntax with plain text equivalents
    const plainText = JSON.stringify(markdown).replace(/(\*\*|__)(.*?)\1/gms, "$2") // bold text
    .replace(/(\*|_)(.*?)\1/gms, "$2") // italic text
    .replace(/#+\s?(.*)/gms, "$1") // headings
    .replace(/(?:^|\n)([*-] .*)/gms, "$1\n") // unordered lists
    .replace(/(?:^|\n)(\d+\. .*)/gms, "$1\n") // ordered lists
    .replace(/```(?:\w+)?\n([\s\S]+?)\n```/gms, "$1") // code blocks
    .replace(/\[(.*?)\]\((.*?)\)/gms, "$1 ($2)"); // links
    return plainText;
}
global.messages = [
    {
        role: "system",
        content: "You provide guidance pertaining to health plans available within the marketplace at healthcare.gov. Additionally, you never ask the customer to provide photos. Also, do not mention that you are a bot."
    }
];
/* harmony default export */ async function chat(req, res) {
    const requestMethod = req.method;
    const completion = await openai.createChatCompletion({
        // You need early access to GPT-4, otherwise use "gpt-3.5-turbo"
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "system",
                "content": "You help customers make more informed decisions pertaining to their health care and guide them toward the best health plan available at healthcare.gov based upon their age, marital status, number of children, budget, coverage requirements, preferred medical providers, if anyone has any ongoing diseases or disabilities requiring atypical medical care. Additionally, you never ask the customer to upload or provide any photos as our website has no means of doing so at this time. Also, do not mention that you are a bot."
            }
        ].concat(req.body.messages)
    });
    switch(requestMethod){
        case "GET":
            res.status(200).markdownToPlainText(completion.data.choices[0].message);
        default:
            res.status(200).json({
                result: completion.data.choices[0].message
            });
            console.log(markdownToPlainText({
                result: completion.data.choices[0].message
            }) + "that was markdown");
            console.log(JSON.stringify(completion.data.choices[0].message) + "that was json stringified");
    }
    console.log(JSON.stringify(completion.data.choices[0].text) + "that was text");
}
;


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(185));
module.exports = __webpack_exports__;

})();