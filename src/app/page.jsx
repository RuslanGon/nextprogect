import Button from "@/components/Button/Button.jsx";
import css from "./page.module.css";

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
      
    </main>
  );
}
