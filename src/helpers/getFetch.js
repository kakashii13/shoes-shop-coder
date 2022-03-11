const productos = [
  {
    id: 1,
    title: "Adidas Ultraboost",
    price: "$35.000",
    pictureUrl:
      "https://assets.adidas.com/images/w_600,f_auto,q_auto/d8c2ebd39fea427785b3aaea00df8d69_9366/Zapatillas_para_correr_Ultraboost_20_Negro_EG1341_07_standard.jpg",
  },
  {
    id: 2,
    title: "Lite Racer 3.0",
    price: "11.999",
    pictureUrl:
      "https://thumbs.nosto.com/quick/rbxh5h46/8/443389_alt_2d88712a53e09194696827a22cc805ec5104bd1ebe91019fdeeaee58055cd1ec/fa38e8e53ca1efbf149fb26e4e995fee51b1ec1bffaa987f2be93bc29960befda/A",
  },
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default getFetch;
