const products = [
  {
    id: "1",
    name: "Pyrexia bundle",
    price: 28500,
    category: "Bundle",
    img: "https://images.ctfassets.net/s5n2t79q9icq/2tIYeWkZzwUwaoNyORLTSb/e0811a971f5f7bc3dcbb93df36636fba/m33aaIJ03X_EN.png?fm=webp",
    stock: 5,
    description:
      "El kit definitivo para los fans. Planta cara a los mayores villanos de Magic con artículos exclusivos que incluyen una carta promocional foil y un contador de vidas Spindown sobredimensionado.",
  },

  {
    id: "2",
    name: "Mazos commander Pirexya",
    price: 14500,
    category: "Bundle",
    img: "https://images.ctfassets.net/s5n2t79q9icq/5nkwdGaPvD5eLtayayfgZN/c4cf87629d5f522ddb6361e350ac9e56/ugDmZ6O5Iw_SP.png?fm=webp",
    stock: 8,
    description:
      "Continúa la batalla por el Multiverso con uno de los formatos más populares de Magic. ¡Se pueden jugar tal cual o usarse para crear mazos! Ahora incluyen dos cartas de más como parte de un sobre de coleccionista con muestras especial.",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};

export const getProductById = (productId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productId));
    }, 500);
  });
};

export const getProductsByCategory = (productCategory) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredProducts = products.filter(
        (prod) => prod.category === productCategory
      );
      resolve(filteredProducts);
    }, 500);
  });
};
