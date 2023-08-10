const API = {
  url: "/data/catalogue.json",
  fetchCatalogue: async () => {
    const result = await fetch(API.url);
    return await result.json();
  },
};

export default API;
