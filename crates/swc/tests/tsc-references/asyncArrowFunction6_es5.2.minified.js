//// [asyncArrowFunction6_es5.ts]
//! 
//!   x `await` cannot be used as an identifier in an async context
//!    ,----
//!  2 | var foo = async (a = await): Promise<void> => {
//!    :                      ^^^^^
//!    `----