"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var fs = __importStar(require("fs"));
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var mjml_react_1 = require("mjml-react");
var he = require('he');
var mjml_1 = __importDefault(require("mjml"));
var html_entities_1 = require("html-entities");
var templates = {
    Fashion_Concierge_Email_1: './components/Teste'
};
var campaignName = process.argv[2];
// const result = namedEntityToHexCode(html);
var TRANSLATIONS = {
    greeting: 'HIIIIIIIIII'
};
// const {html} = render((<mjml><mj-head><mj-title>Last Minute Offer</mj-title><mj-preview>Last Minute Offer...</mj-preview></mj-head><mj-body width="500px"><div><p>AAAAAAAAAAAAA</p><h1>BBBBBBBBBBBBB</h1></div><div><h1>TEEEEEEEEEEESTE</h1></div><mj-section><mj-column><mj-button padding="20px" background-color="#346DB7" href="https://www.wix.com/">HIIIIIIIIII</mj-button></mj-column></mj-section></mj-body></mjml>), {validtionLevel: 'skip'})
var options = {
    keepComments: true,
    beautify: false,
    validationLevel: 'skip'
};
var htmlOutput = (0, mjml_1["default"])("\n\n  <mjml>\n    <mj-body>\n      <mj-section>\n        <mj-column>\n          <mj-text>\n            Hello World!\n          </mj-text>\n        </mj-column>\n      </mj-section>\n    </mj-body>\n  </mjml>\n", options);
// /(<\s*[a-zA-Z][^>]*>(.*?)<\s*/\s*[a-zA-Z]>)/
var compileMjml = function (str) {
    var html = (0, mjml_1["default"])(str, options).html;
    return html;
};
var renderHTML = function () {
    Promise.resolve().then(function () { return __importStar(require(templates[campaignName])); }).then(function (_a) {
        var Component = _a["default"];
        var teste = server_1["default"].renderToString(react_1["default"].createElement(EmailWrapper, null,
            react_1["default"].createElement(ComponentTest, null)));
        var res = addCommentsInHTMLTags(teste);
        var algo = compileMjml(res);
        var hmm = algo.replace(/<!--\s|\s-->/g, '');
        var staticHTML = server_1["default"].renderToStaticMarkup(react_1["default"].createElement(EmptyTemplate, { htmlData: hmm }));
        var outputFile = "./output.html";
        fs.writeFileSync(outputFile, (0, html_entities_1.decode)(staticHTML));
    });
};
// \s(?=</[^mj|/mj]+.*>)
// \s(?=<\/[^mj|/mj]+.[^ml]*>)
function addCommentsInHTMLTags(str) {
    return str.trim().replace(/<[^mj|/mj]+.[^ml]*>/g, "<!--$&-->");
    // const aff = str.trim().split('');
    // aff.forEach((char, index) => {
    //   const isHTMLClosingTag = char + aff[index + 1] === '</' && (char + aff[index + 1] +  aff[index + 2] !== '</m');
    //   const isHTMLOpeningTag = char === '<' && char + aff[index + 1] !== '</' && char + aff[index + 1] !== '<m';
    //   if(isHTMLOpeningTag) {
    //     aff[index] = '<!--' + char;
    //   } else if(isHTMLClosingTag) {
    //     aff[index] = ' ' + char;
    //   }
    //   // console.log(char + aff[index + 1] +  aff[index + 2])
    //   // if(char + aff[index + 1] +  aff[index + 2] !== '</m') {
    //   //   aff[index] = ' ' + char;
    //   // }
    // })
    // const htmlArrayWithOpeningHTMLTagsCommented = aff.join('').split(/\s(?=<\/[^mj|/mj]+.[^ml]*>)/);
    // const teste = htmlArrayWithOpeningHTMLTagsCommented.map(codeLine => {
    //   return codeLine.replace(/>{1}?/, ">-->");
    // });
    // // console.log(teste.join(''));
    // // const htmlTagsFullyCommented = htmlWithOpeningHTMLTagsCommented.replace(/\s(?=<\/[^mj|/mj]+.[^ml]*>)/, "-->")
    // // console.log(htmlTagsFullyCommented);
    // // aff.forEach((char, index) => {
    // //   const condition = char + aff[index + 1] !== '</' && char + aff[index + 1] !== '<m' && char === '<'; 
    // //   if(condition) {
    // //     aff[index] = ' <!--' + char;
    // //   }
    // //   if(char + aff[index + 1] === '</' && char + aff[index + 1] !== '<m' && char === '<') {
    // //     aff[index] = ' ' + char;
    // //   }
    // // })
    // // const strWithHalfComment = aff.join('');
    // // const teste = (strWithHalfComment.split(/\s(?=<\/[^mj|/mj]+.*>)/g));
    // // teste.forEach((char, index) => {
    // //   if(index > 0) {
    // //     teste[index] = '-->' + char;
    // //   }
    // // })
    // // console.log(teste.join(''));
    // // const algo = aff.join('');
    // // const resSplit = algo.split(/\s(?=<m[a-zA-Z]+.*>)/);
    // // console.log(resSplit.join('').split(''))
    // // resSplit.join('').split('').forEach((char, index) => {
    // //   if(char === '<' && aff[index + 1] !== 'm') {
    // //     aff[index] = '<!-- '
    // //   }
    // // })
}
renderHTML();
function EmptyTemplate(_a) {
    var htmlData = _a.htmlData;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, htmlData));
}
function ComponentTest() {
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("h1", null, "TEEEEEEEEEEESTE")));
}
function EmailWrapper(_a) {
    var children = _a.children;
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mjml_react_1.Mjml, null,
            react_1["default"].createElement(mjml_react_1.MjmlHead, null,
                react_1["default"].createElement(mjml_react_1.MjmlTitle, null, "Last Minute Offer"),
                react_1["default"].createElement(mjml_react_1.MjmlPreview, null, "Last Minute Offer...")),
            react_1["default"].createElement(mjml_react_1.MjmlBody, { width: 500 }, children))));
}
function App() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", null,
            react_1["default"].createElement("p", null, "AAAAAAAAAAAAA")),
        react_1["default"].createElement(ComponentTest, null),
        react_1["default"].createElement(mjml_react_1.MjmlSection, null,
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlButton, { padding: "20px", backgroundColor: "#346DB7", href: "https://www.wix.com/" }, TRANSLATIONS.greeting)))));
}
