//// [computedPropertyNamesWithStaticProperty.ts]
import _class_name_tdz_error from "@swc/helpers/src/_class_name_tdz_error.mjs";
let _staticProp = (_class_name_tdz_error("C"), C).staticProp, _staticProp1 = (_class_name_tdz_error("C"), C).staticProp, _staticProp2 = (_class_name_tdz_error("C"), C).staticProp;
class C {
    get [_staticProp]() {
        return "hello";
    }
    set [_staticProp1](x) {}
    [_staticProp2]() {}
}
C.staticProp = 10;
