//// [classExpressionLoop.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
for(var _loop = function(i) {
    arr.push(function C() {
        "use strict";
        _class_call_check(this, C), this.prop = i;
    });
}, arr = [], i = 0; i < 10; ++i)_loop(i);
