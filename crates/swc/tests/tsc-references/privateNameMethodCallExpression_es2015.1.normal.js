function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
        throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
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
var _method = new WeakSet(), _method2 = new WeakSet();
// @target: es2015
class AA {
    test() {
        var _ref, _ref1, _ref2, _ref3;
        _classPrivateMethodGet(this, _method, method).call(this);
        const func = _classPrivateMethodGet(this, _method, method);
        func();
        new (_classPrivateMethodGet(this, _method, method))();
        const arr = [
            1,
            2
        ];
        _classPrivateMethodGet(this, _method2, method2).call(this, 0, ...arr, 3);
        const b = new (_classPrivateMethodGet(this, _method2, method2))(0, ...arr, 3); //Error 
        const str = _classPrivateMethodGet(this, _method2, method2).bind(this)`head${1}middle${2}tail`;
        _classPrivateMethodGet(_ref = this.getInstance(), _method2, method2).bind(_ref)`test${1}and${2}`;
        _classPrivateMethodGet(_ref1 = this.getInstance(), _method2, method2).call(_ref1, 0, ...arr, 3);
        const b2 = new (_classPrivateMethodGet(_ref2 = this.getInstance(), _method2, method2))(0, ...arr, 3); //Error 
        const str2 = _classPrivateMethodGet(_ref3 = this.getInstance(), _method2, method2).bind(_ref3)`head${1}middle${2}tail`;
    }
    getInstance() {
        return new AA();
    }
    constructor(){
        _classPrivateMethodInit(this, _method);
        _classPrivateMethodInit(this, _method2);
        this.x = 1;
    }
}
function method() {
    this.x = 10;
}
function method2(a, ...b) {}
