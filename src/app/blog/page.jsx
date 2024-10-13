import Link from "next/link";
import css from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/post", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  return data; 
}

const Blog = async () => {
  const posts = await getData();

  if (!Array.isArray(posts)) {
    throw new Error("Expected an array of posts");
  }

  return (
    <div className={css.mainContainer}>
      {posts.map((item) => (
        <Link
          href={`blog/${item._id}`}
          className={css.container}
          key={item._id}
        >
          <div className={css.imageContainer}>
            <Image
              src="/airobot.jpg" 
              alt={item.title}
              width={400}
              height={250}
              className={css.image}
            />
          </div>
          <div className={css.content}>
            <h1 className={css.title}>{item.title}</h1>
            <p className={css.desc}>{item.body}</p>
            <p className={css.desc}>Автор: {item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
