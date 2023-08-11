export function addToBasket(code) {
  const item = app.store.products.find((el) => el.code === code);
  const index = app.store.basket.findIndex((el) => el.code === item.code);
  if (index === -1) {
    app.store.basket.push({
      code,
      amount: 1,
      price: item.price,
      title: item.title,
    });
  } else {
    app.store.basket[index].amount++;
  }
  window.dispatchEvent(new Event("basketchanged"));
}

export function removeFromBasket(code) {
  const index = app.store.basket.findIndex((el) => el.code === code);
  app.store.basket.splice(index, 1);
  window.dispatchEvent(new Event("basketchanged"));
  window.dispatchEvent(new Event("totalchanged"));
}
