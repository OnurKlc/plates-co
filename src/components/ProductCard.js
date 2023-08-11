const template = document.createElement("template");

template.innerHTML = `
    <div class="product-card">
      <img>
      <section>
          <div>
              <h4></h4>
              <p class="price"></p>
          </div>
          <button>Add</button>
      </section>
    </div>
`;

export default class ProductCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = template.content.cloneNode(true);
    this.appendChild(content);
    this.render();
  }

  render() {
    const { title, price, image } = JSON.parse(this.dataset.product);
    this.querySelector("img").src = `/images${image}`;
    this.querySelector("h4").textContent = title;
    this.querySelector("p").textContent = `$ ${price}`;
  }
}

customElements.define("product-card", ProductCard);
