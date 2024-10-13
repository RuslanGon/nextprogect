import Link from "next/link";
import css from "./page.module.css";
import Image from "next/image";

async function getData() {
  const res = await fetch("http://localhost:3000/api/post", { cache: 'no-store' });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  const data = await res.json();

  // Проверка, если данные - это строка, то парсим её
  return typeof data === "string" ? JSON.parse(data) : data;
}

const Blog = async () => {
  const data = await getData();
  console.log(data); // Логируем ответ API

  const posts = Array.isArray(data) ? data : []; // Измените на правильный ключ в зависимости от структуры данных
  
  if (!Array.isArray(posts)) {
    throw new Error("Expected an array of posts");
  }

  return (
    <div className={css.mainContainer}>
      {posts.map((item) => (
        <Link href={`blog/${item._id}`} className={css.container} key={item._id}>
          <div className={css.imageContainer}>
            <Image src={item.img} alt="foto" width={400} height={250} className={css.image} />
          </div>
          <div className={css.content}>
            <h1 className={css.title}>{item.title}</h1>
            <p className={css.desc}>{item.body}</p>
            <p className={css.desc}> Avtor: {item.username}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
