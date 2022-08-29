//// [recursiveTypeInGenericConstraint.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
var G = function G() {
    "use strict";
    _class_call_check(this, G);
};
var Foo = function Foo() {
    "use strict";
    _class_call_check(this, Foo);
};
var D = function D() {
    "use strict";
    _class_call_check(this, D);
};
var c1 = new Foo(); // ok, circularity in assignment compat check causes success
