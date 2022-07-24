"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var react_1 = __importDefault(require("react"));
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
exports["default"] = App;
