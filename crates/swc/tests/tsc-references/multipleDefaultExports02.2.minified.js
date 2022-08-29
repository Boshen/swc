//// [multipleDefaultExports02.ts]
"use strict";
//// [m1.ts]
//! 
//!   x the name `default` is exported multiple times
//!    ,-[1:1]
//!  1 | ,-> export default function foo() {
//!  2 | |   
//!  3 | |-> }
//!    : `---- previous exported here
//!  4 |     
//!  5 | ,-> export default function bar() {
//!  6 | |   
//!  7 | |-> }
//!    : `---- exported more than once
//!    `----
//! 
//! Error: 
//!   > Exported identifiers must be unique
//// [m2.ts]
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: !0
}), (0, (0, require("@swc/helpers/lib/_interop_require_default.js").default)(require("./m1")).default)();
