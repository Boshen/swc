//// [0.ts]
export var a = 1;
export var b = 2;
//// [1.ts]
import * as _ns from "./0";
export { _ns as ns };
ns.a;
ns.b;
var ns = {
    a: 1,
    b: 2
};
ns.a;
ns.b;
//// [2.ts]
import * as foo from "./1";
foo.ns.a;
foo.ns.b;
