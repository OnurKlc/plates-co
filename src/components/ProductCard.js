const template = `
    <article>
        <a href="#">
            <img>
            <section>
                <div>
                    <h4></h4>
                    <p class="price"><p>
                </div>
                <button>Add</button>
            </section>
        </a>
    </article>
`;

export default class ProductCard extends HTMLElement {
  constructor() {
    super();
  }
}

customElements.define("product-card", ProductCard);
