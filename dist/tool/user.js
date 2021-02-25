"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decodeGuestToken = exports.decodeUserToken = void 0;
var jwt_decode_1 = __importDefault(require("jwt-decode"));
function decodeUserToken(token) {
    var ret = jwt_decode_1.default(token);
    var user = {
        id: ret.id,
        name: ret.name,
        guest: ret.guest,
        token: token,
    };
    return user;
}
exports.decodeUserToken = decodeUserToken;
function decodeGuestToken(token) {
    var ret = jwt_decode_1.default(token);
    var guest = {
        id: 0,
        guest: ret.guest,
        token: token,
    };
    return guest;
}
exports.decodeGuestToken = decodeGuestToken;
//# sourceMappingURL=user.js.map