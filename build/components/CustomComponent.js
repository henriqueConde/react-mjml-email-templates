"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CustomComponent = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("../styles");
var CustomComponent = function () {
    return (react_1["default"].createElement("div", { style: styles_1.styles.container },
        react_1["default"].createElement("tbody", null,
            react_1["default"].createElement("tr", null,
                react_1["default"].createElement("td", null,
                    react_1["default"].createElement("div", { style: { fontFamily: "Ubuntu, Helvetica, Arial, sans-serif", fontSize: "13px", lineHeight: "1", textAlign: "left", color: "#000000" } },
                        react_1["default"].createElement("a", { href: "/" }, "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA")))))));
};
exports.CustomComponent = CustomComponent;
