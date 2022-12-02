const db = require("../utils/database");
const initModels = require("../models/initModels");
const { forEach } = require("p-iteration");
const { User,Product,Order,ProductInCart,ProductInOrder,Cart  } = require("../models");

initModels();

const user = [
  {
    username: "Brillitt",
    email: "brillitt@gmail.com",
    password: "1234bri",
  },
  {
    username: "Jorge",
    email: "jorge@gmail.com",
    password: "1234jor",
  },
  {
    username: "Karla",
    email: "karla@gmail.com",
    password: "1234kar",
  },
  {
    username: "Andres",
    email: "andres@gmail.com",
    password: "1234and",
  },
  {
    username: "Dennis",
    email: "dennis@gmail.com",
    password: "1234den",
  }
];

const product = [
  {
    name: "CocaCola",
    price: 10,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40707464_33-jCaPWbBL-large.jpg',
    availableQty: 30,
    status: true,
    userId: 1
  },
  {
    name: "IncaKola",
    price: 10,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-yaS37Cs3.jpg',
    availableQty: 20,
    status: true,
    userId: 2
  },
  {
    name: "PesiCola",
    price: 9,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/41846255-07BDliwG.jpg',
    availableQty: 15,
    status: true,
    userId: 3
  },
  {
    name: "Sprite",
    price: 8,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40165682-UhjLdrmo-large.jpg',
    availableQty: 10,
    status: true,
    userId: 4
  },
  {
    name: "Fanta",
    price: 7,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/img-26SOUm31.jpg',
    availableQty: 25,
    status: true,
    userId: 1
  },
  ,
  {
    name: "7UP",
    price: 7,
    productImage: 'https://e39a9f00db6c5bc097f9-75bc5dce1d64f93372e7c97ed35869cb.ssl.cf1.rackcdn.com/40165715-oICagBLj.jpg',
    availableQty: 20,
    status: true,
    userId: 1
  },

];

const order = [
  {
    totalPrice: 0,
    userId:1,
    status: true,
  },
  {
    totalPrice: 0,
    userId:2,
    status: true,
  },
  {
    totalPrice: 0,
    userId:3,
    status: true,
  },
];

const cart =[
  {
    totalPrice: 0,
    userId: 1,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 2,
    status: true,
  }, {
    totalPrice: 0,
    userId: 3,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 4,
    status: true,
  },
  {
    totalPrice: 0,
    userId: 5,
    status: true,
  },
  
];

const productInCart = [
  {
    cartId: 1,
    productId: 6,
    quantity: 1,
    price: 0,
    status: true
  },
  {
    cartId: 2,
    productId: 2,
    quantity: 1,
    price: 0,
    status: true
  }
];

const productInOrder = [
  {
    orderId:1,  
    productId:1,
    quantity: 2,
    price: 0,
    status:false
  },
  {
    orderId:2,
    productId:4,
    quantity:3,
    price:0,
    status:false
  },
  {
    orderId:3,
    productId:6,
    quantity: 1,
    price: 0,
    status:false
  },
  
];

async function seeding(){
  await db.sync({force: true})

  await forEach(user, (user)=> User.create(user))
  await forEach(product, (product)=> Product.create(product))
  await forEach(cart, (cart)=> Cart.create(cart))
  await forEach(order, (order)=> Order.create(order))
  await forEach(productInCart, (pic) => ProductInCart.create(pic))
  await forEach(productInOrder, (pio)=> ProductInOrder.create(pio))
  
};
seeding();
