import Link from "next/link.js";
import css from "./page.module.css";
import Image from "next/image.js";

async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

const Blog = async () => {
  const data = await getData();

  return (
    <div className={css.mainContainer}>
      {data.map((item) => (
        <Link href={`blog/${item.id}`} className={css.container} key={item.id}>
          <div className={css.imageContainer}>
            <Image src='/airobot.jpg' alt="foto" width={400} height={250} className={css.image}/>
          </div>
          <div className={css.content}>
            <h1 className={css.title}>{item.title}</h1>
            <p className={css.desc}>{item.body}</p>
            <p className={css.desc}> Avtor: {item.id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
