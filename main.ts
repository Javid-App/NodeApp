import * as DomApi from "./DomApi/domApi";
class MainModule {
  public static entryPoint() {
    console.log(DomApi.Name);
    DomApi.func();
    console.log(document.getElementsByTagName("h1")[0]);
  }
}
MainModule.entryPoint();
