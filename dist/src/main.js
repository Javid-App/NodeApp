import * as DomApi from "./DomApi/domApi.js";
class MainModule {
    static entryPoint() {
        console.log(DomApi.Name);
        DomApi.func();
        console.log(document.getElementsByTagName("h1")[0]);
    }
}
MainModule.entryPoint();
//# sourceMappingURL=main.js.map