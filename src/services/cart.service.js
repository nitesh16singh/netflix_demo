import Cart from '../models/cart.model';
import * as ProductService from './product.service';

//get all Carts
export const getAllCart = async () => {
  const data = await Cart.find().populate('product', 'name description');
  return data;
};

//create new Cart
export const newCart = async (body) => {
  const { product: id } = body;
  const ids = await ProductService.getProduct(id);
  const data = await Cart.create(body);
  return data;
};
// create bulk
export const newCartBulk = async (bodyArray) => {
  bodyArray = await Promise.all(
    bodyArray.map(async (body) => {
      const { product = [] } = body;
      const ids = await ProductService.getProductIds(product);
      body.product = ids;
      const data = await Cart.create(body);
      await ProductService.linkProductWithCart(ids, data._id);
      return data;
    })
  );
  return bodyArray;
};

//update single Cart
export const updateCart = async (_id, body) => {
  const data = await Cart.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

//delete single Cart
export const deleteCart = async (id) => {
  await Cart.findByIdAndDelete(id);
  return '';
};

//get single Cart
export const getCart = async (id) => {
  const data = await Cart.findById(id).populate('product', 'name description');
  return data;
};

export const totalPriceOfCart = async (userId) => {
  const totalCart = await Cart.find({ userId }).populate('product', [
    'name',
    'price'
  ]);
  let totalPrice = 0;
  const productObj = {};

  for (let i = 0; i < totalCart.length; i++) {
    const cart = totalCart[i];
    totalPrice += cart.quantity * cart.product.price;
    if (productObj[cart.product.name]) {
      productObj[cart.product.name] =
        productObj[cart.product.name] + cart.quantity;
    } else {
      productObj[cart.product.name] = cart.quantity;
    }
  }
  const keys = Object.keys(productObj);
  if (keys.indexOf('A') > -1 && productObj['A'] >= 3) {
    const multipleValue = parseInt(productObj['A'] / 3) * 15;
    totalPrice = totalPrice - multipleValue;
  }
  if (keys.indexOf('B') > -1 && productObj['B'] >= 2) {
    const multipleValue = parseInt(productObj['B'] / 2) * 5;
    totalPrice = totalPrice - multipleValue;
  }
  if (totalPrice > 150) {
    totalPrice -= 20;
  }
  return {
    cart: totalCart,
    totalPrice
  };
};
