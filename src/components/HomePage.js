const template = document.createElement("template");

template.innerHTML = `
    <div class="home"></div>
`;

export default class HomePage extends HTMLElement {
  constructor() {
    super();
    const { head } = new DOMParser().parseFromString(
      '<link rel="stylesheet" href="components/styles/HomePage.css">',
      "text/html",
    );
    this.root = this.attachShadow({ mode: "open" });
    const content = template.content.cloneNode(true);
    this.root.appendChild(head);
    this.root.appendChild(content);
  }

  connectedCallback() {
    this.render();
    window.addEventListener("productschanged", () => {
      this.render();
    });
  }

  render() {
    if (window.app.store.products.length) {
      this.root.querySelector("div").innerHTML = "";
      for (const product of window.app.store.products) {
        const item = document.createElement("product-card");
        item.dataset.product = JSON.stringify(product);
        this.root.querySelector("div").appendChild(item);
      }
    } else {
      this.root.querySelector("div").innerHTML = "Loading...";
    }
  }
}

customElements.define("home-page", HomePage);
