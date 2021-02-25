"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioUploader = exports.ImageUploader = exports.ResUploader = void 0;
var React = __importStar(require("react"));
var nav_1 = require("./nav");
var loading_1 = require("./loading");
var image_1 = require("./image");
var page_1 = require("./page/page");
var mobx_react_1 = require("mobx-react");
var mobx_1 = require("mobx");
var simple_1 = require("./simple");
var ResUploader = /** @class */ (function (_super) {
    __extends(ResUploader, _super);
    function ResUploader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upload = function (formData) { return __awaiter(_this, void 0, void 0, function () {
            var resUrl, headers, res, json, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        resUrl = nav_1.nav.resUrl + 'upload';
                        if (!formData)
                            formData = this.buildFormData();
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, 5, 6]);
                        nav_1.nav.startWait();
                        headers = new Headers();
                        headers.append('Access-Control-Allow-Origin', '*');
                        return [4 /*yield*/, fetch(resUrl, {
                                method: "POST",
                                body: formData,
                                headers: headers,
                            })];
                    case 2:
                        res = _a.sent();
                        return [4 /*yield*/, res.json()];
                    case 3:
                        json = _a.sent();
                        return [2 /*return*/, ':' + json.res.id];
                    case 4:
                        err_1 = _a.sent();
                        console.error('%s %s', resUrl, err_1);
                        return [2 /*return*/, { error: err_1 }];
                    case 5:
                        nav_1.nav.endWait();
                        return [7 /*endfinally*/];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.onFilesChange = function (evt) {
            var onFilesChange = _this.props.onFilesChange;
            if (onFilesChange)
                onFilesChange(evt);
            var files = evt.target.files;
            var len = files.length;
            var names = [];
            for (var i = 0; i < len; i++) {
                names.push(files.item(i).name);
            }
            _this.fileName = names.join(', ');
        };
        return _this;
    }
    ResUploader.prototype.buildFormData = function () {
        var maxSize = this.props.maxSize;
        if (maxSize === undefined || maxSize <= 0)
            maxSize = 100000000000;
        else
            maxSize = maxSize * 1024;
        var files = this.fileInput.files;
        var data = new FormData();
        var len = files.length;
        for (var i = 0; i < len; i++) {
            var file = files[i];
            if (file.size > maxSize)
                return null;
            data.append('files[]', file, file.name);
        }
    };
    ResUploader.prototype.getFile0 = function () {
        return this.fileInput.files[0];
    };
    ResUploader.prototype.render = function () {
        var _this = this;
        var _a = this.props, className = _a.className, multiple = _a.multiple, label = _a.label;
        return React.createElement("div", null,
            React.createElement("label", { className: "btn btn-outline-success" },
                label || '选择文件',
                React.createElement("input", { className: className, ref: function (t) { return _this.fileInput = t; }, onChange: this.onFilesChange, type: 'file', name: 'file', multiple: multiple, style: { display: 'none' } })),
            "\u00A0",
            this.fileName);
    };
    __decorate([
        mobx_1.observable
    ], ResUploader.prototype, "fileName", void 0);
    ResUploader = __decorate([
        mobx_react_1.observer
    ], ResUploader);
    return ResUploader;
}(React.Component));
exports.ResUploader = ResUploader;
function formatSize(size, pointLength, units) {
    if (pointLength === void 0) { pointLength = 2; }
    var unit;
    units = units || ['B', 'K', 'M', 'G', 'TB'];
    while ((unit = units.shift()) && size > 1024) {
        size = size / 1024;
    }
    return (unit === 'B' ? size : size.toFixed(pointLength === undefined ? 2 : pointLength)) + unit;
}
var xlargeSize = 1600;
var largeSize = 800;
var mediumSize = 400;
var smallSize = 180;
var ImageUploader = /** @class */ (function (_super) {
    __extends(ImageUploader, _super);
    function ImageUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.isChanged = false;
        _this.enableUploadButton = false;
        _this.uploaded = false;
        _this.onFileChange = function (evt) {
            _this.fileError = undefined;
            _this.uploaded = false;
            _this.enableUploadButton = evt.target.files.length > 0;
            if (_this.enableUploadButton) {
                _this.file = evt.target.files[0];
                var pos = _this.file.name.lastIndexOf('.');
                if (pos >= 0)
                    _this.suffix = _this.file.name.substr(pos + 1).toLowerCase();
                if (_this.imageTypes.indexOf(_this.suffix) < 0) {
                    _this.fileError = "\u56FE\u7247\u7C7B\u578B\u5FC5\u987B\u662F " + _this.imageTypes.join(', ') + " \u4E2D\u7684\u4E00\u79CD";
                    return;
                }
                var reader_1 = new FileReader();
                reader_1.readAsDataURL(_this.file);
                reader_1.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                this.srcImage = reader_1.result;
                                _a = this.suffix;
                                switch (_a) {
                                    case 'svg': return [3 /*break*/, 3];
                                }
                                return [3 /*break*/, 1];
                            case 1: return [4 /*yield*/, this.setSize(this.props.size)];
                            case 2:
                                _b.sent();
                                return [3 /*break*/, 4];
                            case 3:
                                this.imgBaseSize = mediumSize;
                                this.desImgSize = this.srcImage.length;
                                this.desImage = this.srcImage;
                                return [3 /*break*/, 4];
                            case 4: return [2 /*return*/];
                        }
                    });
                }); };
            }
        };
        _this.compress = function () {
            return new Promise(function (resolve, reject) {
                var img = new Image();
                img.src = _this.srcImage;
                img.onload = function () {
                    //var that = this;
                    // 默认按比例压缩
                    var width = img.width, height = img.height;
                    _this.srcImgWidth = width;
                    _this.srcImgHeight = height;
                    var scale = width / height;
                    var w, h;
                    if (_this.imgBaseSize < 0) {
                        w = width;
                        h = height;
                    }
                    else if (width <= _this.imgBaseSize && height <= _this.imgBaseSize) {
                        w = width;
                        h = height;
                    }
                    else if (scale < 0) {
                        w = _this.imgBaseSize;
                        h = w / scale;
                    }
                    else {
                        h = _this.imgBaseSize;
                        w = h * scale;
                    }
                    _this.desImgWidth = Math.round(w);
                    _this.desImgHeight = Math.round(h);
                    var quality = 0.7; // 默认图片质量为0.7
                    //生成canvas
                    var canvas = document.createElement('canvas');
                    var ctx = canvas.getContext('2d');
                    // 创建属性节点
                    var anw = document.createAttribute("width");
                    anw.nodeValue = String(w);
                    var anh = document.createAttribute("height");
                    anh.nodeValue = String(h);
                    canvas.setAttributeNode(anw);
                    canvas.setAttributeNode(anh);
                    ctx.drawImage(img, 0, 0, w, h);
                    var base64 = canvas.toDataURL('image/' + _this.suffix, quality);
                    var blob = _this.convertBase64UrlToBlob(base64);
                    _this.desImgSize = blob.size;
                    if (_this.desImgSize > 3 * 1024 * 1024) {
                        _this.fileError = "图片大于3M，无法上传";
                        _this.enableUploadButton = false;
                    }
                    resolve(base64);
                };
            });
        };
        _this.upload = function () { return __awaiter(_this, void 0, void 0, function () {
            var formData, blob, ret, error, type, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resUploader)
                            return [2 /*return*/];
                        formData = new FormData();
                        blob = this.convertBase64UrlToBlob(this.desImage);
                        formData.append('image', blob, this.file.name);
                        return [4 /*yield*/, this.resUploader.upload(formData)];
                    case 1:
                        ret = _a.sent();
                        if (typeof ret === 'object') {
                            error = ret.error;
                            type = typeof error;
                            err = void 0;
                            switch (type) {
                                case 'undefined':
                                    err = 'error: undefined';
                                    break;
                                case 'string':
                                    err = error;
                                    break;
                                case 'object':
                                    err = error.message;
                                    break;
                                default:
                                    err = String(err);
                                    break;
                            }
                            this.fileError = 'error: ' + type + ' - ' + err;
                            return [2 /*return*/];
                        }
                        this.resId = ret;
                        this.isChanged = (this.resId !== this.props.id);
                        this.uploaded = true;
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onSaved = function () {
            var onSaved = _this.props.onSaved;
            onSaved && onSaved(_this.resId);
            return;
        };
        _this.showOrgImage = function () {
            nav_1.nav.push(React.createElement(page_1.Page, { header: "\u539F\u56FE" },
                React.createElement("div", { className: "p-3 text-center" },
                    React.createElement(image_1.Image, { className: "h-min-4c", style: { maxWidth: '100%' }, src: _this.srcImage }))));
        };
        _this.resId = props.id;
        _this.imageTypes = props.imageTypes || ImageUploader_1.imageTypes;
        return _this;
    }
    ImageUploader_1 = ImageUploader;
    ImageUploader.prototype.setSize = function (size) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        switch (size) {
                            default:
                            case 'sm':
                                this.imgBaseSize = smallSize;
                                break;
                            case 'md':
                                this.imgBaseSize = mediumSize;
                                break;
                            case 'lg':
                                this.imgBaseSize = largeSize;
                                break;
                            case 'xl':
                                this.imgBaseSize = xlargeSize;
                                break;
                            case 'raw':
                                this.imgBaseSize = -1;
                                break;
                        }
                        _a = this;
                        return [4 /*yield*/, this.compress()];
                    case 1:
                        _a.desImage = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ImageUploader.prototype.convertBase64UrlToBlob = function (urlData) {
        var arr = urlData.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };
    ImageUploader.prototype.levelDiv = function () {
        var _this = this;
        if (this.props.size)
            return;
        var arr = [{ caption: '小图', size: 'sm' }];
        if (this.srcImgHeight > mediumSize || this.srcImgWidth > mediumSize) {
            arr.push({ caption: '中图', size: 'md' });
        }
        if (this.srcImgHeight > largeSize || this.srcImgWidth > largeSize) {
            arr.push({ caption: '大图', size: 'lg' });
        }
        if (this.srcImgHeight > xlargeSize || this.srcImgWidth > xlargeSize) {
            arr.push({ caption: '超大图', size: 'xl' });
            arr.push({ caption: '原图', size: 'raw' });
        }
        if (arr.length < 2)
            return;
        return React.createElement("div", null, arr.map(function (v, index) {
            var caption = v.caption, size = v.size;
            return React.createElement("label", { key: index, className: "mr-3" },
                React.createElement("input", { type: "radio", name: "size", onChange: function () { return _this.setSize(size); }, defaultChecked: index === 0 }),
                " ",
                caption);
        }));
    };
    ImageUploader.prototype.render = function () {
        var _this = this;
        var label = this.props.label;
        var right = React.createElement("button", { className: "btn btn-sm btn-success align-self-center mr-2", disabled: !this.isChanged, onClick: this.onSaved }, "\u4FDD\u5B58");
        return React.createElement(page_1.Page, { header: label || '更改图片', right: right },
            React.createElement("div", { className: "my-3 px-3 py-3 bg-white" },
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement(ResUploader, { ref: function (v) { return _this.resUploader = v; }, multiple: false, maxSize: 2048, label: "\u9009\u62E9\u56FE\u7247\u6587\u4EF6", onFilesChange: this.onFileChange }),
                        React.createElement("div", { className: "small text-muted" },
                            "\u652F\u6301 ",
                            this.imageTypes.join(', '),
                            " \u683C\u5F0F\u56FE\u7247\u3002"),
                        this.fileError && React.createElement("div", { className: "text-danger" }, this.fileError)),
                    React.createElement(simple_1.LMR, { left: this.uploaded === true ?
                            React.createElement("div", { className: "text-success p-2" }, "\u4E0A\u4F20\u6210\u529F\uFF01")
                            :
                                this.file && this.desImgSize > 0 && React.createElement("div", { className: "mb-3 d-flex align-items-end" },
                                    React.createElement("div", { className: "mr-5" },
                                        this.levelDiv(),
                                        React.createElement("div", null,
                                            "\u5206\u8FA8\u7387\uFF1A",
                                            this.desImgWidth,
                                            " x ",
                                            this.desImgHeight,
                                            "\u00A0 \u00A0 \u6587\u4EF6\u5927\u5C0F\uFF1A",
                                            formatSize(this.desImgSize))),
                                    React.createElement("button", { className: "btn btn-primary", disabled: !this.enableUploadButton, onClick: this.upload }, "\u4E0A\u4F20")), right: this.desImage &&
                            React.createElement("button", { className: "btn btn-link btn-sm text-right mb-3", onClick: this.showOrgImage },
                                "\u539F\u56FE\u5927\u5C0F: ",
                                formatSize(this.file.size),
                                React.createElement("br", null),
                                "\u5206\u8FA8\u7387\uFF1A",
                                this.srcImgWidth,
                                " x ",
                                this.srcImgHeight) })),
                React.createElement("div", { className: "text-center", style: {
                        border: (this.uploaded === true ? '2px solid green' : '1px dotted gray'),
                        padding: '8px'
                    } },
                    React.createElement(image_1.Image, { className: "h-min-4c", style: { maxWidth: '100%' }, src: this.desImage }))));
    };
    var ImageUploader_1;
    ImageUploader.imageTypes = ['gif', 'jpg', 'jpeg', 'png', 'svg', 'apng', 'bmp', 'ico', 'cur', 'tiff', 'tif', 'webp'];
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "file", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "desImgWidth", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "desImgHeight", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "desImgSize", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "srcImgWidth", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "srcImgHeight", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "isChanged", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "resId", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "enableUploadButton", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "srcImage", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "desImage", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "fileError", void 0);
    __decorate([
        mobx_1.observable
    ], ImageUploader.prototype, "uploaded", void 0);
    ImageUploader = ImageUploader_1 = __decorate([
        mobx_react_1.observer
    ], ImageUploader);
    return ImageUploader;
}(React.Component));
exports.ImageUploader = ImageUploader;
var AudioUploader = /** @class */ (function (_super) {
    __extends(AudioUploader, _super);
    function AudioUploader(props) {
        var _this = _super.call(this, props) || this;
        _this.isChanged = false;
        _this.enableUploadButton = false;
        _this.uploaded = false;
        _this.uploading = false;
        _this.onFileChange = function (evt) {
            _this.fileError = undefined;
            _this.uploaded = false;
            _this.enableUploadButton = evt.target.files.length > 0;
            if (_this.enableUploadButton) {
                _this.file = evt.target.files[0];
                var pos = _this.file.name.lastIndexOf('.');
                if (pos >= 0)
                    _this.suffix = _this.file.name.substr(pos + 1).toLowerCase();
                if (AudioUploader_1.audioTypes.indexOf(_this.suffix) < 0) {
                    _this.fileError = "\u97F3\u9891\u7C7B\u578B\u5FC5\u987B\u662F " + AudioUploader_1.audioTypes.join(', ') + " \u4E2D\u7684\u4E00\u79CD";
                    return;
                }
                var reader_2 = new FileReader();
                reader_2.readAsDataURL(_this.file);
                reader_2.onload = function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.content = reader_2.result;
                        this.fileSize = this.content.length;
                        return [2 /*return*/];
                    });
                }); };
            }
        };
        _this.upload = function () { return __awaiter(_this, void 0, void 0, function () {
            var formData, blob, ret, error, type, err;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.resUploader)
                            return [2 /*return*/];
                        this.uploading = true;
                        formData = new FormData();
                        blob = this.convertBase64UrlToBlob(this.content);
                        formData.append('image', blob, this.file.name);
                        return [4 /*yield*/, this.resUploader.upload(formData)];
                    case 1:
                        ret = _a.sent();
                        if (typeof ret === 'object') {
                            error = ret.error;
                            type = typeof error;
                            err = void 0;
                            switch (type) {
                                case 'undefined':
                                    err = 'error: undefined';
                                    break;
                                case 'string':
                                    err = error;
                                    break;
                                case 'object':
                                    err = error.message;
                                    break;
                                default:
                                    err = String(err);
                                    break;
                            }
                            this.fileError = 'error: ' + type + ' - ' + err;
                            return [2 /*return*/];
                        }
                        this.resId = ret;
                        this.isChanged = (this.resId !== this.props.id);
                        this.uploaded = true;
                        return [2 /*return*/];
                }
            });
        }); };
        _this.onSaved = function () {
            var onSaved = _this.props.onSaved;
            onSaved && onSaved(_this.resId);
            return;
        };
        _this.resId = props.id;
        return _this;
    }
    AudioUploader_1 = AudioUploader;
    AudioUploader.prototype.convertBase64UrlToBlob = function (urlData) {
        var arr = urlData.split(',');
        var mime = arr[0].match(/:(.*?);/)[1];
        var bstr = atob(arr[1]);
        var n = bstr.length;
        var u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    };
    AudioUploader.prototype.render = function () {
        var _this = this;
        var label = this.props.label;
        var right = React.createElement("button", { className: "btn btn-sm btn-success align-self-center mr-2", disabled: !this.isChanged, onClick: this.onSaved }, "\u4FDD\u5B58");
        return React.createElement(page_1.Page, { header: label || '更改文件', right: right },
            React.createElement("div", { className: "my-3 px-3 py-3 bg-white" },
                React.createElement("div", null,
                    React.createElement("div", { className: "mb-3" },
                        React.createElement(ResUploader, { ref: function (v) { return _this.resUploader = v; }, multiple: false, maxSize: 2048, label: "\u9009\u62E9\u97F3\u9891\u6587\u4EF6", onFilesChange: this.onFileChange }),
                        React.createElement("div", { className: "small text-muted" },
                            "\u652F\u6301 ",
                            AudioUploader_1.audioTypes.join(', '),
                            " \u683C\u5F0F\u3002"),
                        this.fileError && React.createElement("div", { className: "text-danger" }, this.fileError)))),
            React.createElement(simple_1.LMR, { left: this.uploaded === true ?
                    React.createElement("div", { className: "text-success p-2" }, "\u4E0A\u4F20\u6210\u529F\uFF01")
                    :
                        this.uploading === true ?
                            React.createElement("div", { className: "m-3" },
                                React.createElement(loading_1.Loading, null))
                            :
                                this.file && this.content && React.createElement("div", { className: "m-3" },
                                    React.createElement("div", { className: "mb-3" },
                                        "\u6587\u4EF6\u5927\u5C0F\uFF1A",
                                        formatSize(this.fileSize)),
                                    React.createElement("button", { className: "btn btn-primary", disabled: !this.enableUploadButton, onClick: this.upload }, "\u4E0A\u4F20")) }));
    };
    var AudioUploader_1;
    AudioUploader.audioTypes = ['mp3', 'wav'];
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "content", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "file", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "fileSize", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "isChanged", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "resId", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "enableUploadButton", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "fileError", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "uploaded", void 0);
    __decorate([
        mobx_1.observable
    ], AudioUploader.prototype, "uploading", void 0);
    AudioUploader = AudioUploader_1 = __decorate([
        mobx_react_1.observer
    ], AudioUploader);
    return AudioUploader;
}(React.Component));
exports.AudioUploader = AudioUploader;
//# sourceMappingURL=resUploader.js.map