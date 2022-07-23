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
var prettier_1 = __importDefault(require("prettier"));
var react_1 = __importDefault(require("react"));
var server_1 = __importDefault(require("react-dom/server"));
var styles_1 = require("./styles");
var templates = {
    Fashion_Concierge_Email_1: './components/Teste'
};
var campaignName = process.argv[2];
var render = function () {
    Promise.resolve().then(function () { return __importStar(require(templates[campaignName])); }).then(function (_a) {
        var Component = _a["default"];
        var html = server_1["default"].renderToString(react_1["default"].createElement(App, { styles: styles_1.styles },
            react_1["default"].createElement(Component, null)));
        console.log(html);
        var htmlWDoc = "<!DOCTYPE html>" + html;
        var prettyHtml = prettier_1["default"].format(htmlWDoc, { parser: "html" });
        var outputFile = "./output.html";
        fs.writeFileSync(outputFile, prettyHtml);
        console.log("Wrote ".concat(outputFile));
    });
};
render();
function App(_a) {
    var styles = _a.styles, children = _a.children;
    return (react_1["default"].createElement("html", { lang: "en" },
        react_1["default"].createElement("head", null,
            react_1["default"].createElement("meta", { charSet: "utf-8" }),
            react_1["default"].createElement("title", null, "Hello world")),
        react_1["default"].createElement("body", null,
            react_1["default"].createElement("div", { style: styles.container },
                react_1["default"].createElement("span", null, "D"),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("p", null, "Desmond Nyamador"),
                    react_1["default"].createElement("p", null, "I just learned an easy way to style React Components")),
                children))));
}
