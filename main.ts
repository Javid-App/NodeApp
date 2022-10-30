import * as DomApi from "./DomApi/domApi";
class MainModule {
  public static upgrade(event: any) {
    const db = event.target.result;
    const products = [
      { productId: "1", name: "My first product" },
      { productId: "2", name: "My second product" },
      { productId: "3", name: "My third product" },
      { productId: "4", name: "My fourth product" },
      { productId: "5", name: "My fifth product" },
    ];
    // The keyPath specifies the property that contains the id
    const objectStore = db.createObjectStore("ProductsTable", {
      keyPath: "productId",
    });
    // objectStore.createIndex("productId", "productId", { unique: true });

    objectStore.transaction.oncomplete = () => {
      // Add records
      const productStore = db
        .transaction("ProductsTable", "readwrite")
        .objectStore("ProductsTable");
      for (let product of products) {
        productStore.add(product);
      }
    };
  }
  public static initDatabase(version: number) {
    const openDatabaseRequest = indexedDB.open("SampleDB", version);
    //upgradeneeded event is invoked only when version change happens
    openDatabaseRequest.onupgradeneeded = this.upgrade;
  }
  public static entryPoint() {
    console.log(DomApi.Name);
    DomApi.func();
    console.log(document.getElementsByTagName("h1")[0]);
  }
}
MainModule.initDatabase(1.0);
MainModule.entryPoint();
