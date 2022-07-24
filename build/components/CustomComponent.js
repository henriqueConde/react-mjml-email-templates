"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.CustomComponent = void 0;
var react_1 = __importDefault(require("react"));
var styles_1 = require("../styles");
var CustomComponent = function () {
    var customWrapper = styles_1.styles.customWrapper, tdCustom = styles_1.styles.tdCustom, divCustom = styles_1.styles.divCustom, divTextCustom = styles_1.styles.divTextCustom;
    return (react_1["default"].createElement("div", { style: customWrapper },
        react_1["default"].createElement("table", { border: 0, cellPadding: 0, cellSpacing: 0, role: "presentation", style: { verticalAlign: "top" }, width: "100%" },
            react_1["default"].createElement("tbody", null,
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", { align: "left", style: tdCustom },
                        react_1["default"].createElement("div", { style: divTextCustom }, "THIS IS A CUSTOM COMPONENT"))),
                react_1["default"].createElement("tr", null,
                    react_1["default"].createElement("td", { align: "left", style: tdCustom },
                        react_1["default"].createElement("div", { style: divTextCustom }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin rutrum enim eget magna efficitur, eu semper augue semper. Aliquam erat volutpat. Cras id dui lectus. Vestibulum sed finibus lectus.")))))));
};
exports.CustomComponent = CustomComponent;
