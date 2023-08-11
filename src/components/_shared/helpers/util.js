export async function prepareForRender(
  scope,
  templatePath,
  stylePath = "",
  options = { createShadowDom: false },
) {
  const { createShadowDom } = options;
  const response = await fetch(templatePath);
  const templateString = await response.text();
  const { body } = new DOMParser().parseFromString(templateString, "text/html");
  if (createShadowDom) {
    const { head } = new DOMParser().parseFromString(
      `<link rel="stylesheet" href="${stylePath}">`,
      "text/html",
    );
    scope.root = scope.attachShadow({ mode: "open" });
    scope.root.appendChild(head);
    scope.root.appendChild(body.firstChild);
  } else {
    scope.appendChild(body.firstChild);
  }
}

export function renderBadge() {
  const totalItem = app.store.basket.reduce((acc, item) => item.amount + acc, 0);
  document.querySelector(".badge").innerHTML = totalItem;
}
