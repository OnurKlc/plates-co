import API from "./services/API.js";
import Store from "./services/Store.js";
import Router from "./services/Router.js";
import * as WebComponents from "./components/index.js";

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
  API.fetchCatalogue().then((res) => {
    app.store.products = [...res];
  });
});

window.app = {};
app.store = Store;
app.router = Router;
