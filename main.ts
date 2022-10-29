import * as DomApi from "./DomApi/domApi";
class MainModule {
  public static entryPoint() {
    console.log(DomApi.Name);
    DomApi.func();
  }
}
MainModule.entryPoint();
