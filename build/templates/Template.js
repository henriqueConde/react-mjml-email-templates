"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
var mjml_react_1 = require("mjml-react");
var CustomComponent_1 = require("../components/CustomComponent");
var Template = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(mjml_react_1.MjmlSection, { "background-color": "#f0f0f0" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlText, { "font-style": "italic", "font-size": "20px", color: "#626262" }, "My Company"))),
        react_1["default"].createElement(mjml_react_1.MjmlSection, { "background-url": "http://1.bp.blogspot.com/-TPrfhxbYpDY/Uh3Refzk02I/AAAAAAAALw8/5sUJ0UUGYuw/s1600/New+York+in+The+1960's+-+70's+(2).jpg", "background-size": "cover", "background-repeat": "no-repeat" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, { width: "600px" },
                react_1["default"].createElement(mjml_react_1.MjmlText, { align: "center", color: "#fff", "font-size": "40px", "font-family": "Helvetica Neue" }, "Slogan here"),
                react_1["default"].createElement(mjml_react_1.MjmlButton, { "background-color": "#F63A4D", href: "#" }, "Promotion"))),
        react_1["default"].createElement(mjml_react_1.MjmlSection, { "background-color": "#fafafa" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, { width: "400px" },
                react_1["default"].createElement(mjml_react_1.MjmlText, { "font-style": "italic", "font-size": "20px", "font-family": "Helvetica Neue", color: "#626262" }, "My Awesome Text"),
                react_1["default"].createElement(mjml_react_1.MjmlText, { color: "#525252" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus, sit amet suscipit nibh. Proin nec commodo purus. Sed eget nulla elit. Nulla aliquet mollis faucibus."),
                react_1["default"].createElement(mjml_react_1.MjmlButton, { "background-color": "#F45E43", href: "#" }, "Learn more"))),
        react_1["default"].createElement(mjml_react_1.MjmlSection, { "background-color": "white" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlImage, { width: "200px", src: "https://designspell.files.wordpress.com/2012/01/sciolino-paris-bw.jpg" })),
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlText, { "font-style": "italic", "font-size": "20px", "font-family": "Helvetica Neue", color: "#626262" }, "Find amazing places"),
                react_1["default"].createElement(mjml_react_1.MjmlText, { color: "#525252" }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus."))),
        react_1["default"].createElement(CustomComponent_1.CustomComponent, null),
        react_1["default"].createElement(mjml_react_1.MjmlSection, { "background-color": "#fbfbfb" },
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlImage, { width: "100px", src: "http://191n.mj.am/img/191n/3s/x0l.png" })),
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlImage, { width: "100px", src: "http://191n.mj.am/img/191n/3s/x01.png" })),
            react_1["default"].createElement(mjml_react_1.MjmlColumn, null,
                react_1["default"].createElement(mjml_react_1.MjmlImage, { width: "100px", src: "http://191n.mj.am/img/191n/3s/x0s.png" })))));
};
exports["default"] = Template;
