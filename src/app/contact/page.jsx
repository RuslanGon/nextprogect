import css from "./page.module.css";
import Image from "next/image.js";
import Button from "@/components/Button/Button.jsx";

const Contact = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Lets Keep in Touch</h1>
      <div className={css.content}>
        <div className={css.imgContainer}>
          <Image
            src="/contact.png"
            alt="contacts"
            fill={true}
            className={css.image}
          />
        </div>
        <form className={css.form}>
          <input type="text" placeholder="name" className={css.input} />
          <input type="text" placeholder="email" className={css.input} />
          <textarea
            className={css.textArea}
            placeholder="message"
            cols="30"
            rows="10"
          ></textarea>
          <Button url="#" text="Send" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
