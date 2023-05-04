var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import styled from 'styled-components';
function ChexModal(_a) {
    var isModalOpen = _a.isModalOpen, closeModal = _a.closeModal, props = __rest(_a, ["isModalOpen", "closeModal"]);
    return (_jsxs(_Fragment, { children: [_jsx(Style.Backdrop, { isModalOpen: isModalOpen, onClick: closeModal }), _jsx(Style.Container, __assign({ open: isModalOpen, isModalOpen: isModalOpen }, props, { children: props.children }))] }));
}
var Style = {
    Backdrop: styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: 'block';\n\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    border: none;\n    box-sizing: border-box;\n    background-color: rgba(0, 0, 0, 0.5);\n\n    ", "\n\n    @keyframes modal-backdrop-show {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    @keyframes modal-backdrop-close {\n      0% {\n        opacity: 1;\n        transform: scale(1);\n      }\n      99% {\n        opacity: 0.01;\n        transform: scale(1);\n      }\n      100% {\n        opacity: 0;\n        transform: scale(0);\n      }\n    }\n\n    z-index: 999;\n  "], ["\n    display: 'block';\n\n    width: 100%;\n    height: 100%;\n\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    border: none;\n    box-sizing: border-box;\n    background-color: rgba(0, 0, 0, 0.5);\n\n    ", "\n\n    @keyframes modal-backdrop-show {\n      from {\n        opacity: 0;\n      }\n      to {\n        opacity: 1;\n      }\n    }\n\n    @keyframes modal-backdrop-close {\n      0% {\n        opacity: 1;\n        transform: scale(1);\n      }\n      99% {\n        opacity: 0.01;\n        transform: scale(1);\n      }\n      100% {\n        opacity: 0;\n        transform: scale(0);\n      }\n    }\n\n    z-index: 999;\n  "])), function (props) {
        if (props.isModalOpen)
            return 'animation:  modal-backdrop-show 0.7s;';
        return 'animation:  modal-backdrop-close 0.7s forwards;';
    }),
    Container: styled.dialog(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    display: flex;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    min-height: 227px;\n\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    padding: 30px;\n    border: none;\n    border-radius: 5px 5px 0 0;\n    box-sizing: border-box;\n    background-color: #fdfdfd;\n\n    ", "\n\n    @keyframes modal-show {\n      from {\n        opacity: 0;\n        transform: translateY(100%);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes modal-close {\n      from {\n        opacity: 1;\n        transform: translateY(0);\n      }\n      to {\n        opacity: 0;\n        transform: translateY(100%);\n      }\n    }\n\n    z-index: 1000;\n  "], ["\n    display: flex;\n\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n\n    width: 100%;\n    min-height: 227px;\n\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    padding: 30px;\n    border: none;\n    border-radius: 5px 5px 0 0;\n    box-sizing: border-box;\n    background-color: #fdfdfd;\n\n    ", "\n\n    @keyframes modal-show {\n      from {\n        opacity: 0;\n        transform: translateY(100%);\n      }\n      to {\n        opacity: 1;\n        transform: translateY(0);\n      }\n    }\n\n    @keyframes modal-close {\n      from {\n        opacity: 1;\n        transform: translateY(0);\n      }\n      to {\n        opacity: 0;\n        transform: translateY(100%);\n      }\n    }\n\n    z-index: 1000;\n  "])), function (props) {
        if (props.isModalOpen)
            return 'animation:  modal-show 0.7s;';
        return 'animation:  modal-close 0.7s forwards;';
    }),
};
export default ChexModal;
var templateObject_1, templateObject_2;
