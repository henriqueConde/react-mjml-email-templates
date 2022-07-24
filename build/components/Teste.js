"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var mjml_react_1 = require("mjml-react");
var react_1 = __importDefault(require("react"));
var styles_1 = require("../styles");
var generate = function () {
    return (react_1["default"].createElement(mjml_react_1.Mjml, null,
        react_1["default"].createElement(mjml_react_1.MjmlHead, null,
            react_1["default"].createElement(mjml_react_1.MjmlTitle, null, "Last Minute Offer"),
            react_1["default"].createElement(mjml_react_1.MjmlPreview, null, "Last Minute Offer...")),
        react_1["default"].createElement(mjml_react_1.MjmlBody, { width: 500 },
            react_1["default"].createElement(mjml_react_1.MjmlSection, { fullWidth: true, backgroundColor: "#efefef" },
                react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                    react_1["default"].createElement(mjml_react_1.MjmlImage, { src: "https://static.wixstatic.com/media/5cb24728abef45dabebe7edc1d97ddd2.jpg" }))),
            react_1["default"].createElement(mjml_react_1.MjmlSection, null,
                react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                    react_1["default"].createElement(mjml_react_1.MjmlButton, { padding: "20px", backgroundColor: "#346DB7", href: "https://www.wix.com/" }, "This Yet Another Template"))),
            react_1["default"].createElement(mjml_react_1.MjmlSection, null,
                react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                    react_1["default"].createElement(mjml_react_1.MjmlText, null,
                        react_1["default"].createElement("a", { href: "/" }, "Go Back")))))));
};
function Teste() {
    var html = (0, mjml_react_1.render)(generate(), { validationLevel: 'soft' }).html;
    return (react_1["default"].createElement("div", { style: styles_1.styles.container }, html));
}
exports["default"] = Teste;
