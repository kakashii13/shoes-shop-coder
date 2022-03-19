const productos = [
  {
    id: 0,
    title: "Adidas Lite Racer Rebold",
    price: "$ 14.499",
    sizes: ["40", "42", "43"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-adidas-lite-racer-rebold-negra-100010gw2395001-1.jpg",
  },
  {
    id: 1,
    title: "Adidas Duramo SL",
    price: "$ 12.999",
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-running-adidas-duramo-sl-azul-52861723-100010h04626001-1.jpg",
  },
  {
    id: 2,
    title: "Nike Air Max Sc",
    price: "$ 17.499",
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/z/a/zapatillas-nike-air-max-sc-gris-510010cw4555007-1.jpg",
  },
  {
    id: 3,
    title: "Nike Air Pegasus 92 Lite",
    price: "$ 18.149",
    sizes: ["38", "40", "41"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/5/1/510010ci9138402-1.jpg",
  },
  {
    id: 4,
    title: "Adidas Grand Court",
    price: "$ 11.999",
    sizes: ["38", "39", "44"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatilla-adidas-grand-court-base-blanca-97487218-100010ee7904001-1.jpg",
  },
  {
    id: 5,
    title: "Nike Court Vision",
    price: "$ 14.499",
    sizes: ["38", "40", "41"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-nike-court-vision-low-crudo-510010dh2987102-1.jpg",
  },
  {
    id: 6,
    title: "Adidas Brom Negra",
    price: "$ 11.999",
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-adidas-broma-negra-100010eg3896001-1.jpg",
  },
  {
    id: 7,
    title: "Nike SB Delta Force",
    price: "$ 12.099",
    sizes: ["35", "39", "43"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/5/1/510010942237610-1.jpg",
  },
  {
    id: 8,
    title: "Adidas CourtMaster",
    price: "$ 15.999",
    sizes: ["35", "39", "42"],
    pictureUrl:
      "https://solodeportes-9bvc3m9qgmf6g9x.stackpathdns.com/media/catalog/product/cache/faae2c37ab1d315e4b697a7f62b421b7/z/a/zapatillas-adidas-courtmaster-blanca-100010fy8140001-1.jpg",
  },
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default getFetch;
