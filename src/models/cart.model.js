import { Schema, model } from 'mongoose';

const cart = new Schema(
  {
    product: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    quantity: { type: Number, required: true },
    userId: { type: String, required: true }
  },
  {
    timestamps: true
  }
);
export default model('Cart', cart);
