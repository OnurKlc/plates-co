import { addToBasket } from "../../services/Actions.js";
import { prepareForRender } from "../_shared/helpers/util.js";

export default class ProductCard extends HTMLElement {
  title;
  code;
  price;
  image;
  constructor() {
    super();
  }

  async connectedCallback() {
    Object.assign(this, JSON.parse(this.dataset.product));
    await prepareForRender(this, "components/ProductCard/ProductCard.template.html");
    this.render();
  }

  render() {
    this.querySelector("img").src = `/images${this.image}`;
    this.querySelector("h4").textContent = this.title;
    this.querySelector("p").textContent = `$ ${this.price}`;
    this.querySelector("button").onclick = () => this.onAddClick(this.code);
  }

  onAddClick(code) {
    addToBasket(code);
  }
}

customElements.define("product-card", ProductCard);
