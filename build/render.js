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
var mjml_1 = __importDefault(require("mjml"));
var html_entities_1 = require("html-entities");
var templates = {
    Fashion_Concierge_Email_1: './components/Teste'
};
var campaignName = 'Fashion_Concierge_Email_1';
var options = {
    keepComments: true,
    beautify: false,
    validationLevel: 'skip'
};
var compileMjml = function (str) {
    var html = (0, mjml_1["default"])(str, options).html;
    return html;
};
var renderHTML = function () {
    Promise.resolve().then(function () { return __importStar(require(templates[campaignName])); }).then(function (_a) {
        var Component = _a["default"];
        var rawStringMarkup = server_1["default"].renderToString(react_1["default"].createElement(EmailWrapper, null,
            react_1["default"].createElement(Component, null)));
        var markupWithHTMLCommented = addCommentsInHTMLTags(rawStringMarkup);
        var compiledMarkupFromMJML = compileMjml(markupWithHTMLCommented);
        var markupWithoutHTMLComments = compiledMarkupFromMJML.replace(/<!--\s|\s-->/g, '');
        var staticHTML = server_1["default"].renderToStaticMarkup(react_1["default"].createElement(EmptyTemplate, { htmlData: markupWithoutHTMLComments }));
        var outputFile = "./output.html";
        fs.writeFileSync(outputFile, (0, html_entities_1.decode)(staticHTML));
    });
};
function addCommentsInHTMLTags(rawToStringMarkup) {
    var rawMarkupArray = rawToStringMarkup.split('');
    rawMarkupArray.forEach(function (char, index) {
        if (char === '>') {
            rawMarkupArray[index] = char + ' ';
        }
    });
    var markupArrayWithSpaces = rawMarkupArray.join('').split(/\s(?=<)/g);
    markupArrayWithSpaces.forEach(function (char, index) {
        var condition = !char.includes('<mj') && !char.includes('</mj');
        if (condition) {
            markupArrayWithSpaces[index] = '<!--' + char + '-->';
        }
    });
    return markupArrayWithSpaces.join('');
}
renderHTML();
function EmptyTemplate(_a) {
    var htmlData = _a.htmlData;
    return (react_1["default"].createElement(react_1["default"].Fragment, null, htmlData));
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
