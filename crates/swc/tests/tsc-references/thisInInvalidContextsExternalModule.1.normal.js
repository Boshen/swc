//// [thisInInvalidContextsExternalModule.ts]
//! 
//!   x Export assignment cannot be used when targeting ECMAScript modules. Consider using `export default` or another module format instead.
//!     ,----
//!  43 | export = this; // Should be an error
//!     : ^^^^^^^^^^^^^^
//!     `----
