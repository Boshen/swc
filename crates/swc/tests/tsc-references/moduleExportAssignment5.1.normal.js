//// [axios.js]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var Axios = /*#__PURE__*/ function() {
    "use strict";
    function Axios() {
        _class_call_check(this, Axios);
    }
    var _proto = Axios.prototype;
    _proto.m = function m() {};
    return Axios;
}();
var axios = new Axios();
// none of the 3 references should have a use-before-def error
axios.m();
module.exports = axios;
module.exports.default = axios;
