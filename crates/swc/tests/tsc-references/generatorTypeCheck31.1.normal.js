//// [generatorTypeCheck31.ts]
function* g2() {
    yield function*() {
        yield (x)=>x.length;
    }();
}
