const template = document.createElement("template");

template.innerHTML = `
    <div>
    </div>
`;

export default class BasketPage extends HTMLElement {
  constructor() {
    super();
    const { head } = new DOMParser().parseFromString(
      '<link rel="stylesheet" href="components/styles/BasketPage.css">',
      "text/html",
    );
    this.root = this.attachShadow({ mode: "open" });
    const content = template.content.cloneNode(true);
    this.root.appendChild(head);
    this.root.appendChild(content);
  }
}

customElements.define("basket-page", BasketPage);
