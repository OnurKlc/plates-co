import Store from "./services/Store.js";
import Router from "./services/Router.js";
import * as WebComponents from "./components/index.js";
import { loadProductData } from "./services/API.js";

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener("DOMContentLoaded", async () => {
  app.router.init();
  loadProductData();
});
