import Button from "@/components/Button/Button";
import css from "./page.module.css";
import Image from "next/image";

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
        <Image
          src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
          fill={true}
          alt="about us"
          className={css.img}
        />
        <div className={css.imgText}>
          <h1 className={css.imgTitle}>Lorem ipsum dolor sit</h1>
          <h2 className={css.imgDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </h2>
        </div>
      </div>

      <div className={css.textContainer}>
        <div className={css.item}>
          <h1 className={css.title}>Who Are We?</h1>
          <p className={css.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae. A
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Ducimus quae dolor, optio voluptatibus magnam iure esse tempora
            beatae, a suscipit eos. Animi quibusdam cum omnis officiis
            <br />
            <br />
            voluptatum quo ea eveniet? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Ducimus quae dolor, optio voluptatibus magnam iure
            esse tempora beatae, a suscipit eos. Animi quibusdam cum omnis
            officiis voluptatum quo ea eveniet?
          </p>
        </div>

        <div className={css.item}>
          <h1 className={css.title}>What We Do?</h1>
          <p className={css.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;