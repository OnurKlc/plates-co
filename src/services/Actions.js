export function addToBasket(code) {
  const item = app.store.basket.find((el) => el.code === code);
  if (!item) {
    app.store.basket.push({
      code,
      amount: 1,
    });
  } else {
    item.amount++;
  }
  window.dispatchEvent(new Event("basketchanged"));
}
