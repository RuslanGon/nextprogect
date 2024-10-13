import Post from "@/models/Post.js";
import connect from "@/utils/db.js";
import { NextResponse } from 'next/server';

export const GET = async (req) => {
  try {
    await connect();
    const posts = await Post.find();
    return NextResponse.json({ status: 200, message: "This is API", data: posts });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Error in response of DB" });
  }
};
