import { Iproduct } from "../interfaces/iproduct";

const srcRoot: string = '/assets/images/product';
const products: Iproduct[] = [
  {
    id: 'ewfhi', price: 63, qty: 2,
    img: srcRoot + '1.png', name: "Green jacket"
  },
  {
    id: 'ewkjf', price: 42, qty: 5,
    img: srcRoot + '2.png', name: "Jeans jacket"
  },
  {
    id: '412en', price: 25, qty: 1,
    img: srcRoot + '3.png', name: "Toddler t-shirt"
  },
  {
    id: '0932r', price: 29, qty: 0,
    img: srcRoot + '4.png', name: "Beautiful blouse"
  },
  {
    id: 'bviue', price: 23, qty: 4,
    img: srcRoot + '5.png', name: "Baby white shirt"
  },
  {
    id: 'xaeu6', price: 56, qty: 2,
    img: srcRoot + '6.png', name: "Pink dress"
  },
  {
    id: 'ngasj', price: 26, qty: 2,
    img: srcRoot + '7.png', name: "Baby pink shirt"
  },
  {
    id: 'jioed', price: 46, qty: 2,
    img: srcRoot + '9.png', name: "Wool shirt"
  },
];

export default products;