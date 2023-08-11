import { prepareForRender } from "../helpers/util.js";

export default class HomePage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await prepareForRender(
      this,
      "components/HomePage/Home.template.html",
      "components/styles/HomePage.css",
    );
    this.render();
    window.addEventListener("productschanged", () => {
      this.render();
    });
  }

  render() {
    if (window.app.store.products.length) {
      for (const product of window.app.store.products) {
        const item = document.createElement("product-card");
        item.dataset.product = JSON.stringify(product);
        this.root.querySelector(".products-container").appendChild(item);
      }
    }
  }
}

customElements.define("home-page", HomePage);
