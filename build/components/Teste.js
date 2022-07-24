"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mjml_react_1 = require("mjml-react");
var react_1 = __importDefault(require("react"));
var CustomComponent_1 = require("./CustomComponent");
function Teste() {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mjml_react_1.MjmlSection, { fullWidth: true, backgroundColor: "#efefef" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlImage, { src: "https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" }))),
        react_1["default"].createElement(mjml_react_1.MjmlSection, null,
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlButton, { padding: "20px", backgroundColor: "#346DB7", href: "https://www.wix.com/" }, "This Yet Another Template"))),
        react_1["default"].createElement(mjml_react_1.MjmlSection, null),
        react_1["default"].createElement(mjml_react_1.MjmlSection, null,
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlText, null,
                    react_1["default"].createElement("a", { href: "/" }, "Go Back")))),
        react_1["default"].createElement(CustomComponent_1.CustomComponent, null)));
}
exports["default"] = Teste;
