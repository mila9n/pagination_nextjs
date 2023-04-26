const { connectDb } = require("@/utils/features");
import { errorHandler } from "@/middlewares/error";
import { Post } from "@/models/posts";

const handler = async (req, res) => {
  try {
    connectDb();
    const posts = await Post.find();

    res.status(200).json({
      success: true,
      posts: posts,
    });
  } catch (error) {
    return errorHandler(res, 500, error.message);
  }
};

export default handler;
