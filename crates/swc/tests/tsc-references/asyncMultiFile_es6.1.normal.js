//// [a.ts]
import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
function f() {
    return _f.apply(this, arguments);
}
function _f() {
    _f = _async_to_generator(function*() {});
    return _f.apply(this, arguments);
}
//// [b.ts]
function g() {}
