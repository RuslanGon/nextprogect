import Image from "next/image.js";
import css from "./page.module.css";

const BlogId = () => {
  return (
    <div className={css.container}>
      <div className={css.top}>
        <div className={css.info}>
          <h1 className={css.title}>Title</h1>
          <p className={css.desc}></p>
          <div className={css.author}>
            <Image
              // src={data.img}
              alt=""
              width={40}
              height={40}
              className={css.avatar}
            />
            <span className={css.username}></span>
          </div>
        </div>
        <div className={css.imageContainer}>
        <Image src='/airobot.jpg' alt="foto" width={570} height={250} className={css.image}/>
        </div>
      </div>
      <div className={css.content}>
        <p className={css.text}></p>
      </div>
    </div>
  );
};

export default BlogId;
