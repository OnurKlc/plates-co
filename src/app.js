import API from "./services/API.js";
import Store from "./services/Store.js";

// Import web components
import ProductCard from "./components/ProductCard.js";

window.addEventListener("DOMContentLoaded", async () => {
  API.fetchCatalogue().then((res) => {
    app.store.products = [...res];
  });
});

window.app = {};
app.store = Store;
