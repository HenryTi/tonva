"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netToken = void 0;
var uqApi_1 = require("./uqApi");
var wsChannel_1 = require("./wsChannel");
exports.netToken = {
    set: function (userId, token) {
        uqApi_1.setCenterToken(userId, token);
        wsChannel_1.WSChannel.setCenterToken(token);
    },
    clear: function () {
        uqApi_1.setCenterToken(0, undefined);
        wsChannel_1.WSChannel.setCenterToken(undefined);
    }
};
//# sourceMappingURL=netToken.js.map