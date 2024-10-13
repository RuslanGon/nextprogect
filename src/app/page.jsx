import Button from "@/components/Button/Button.jsx";
import css from "./page.module.css";
import Image from "next/image.js";
import Hero from './../../public/man.jpg'

export default function Home() {
  return (
    <main className={css.container}>
      <div className={css.item}>
        <h1 className={css.title}> The Future of AI in the next few years</h1>
        <p className={css.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button url="/portfolio" text="See Our Works"  />
      </div>
      <div className={css.item}>
      <Image className={css.img} src={Hero}  alt="Hero image"/>
      </div>
    </main>
  );
}
