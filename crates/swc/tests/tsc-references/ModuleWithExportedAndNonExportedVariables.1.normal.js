//// [ModuleWithExportedAndNonExportedVariables.ts]
var A;
(function(A) {
    var x = A.x = "hello world";
    var y = 12;
})(A || (A = {}));
var x;
var x = A.x;
// Error, since y is not exported
var y = A.y;