#![cfg_attr(docsrs, feature(doc_cfg))]

// Quote
#[cfg(any(docsrs, feature = "quote"))]
#[cfg_attr(docsrs, doc(cfg(feature = "quote")))]
pub mod quote {
    pub use swc_ecma_quote::*;
}

// Plugins
#[cfg(any(docsrs, feature = "__plugin_transform"))]
#[cfg_attr(docsrs, doc(cfg(feature = "__plugin_transform")))]
pub mod plugin;

// ast exposed via swc_ecma_ast
#[cfg(any(docsrs, feature = "ast"))]
#[cfg_attr(docsrs, doc(cfg(feature = "ast")))]
pub mod ast {
    pub use swc_ecma_ast::*;
}

// TODO: Can dependency tree simplified
// by swc_ecma_ast reexports swc_atoms?
#[cfg(any(docsrs, feature = "ast"))]
#[cfg_attr(docsrs, doc(cfg(feature = "ast")))]
pub mod atoms {
    pub use swc_atoms::*;
}

// visit* interfaces
#[cfg(any(docsrs, feature = "__visit"))]
#[cfg_attr(docsrs, doc(cfg(feature = "__visit")))]
pub mod visit {
    pub use swc_ecma_visit::*;
}

// swc_common features
#[cfg(any(docsrs, feature = "common"))]
#[cfg_attr(docsrs, doc(cfg(feature = "common")))]
pub mod common {
    pub use swc_common::*;
}

// swc_plugin_runner
#[cfg(any(docsrs, feature = "__plugin_transform_host"))]
#[cfg_attr(docsrs, doc(cfg(feature = "__plugin_transform_host")))]
pub mod plugin_runner {
    pub use swc_plugin_runner::*;
}

// swc_trace_macro
#[cfg(any(docsrs, feature = "trace_macro"))]
#[cfg_attr(docsrs, doc(cfg(feature = "trace_macro")))]
pub mod trace_macro {
    pub use swc_trace_macro::*;
}
