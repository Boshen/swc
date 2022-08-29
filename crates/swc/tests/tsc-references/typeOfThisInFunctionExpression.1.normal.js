//// [typeOfThisInFunctionExpression.ts]
// type of 'this' in FunctionExpression is Any
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
function fn() {
    var p = this;
    var p;
}
var t = function t() {
    var p = this;
    var p;
};
var t2 = function f() {
    var x = this;
    var x;
};
var C = function C() {
    "use strict";
    _class_call_check(this, C);
    this.x = function() {
        var q;
        var q = this;
    };
    this.y = function ff() {
        var q;
        var q = this;
    };
};
var M;
(function(M) {
    var fn = function fn() {
        var p = this;
        var p;
    };
    var t = function t() {
        var p = this;
        var p;
    };
    var t2 = function f() {
        var x = this;
        var x;
    };
})(M || (M = {}));
