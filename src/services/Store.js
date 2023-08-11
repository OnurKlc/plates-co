const Store = {
  products: [],
  basket: [],
};

const proxyStore = new Proxy(Store, {
  set(target, property, value) {
    target[property] = value;
    if (property === "products") {
      window.dispatchEvent(new Event("productschanged"));
    }
    if (property === "basket") {
      window.dispatchEvent(new Event("basketchanged"));
    }
    return true;
  },
  get(target, property) {
    return target[property];
  },
});

export default proxyStore;
