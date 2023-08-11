import { prepareForRender } from "../helpers/util.js";

export default class BasketPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await prepareForRender(
      this,
      "components/BasketPage/Basket.template.html",
      "components/styles/BasketPage.css",
    );
    this.render();
  }

  render() {
    console.log("render");
  }
}

customElements.define("basket-page", BasketPage);
