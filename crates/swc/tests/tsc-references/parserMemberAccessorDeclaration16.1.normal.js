//// [parserMemberAccessorDeclaration16.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import _create_class from "@swc/helpers/src/_create_class.mjs";
var C = /*#__PURE__*/ function() {
    "use strict";
    function C() {
        _class_call_check(this, C);
    }
    _create_class(C, [
        {
            key: "Foo",
            set: function set() {
                var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
            }
        }
    ]);
    return C;
}();
