import { prepareForRender, renderBadge } from "../_shared/helpers/util.js";

export default class BasketPage extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    await prepareForRender(
      this,
      "components/BasketPage/Basket.template.html",
      "components/_shared/styles/BasketPage.css",
      { createShadowDom: true },
    );
    this.render();
    const scope = this;
    window.addEventListener("totalchanged", () => this.totalCalculator(scope));
    window.addEventListener("basketchanged", () => this.render());
  }

  render() {
    renderBadge();
    const node = this.root.querySelector("#basketItems");
    node.innerHTML = "";
    if (window.app.store.basket.length) {
      for (const item of window.app.store.basket) {
        const basketItem = document.createElement("basket-item");
        basketItem.dataset.basketItem = JSON.stringify(item);
        node.appendChild(basketItem);
      }
    } else {
      this.showEmptyBasket();
    }
  }

  totalCalculator(scope) {
    const parent = scope.root.querySelectorAll("basket-item");
    if (parent.length === 0) {
      this.showEmptyBasket();
      return;
    }

    let total = 0;
    let deliveryCost = 0;
    scope.root.querySelectorAll("basket-item").forEach((node) => {
      total += Number(node.dataset.totalPrice);
    });

    if (total < 50) deliveryCost = 4.95;
    else if (total >= 50 && total < 90) deliveryCost = 2.95;
    else deliveryCost = 0;

    total += deliveryCost;

    scope.root.querySelector("#deliveryCost").textContent = deliveryCost
      ? `$ ${deliveryCost.toFixed(2).toString()}`
      : "Free";
    console.log(total);
    scope.root.querySelector("#totalPrice").textContent = `$ ${(Math.trunc(total * 100) / 100)
      .toFixed(2)
      .toString()}`;
  }

  showEmptyBasket() {
    this.root.querySelector("#basketItems").textContent = "Your basket is empty";
    this.root.querySelector(".cost").style.display = "none";
    this.root.querySelector(".total").style.display = "none";
  }
}

customElements.define("basket-page", BasketPage);
