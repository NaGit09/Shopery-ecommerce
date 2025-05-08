import mongoose from "mongoose";
import { Schema } from "mongoose";
const SaleSchema = new Schema({
    id : { type: String, required: true },
    content : { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    banner : { type: String, required: true },
    category : { type: String, required: true },
    sale : { type: Number, required: true },
    coupon : { type: String, required: true },
    startDate : { type: Date, required: true },
    endDate : { type: Date, required: true },
});
const Sale = mongoose.model("Sale", SaleSchema);
export default Sale;
