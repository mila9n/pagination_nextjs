import { connectDb } from "@/utils/features";
import { Post } from "@/models/posts";
import { errorHandler } from "@/middlewares/error";

const handler = async (req, res) => {
  try {
    connectDb();
    let { page, size } = req.query;

    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 10;
    }

    const limit = parseInt(size);
    const skip = (page - 1) * size;

    const posts = await Post.find().sort({ id: 1 }).limit(limit).skip(skip);
    res.status(200).json({
      success: true,
      page,
      size,
      posts: posts,
    });
  } catch (error) {
    return errorHandler(res, 500, error.message);
  }
};

export default handler;
