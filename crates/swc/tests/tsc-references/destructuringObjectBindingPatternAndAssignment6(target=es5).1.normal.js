//// [destructuringObjectBindingPatternAndAssignment6.ts]
import _define_property from "@swc/helpers/src/_define_property.mjs";
var a = "a";
var b = "b";
var ref = function() {
    var _obj;
    return _obj = {}, _define_property(_obj, a, 1), _define_property(_obj, b, 1), _obj;
}(), aVal = ref[a], bVal = ref[b];
console.log(aVal, bVal);
