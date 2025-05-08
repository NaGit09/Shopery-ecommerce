import mongoose from "mongoose";
const { Schema } = mongoose;
const BlogSchema = new Schema({
    id : { type: String, required: true },
    content : { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    image : { type: String, required: true },
    category : { type: String, required: true },
});
const Blog = mongoose.model("Blog", BlogSchema);
export default Blog;
