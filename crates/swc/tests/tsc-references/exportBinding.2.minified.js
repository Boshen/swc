//// [exportConsts.ts]
import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export default x;
var x = "x";
var Y = function Y() {
    "use strict";
    _class_call_check(this, Y);
};
export { x, x as xx, Y as Z };
//// [exportVars.ts]
export default y;
var y = "y";
export { y, y as yy };