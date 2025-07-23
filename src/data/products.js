import shirtImg from '../Assets/img-5.jpg';
import printedImg from '../Assets/img-6.jpg';
import plainImg from '../Assets/img-7.jpg';
import poloImg from '../Assets/img-8.jpg';
import hoodieImg from '../Assets/img-9.jpg';
import jeansImg from '../Assets/img-10.jpg';
import activewearImg from '../Assets/Rectangle 22 3.png';
import boxersImg from '../Assets/img-11.jpg';

import hoodiesimg from '../Assets/Rectangle 20 g.png';
import CoatsParkasimg from '../Assets/Rectangle 21 g.png';
import TeesTShirtimg from '../Assets/Rectangle 22 g.png';
import Boxers from '../Assets/Rectangle 22 g4.png';

import img1 from '../Assets/img-16 (1) 1.png';
import img2 from '../Assets/img-17 (1) 2.jpg';
import img3 from '../Assets/img-18.jpg';
import img4 from '../Assets/img-19 (1) 4.jpg';

export const menProducts = [
  { id: 1, name: 'Shirts', images: [shirtImg], catogery:'Men', price: '$12', brand: "Jhanvi's Brand", },
  { id: 2, name: 'Printed T-Shirts', images: [printedImg],catogery:'Men', price: '$130', brand: "2finger  Brand", },
  { id: 3, name: 'Plain T-Shirt', images: [plainImg],catogery:'Men', price: '$85', brand: "t-shirt Brand", },
  { id: 4, name: 'Polo T-Shirt', images: [poloImg],catogery:'Men', price: '$55', brand: "polo Brand", },
  { id: 5, name: 'Hoodies & Sweatshirt', images: [hoodieImg],catogery:'Men', price: '$89', brand: "h&m Brand", },
  { id: 6, name: 'Jeans', images: [jeansImg],catogery:'Men', price: '$110', brand: "lee Brand", },
  { id: 7, name: 'Activewear', images: [activewearImg],catogery:'Men', price: '$140', brand: "sport Brand", },
  { id: 8, name: 'Boxers', images: [boxersImg],catogery:'Men', price: '$79', brand: "Boxers Brand", },
];

export const womenProducts = [
  { id: 9, name: 'Hoodies', images: [hoodiesimg],catogery:'Women', price: '$99', brand: "h&m Brand", },
  { id: 10, name: 'Coats & Parkas', images: [CoatsParkasimg],catogery:'Women', price: '$66', brand: "Nike Brand", },
  { id: 11, name: 'Tees & T-Shirts', images: [TeesTShirtimg],catogery:'Women', price: '$123', brand: "Jhanvi's Brand", },
  { id: 12, name: 'Boxers', images: [Boxers],catogery:'Women', price: '$150', brand: "Boxers Brand", },
];

export const limeLightProducts = [
  {
    id: 13,
    name: 'Black Sweatshirt with Print',
    brand: "Jhanvi's Brand",
    price: '$123.00',
    images: [img1],
    catogery: 'limeLight',
  },
  {
    id: 14,
    name: 'Line Pattern Black Hoodie',
    brand: "AS's Brand",
    price: '$37.00',
    images: [img2],
    catogery: 'limeLight',
  },
  {
    id: 15,
    name: 'Black Shorts',
    brand: "MM's Brand",
    price: '$37.00',
    images: [img3],
    catogery: 'limeLight',
  },
  {
    id: 16,
    name: 'Lavender Hoodie with Zipper',
    brand: "Nike's Brand",
    price: '$119.00',
    images: [img4],
    catogery: 'limeLight',

  },
];

export const allProducts = [
  ...menProducts,
  ...womenProducts,
  ...limeLightProducts,
];
