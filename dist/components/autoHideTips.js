"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoHideTips = void 0;
var react_1 = __importDefault(require("react"));
var mobx_react_1 = require("mobx-react");
//export function autoHideTips(visible: IObservableValue<boolean>, tips:string|JSX.Element, timeout?:number):React.FunctionComponentElement<any>;
//export function autoHideTips(tips: IObservableValue<string>, tips:string|JSX.Element, timeout?:number):React.FunctionComponentElement<any>;
function autoHideTips(tips, templet, timeout) {
    /*
    export function autoHideTips(tips: IObservableValue<boolean|string|JSX.Element>, timeout?:number):React.FunctionComponentElement<any>;
    export function autoHideTips(tips: IObservableValue<boolean|string|JSX.Element>, templet:(tips: boolean|string|JSX.Element) => JSX.Element, timeout?:number):React.FunctionComponentElement<any>;
    
    export function autoHideTips(tips: IObservableValue<boolean|string|JSX.Element>, ...params:any[]) {
    */
    var timer;
    return react_1.default.createElement(mobx_react_1.observer(function () {
        if (timer) {
            clearTimeout(timer);
            timer = undefined;
        }
        var t = tips.get();
        if (!t)
            return null;
        if (timeout === undefined)
            timeout = 3000;
        //let p0 = params[0];
        //let timeout = 3000;
        //let templet: (tips: boolean|string|JSX.Element) => JSX.Element;
        /*
        switch (typeof p0) {
            case 'number':
                timeout = p0;
                break;
            case 'function':
                templet = p0;
                let p1 = params[1];
                if (typeof p1 === 'number') {
                    timeout = p1;
                }
                break;
        }
        */
        if (timeout > 0) {
            timer = setTimeout(function () {
                tips.set(null);
            }, timeout);
        }
        switch (typeof templet) {
            case 'undefined': return react_1.default.createElement(react_1.default.Fragment, null, t);
            case 'function': return templet(t);
            case 'string': return react_1.default.createElement(react_1.default.Fragment, null, templet);
            default: return templet;
        }
    }));
}
exports.autoHideTips = autoHideTips;
;
//# sourceMappingURL=autoHideTips.js.map