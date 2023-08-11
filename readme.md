# Plates Co - Case Study

This project is a case study for the imaginary company Plates Co. The application showcases a sales system for their products, including a special offer and a basket system.

## How the Application Works

The application is a single-page application (SPA) built without using any framework. Notably, the project utilizes only the "prettier" dependency, avoiding the use of any other external dependencies to keep the codebase lean and maintainable.

- The application relies on the `Store.js` file to manage the state of products and the basket.
- The `Actions.js` file contains functions to modify the state.
- To handle state changes and enable components to listen for these changes, the application uses custom event listeners. These event listeners allow different parts of the application to communicate and respond to changes in the data. For example, when the user adds or removes items from the basket, custom events are dispatched, and the relevant components listen for these events to update the UI accordingly.
- The application uses the `Router.js` file to handle navigation and page rendering.
- The application uses custom web components for different sections of the UI.

### Custom Web Components and Modular Structure

The application is structured around custom Web Components, utilizing Shadow DOM for certain components to encapsulate styles and prevent external CSS from affecting their appearance. The application includes the following key components:

- `HomePage` and `BasketPage`: These two pages are designed as custom Web Components utilizing Shadow DOM. This encapsulation ensures that their styles remain isolated and unaffected by external styles.
- `product-card` and `basket-item`: These are additional custom Web Components designed for rendering product details and basket items. Unlike the pages, these components are rendered without Shadow DOM and directly appended to the parent nodes.

### Adding New Components

For those interested in extending the application with new components, the process involves the following steps:

1. Create a folder for the new component under the `components` directory.
2. Within the component's folder, create both a `.js` file and a `template.html` file.
3. To establish the connection between the added files and the application, ensure that the `.js` file is imported in the `components/index.js` file.

### Connecting Components with Templates and Styles

To establish the connection between the template and style files with the JavaScript component file, use the `prepareForRender` function. This function assists in rendering custom Web Components by fetching templates and stylesheets as needed.

### Adding New Pages

To add new pages to the application, follow these steps:

1. Add a new path to the `Router.js` file by utilizing `switch` function under the `go` method of the `Router` object with the new route.
2. Inside the `go` method of `Router`, create the corresponding web component element for the new page.

## Getting Started

1. Clone the repository from [GitHub](https://github.com/OnurKlc/plates-co).
2. Install the dependencies using `npm install`.
3. Start the application using `npm start`.

## Contact

For inquiries, please contact the author: Onur Kilic.

- GitHub: [OnurKlc](https://github.com/OnurKlc)
- Email: onurkilic5@gmail.com
