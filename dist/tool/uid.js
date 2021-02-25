"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uid = void 0;
var ALPHABET = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
var ID_LENGTH = 8;
function uid() {
    var len = ALPHABET.length;
    var rtn = '';
    for (var i = 0; i < ID_LENGTH; i++) {
        rtn += ALPHABET.charAt(Math.floor(Math.random() * len));
    }
    return rtn;
}
exports.uid = uid;
//# sourceMappingURL=uid.js.map