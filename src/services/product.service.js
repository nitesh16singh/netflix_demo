import Product from '../models/product.model';
console.log('>>>>>', Product);
//get all Products
export const getAllProduct = async () => {
  const data = await Product.find();
  return data;
};

//create new Product
export const newProduct = async (body) => {
  const data = await Product.create(body);
  return data;
};
// create bulk
export const newProductBulk = async (body) => {
  const data = await Product.insertMany(body);
  return data;
};

//update single Product
export const updateProduct = async (_id, body) => {
  const data = await Product.findByIdAndUpdate(
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

//delete single Product
export const deleteProduct = async (id) => {
  await Product.findByIdAndDelete(id);
  return '';
};

//get single Product
export const getProduct = async (id) => {
  const data = await Product.findById(id);
  return data;
};
// search Product

export const searchProduct = async (text) => {
  const query = {
    $or: [
      {
        name: new RegExp(text)
      },
      {
        description: new RegExp(text)
      }
    ]
  };
  const data = await Product.find(query);
  return data;
};

export const getProductIds = async (nameArray) => {
  const data = await Product.find({ name: { $in: nameArray } });
  const ids = data.map((data) => data._id);
  return ids;
};
export const linkProductWithCart = async (ids, cartIds) => {
  const data = await Product.updateMany(
    { _id: { $in: ids } },
    { $addToSet: { carts: cartIds } }
  );
  return data;
};
