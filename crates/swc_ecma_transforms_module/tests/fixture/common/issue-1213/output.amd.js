define([
    "require",
    "exports",
    "foo"
], function(require, exports, _foo) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: ()=>NotOK
    });
    _foo = _interopRequireDefault(_foo);
    class OK {
        constructor(){
            console.log(_foo.default);
        }
    }
    class NotOK {
        constructor(){
            console.log(_foo.default);
        }
    }
});
