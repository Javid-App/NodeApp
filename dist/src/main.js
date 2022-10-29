import * as DomApi from "./DomApi/domApi.js";
class MainModule {
    static entryPoint() {
        console.log(DomApi.Name);
        DomApi.func();
    }
}
MainModule.entryPoint();
//# sourceMappingURL=main.js.map