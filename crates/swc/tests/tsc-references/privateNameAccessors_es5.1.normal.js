function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    var descriptor = privateMap.get(receiver);
    if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
    }
    descriptor.value = value;
    return value;
}
function _classPrivateMethodGet(receiver, privateSet, fn) {
    if (!privateSet.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return fn;
}
function _classPrivateMethodInit(obj, privateSet) {
    _checkPrivateRedeclaration(obj, privateSet);
    privateSet.add(obj);
}
var _prop = new WeakSet(), _prop = new WeakSet(), _roProp = new WeakSet();
var A1 = function A1(name) {
    "use strict";
    _classCallCheck(this, A1);
    _classPrivateMethodInit(this, _prop);
    _classPrivateMethodInit(this, _prop);
    _classPrivateMethodInit(this, _roProp);
    _classPrivateFieldSet(this, _prop, "");
    _classPrivateFieldSet(this, _roProp, ""); // Error
    console.log(_classPrivateMethodGet(this, _prop, prop));
    console.log(_classPrivateMethodGet(this, _roProp, roProp));
};
function prop() {
    return "";
}
function prop(param) {}
function roProp() {
    return "";
}
