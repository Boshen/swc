define([
    "require",
    "exports",
    "foo"
], function(require, exports, _foo) {
    "use strict";
    Object.defineProperty(exports, "default", {
        enumerable: true,
        get: ()=>_foo.default
    });
});
