import Image from "next/image.js";
import css from "./page.module.css";

async function getDataById(id) {
  const res = await fetch(`http://localhost:3000/api/post/${id}`, { cache: 'no-store' } );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}


const BlogId = async ({params}) => {
  const data = await getDataById(params.id);

  return (
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.info}>
          <h1 className={css.title}>{data.title}</h1>
          <p className={css.desc}>{data.body}</p>
          <p className={css.desc}>Avtor: {data._id}</p>
          <p className={css.desc}> {data.username}</p>
          <p className={css.desc}> {data.content}</p>
          <div className={css.author}>
        <Image src='/romantic.jpg' alt="foto" width={570} height={250} className={css.image}/>
            <span className={css.username}></span>
          </div>
        </div>
        <div className={css.imageContainer}>
        <Image src='/airobot.jpg' alt="foto" width={550} height={250} className={css.image1}/>
        </div>
      </div>
      <div className={css.content}>
        <p className={css.text}></p>
      </div>
    </div>
  );
};

export default BlogId;
