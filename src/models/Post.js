import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    tittle: { type: String, required: true },
    desc: { type: String, required: true },
    img: { type: String, required: true },
    content: { type: String, required: true },
    username: { type: String, required: true },
  },
  { timestamps: true }
);

// Проверяем, существует ли модель 'Post', перед её созданием
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

export default Post;