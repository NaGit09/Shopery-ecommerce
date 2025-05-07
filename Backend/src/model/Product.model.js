import mongoose from "mongoose";
import { Schema } from "mongoose";
const ProductSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  sale: {
    type: Number,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
  tag : {
    type: String,
    required: true,
  },
  createdAt: {type: Date,default: Date.now,},
  updatedAt: { type: Date, default: Date.now },
  isDeleted: { type: Boolean, default: false },
  images: [{ type: mongoose.Schema.Types.ObjectId, ref: "Image" }],
  reviewId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Review",
    required: true,
  },
});
const Product = mongoose.model("Product", ProductSchema);
export default Product;
