//// [commonJSImportClassTypeReference.ts]
//// [main.js]
var K = require("./mod1").K;
/** @param {K} k */ function f(k) {
    k.values();
}
//// [mod1.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var K = /*#__PURE__*/ function() {
    "use strict";
    function K() {
        _class_call_check(this, K);
    }
    var _proto = K.prototype;
    _proto.values = function values() {
        return new K();
    };
    return K;
}();
exports.K = K;
