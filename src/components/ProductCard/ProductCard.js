import { addToBasket } from "../../services/Actions.js";

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
    const templateString = await this.getTemplate();
    const { body } = new DOMParser().parseFromString(templateString, "text/html");
    this.appendChild(body.firstChild);
    this.render();
  }

  async getTemplate() {
    const response = await fetch("components/ProductCard/ProductCard.template.html");
    return await response.text();
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
