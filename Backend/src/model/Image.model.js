import mongoose from "mongoose";
const { Schema } = mongoose;
const imageSchema = new Schema(
  {
    id : { type: String, required: true, unique: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
  },
  { timestamps: true }
);
const Image = mongoose.model("Image", imageSchema);
export default Image;