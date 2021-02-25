import { Schema, model } from 'mongoose';

const product = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    discountedPrice: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);

export default model('Product', product);
