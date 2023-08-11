import { prepareForRender } from "../_shared/helpers/util.js";
import { removeFromBasket } from "../../services/Actions.js";

export default class BasketItem extends HTMLElement {
  code;
  amount;
  price;
  name;

  constructor() {
    super();
  }

  async connectedCallback() {
    Object.assign(this, JSON.parse(this.dataset.basketItem));
    await prepareForRender(this, "components/BasketItem/BasketItem.template.html");
    this.render();
  }

  render() {
    this.querySelector(".qty").textContent = this.amount;
    this.querySelector(".name").textContent = this.title;
    this.querySelector(".price").textContent = this.calculatePrice();
    this.querySelector("button").onclick = () => this.onRemoveClick(this.code);
  }

  calculatePrice() {
    let price = 0;
    if (this.code !== "R01") price = this.price * this.amount;
    else
      price =
        Math.floor(this.amount / 2) * (this.price / 2) + Math.ceil(this.amount / 2) * this.price;

    this.dataset.totalPrice = price.toString();
    window.dispatchEvent(new Event("totalchanged"));
    return `$ ${price.toFixed(2).toString()}`;
  }

  onRemoveClick(code) {
    removeFromBasket(code);
  }
}

customElements.define("basket-item", BasketItem);
