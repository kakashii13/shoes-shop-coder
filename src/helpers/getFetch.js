const productos = [
  {
    id: 0,
    title: "Adidas Abaca",
    stock: 5,
    price: 11999,
    sizes: ["40", "42", "43"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd2b52f54/products/AD_H04976/AD_H04976-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd2b52f54/products/AD_H04976/AD_H04976-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa87ab713/products/AD_H04976/AD_H04976-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdf8265ed/products/AD_H04976/AD_H04976-3.JPG",
    ],
  },
  {
    id: 1,
    title: "Nike Air Max 90",
    stock: 5,
    price: 25999,
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd13e0551/products/NI_DB0625-001/NI_DB0625-001-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd13e0551/products/NI_DB0625-001/NI_DB0625-001-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwee37926b/products/NI_DB0625-001/NI_DB0625-001-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw25587ae6/products/NI_DB0625-001/NI_DB0625-001-3.JPG",
    ],
  },
  {
    id: 2,
    title: "Nike Air Max Pre-Day Nn",
    stock: 5,
    price: 28499,
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw653e902d/products/NI_DC9402-800/NI_DC9402-800-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw653e902d/products/NI_DC9402-800/NI_DC9402-800-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw50a315c5/products/NI_DC9402-800/NI_DC9402-800-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw53ee58d1/products/NI_DC9402-800/NI_DC9402-800-3.JPG",
    ],
  },
  {
    id: 3,
    title: "Vans Old Skool",
    stock: 5,
    price: 13300,
    sizes: ["38", "40", "41"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwadc49ec8/products/VA_VN000D3HBKA/VA_VN000D3HBKA-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwadc49ec8/products/VA_VN000D3HBKA/VA_VN000D3HBKA-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw98dec015/products/VA_VN000D3HBKA/VA_VN000D3HBKA-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0fee7db7/products/VA_VN000D3HBKA/VA_VN000D3HBKA-3.JPG",
    ],
  },
  {
    id: 4,
    title: "Adidas Zx 2K Boost Pure",
    stock: 5,
    price: 23999,
    sizes: ["38", "39", "44"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwd32ef8d3/products/AD_GZ7731/AD_GZ7731-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwd32ef8d3/products/AD_GZ7731/AD_GZ7731-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw7571c1e3/products/AD_GZ7731/AD_GZ7731-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw01cc8d34/products/AD_GZ7731/AD_GZ7731-3.JPG",
    ],
  },
  {
    id: 5,
    title: "Vans Old Skool",
    stock: 5,
    price: 13300,
    sizes: ["38", "40", "41"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw0f12f251/products/VA_VN000QER5U8/VA_VN000QER5U8-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0f12f251/products/VA_VN000QER5U8/VA_VN000QER5U8-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw5f023e12/products/VA_VN000QER5U8/VA_VN000QER5U8-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw544257a0/products/VA_VN000QER5U8/VA_VN000QER5U8-3.JPG",
    ],
  },
  {
    id: 6,
    title: "Nike Court Legacy S50",
    stock: 5,
    price: 14499,
    sizes: ["38", "39", "41"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwa2825908/products/NI_DJ1999-800/NI_DJ1999-800-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwa2825908/products/NI_DJ1999-800/NI_DJ1999-800-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw6dbf70df/products/NI_DJ1999-800/NI_DJ1999-800-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw75607ab9/products/NI_DJ1999-800/NI_DJ1999-800-3.JPG",
    ],
  },
  {
    id: 7,
    title: "Nike Air Max 2090",
    stock: 5,
    price: 21999,
    sizes: ["35", "39", "43"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwc34be940/products/NI_BV9977-101/NI_BV9977-101-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwc34be940/products/NI_BV9977-101/NI_BV9977-101-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwdd1dedc0/products/NI_BV9977-101/NI_BV9977-101-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw865b547f/products/NI_BV9977-101/NI_BV9977-101-3.JPG",
    ],
  },
  {
    id: 8,
    title: "Adidas Zx 2K Boost Pure",
    stock: 5,
    price: 23999,
    sizes: ["35", "39", "42"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw84cb7f70/products/AD_GZ7730/AD_GZ7730-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw84cb7f70/products/AD_GZ7730/AD_GZ7730-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw852b6bcc/products/AD_GZ7730/AD_GZ7730-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe39afb78/products/AD_GZ7730/AD_GZ7730-3.JPG",
    ],
  },
  {
    id: 9,
    title: "Nike Air Max Pre-Day Nn",
    stock: 5,
    price: 28499,
    sizes: ["35", "39", "42"],
    pictureUrl:
      "https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw4987970b/products/NI_DC9402-001/NI_DC9402-001-1.JPG?sw=400&sh=400",
    picturesDetail: [
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw4987970b/products/NI_DC9402-001/NI_DC9402-001-1.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw0e73c4e5/products/NI_DC9402-001/NI_DC9402-001-2.JPG",
      "https://www.moovbydexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dwe8cfa409/products/NI_DC9402-001/NI_DC9402-001-3.JPG",
    ],
  },
];

const getFetch = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productos);
  }, 2000);
});

export default getFetch;
