import Post from "@/models/Post.js";
import connect from "@/utils/db.js";
import { NextResponse } from "next/server";

export const GET = async (req, {params}) => {
    const id = params.id
  try {
    await connect();
    const posts = await Post.findById(id);
    return NextResponse.json(posts, { status: 200 }); 
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Error in response of DB",});
  }
};
