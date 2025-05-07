import mongoose from 'mongoose';
import { Schema } from 'mongoose';
const billingAddressSchema = new Schema({
    userId : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    company: {
        type: String,
        default: null
    },
    streetAddress: {
        type: String,
        required: true
    },
    province: {
        type: String,
        required: true
    },
    district: {
        type: String,
        required: true
    },
    commune: {
        type: String,
        required: true
    },
});
const BillingAddress = mongoose.model('BillingAddress', billingAddressSchema);
export default BillingAddress;