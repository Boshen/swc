//// [staticIndexSignature2.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var C = function C() {
    "use strict";
    _class_call_check(this, C);
};
C.foo = 1, C.bar = 2, C.foo, C[42] = 42, C[2] = 2, C[42];
