export async function prepareForRender(scope, templatePath, stylePath) {
  const response = await fetch(templatePath);
  const templateString = await response.text();
  const { head } = new DOMParser().parseFromString(
    `<link rel="stylesheet" href="${stylePath}">`,
    "text/html",
  );
  const { body } = new DOMParser().parseFromString(templateString, "text/html");
  scope.root = scope.attachShadow({ mode: "open" });
  scope.root.appendChild(head);
  scope.root.appendChild(body.firstChild);
}
