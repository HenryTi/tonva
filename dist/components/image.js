"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Image = void 0;
var React = __importStar(require("react"));
var classnames_1 = __importDefault(require("classnames"));
var nav_1 = require("./nav");
// src = .src, 表示fontawesome Icon
function Image(props) {
    var className = props.className, style = props.style, src = props.src, altImage = props.altImage;
    var icon;
    if (src) {
        if (src.indexOf('.') !== 0) {
            if (src.startsWith(':') === true) {
                src = nav_1.nav.resUrl + src.substr(1);
            }
            return React.createElement("img", { src: src, className: className, alt: "img", style: style, onError: function (evt) {
                    if (altImage)
                        evt.currentTarget.src = altImage;
                    else
                        evt.currentTarget.src = 'https://tv.jkchemical.com/imgs/0001.png';
                } });
        }
        icon = src.substr(1);
    }
    else {
        icon = 'file-o';
    }
    return React.createElement("span", { className: classnames_1.default(className, 'image-none'), style: style },
        React.createElement("i", { className: 'fa fa-' + icon }));
}
exports.Image = Image;
//# sourceMappingURL=image.js.map