"use client"
import Link from 'next/link';
import css from './page.module.css'

const Registor = () => {
  return (
    <div className={css.container}>
    <h1 className={css.title}>Create an Account</h1>
    <h2 className={css.subtitle}>Please sign up to see the dashboard.</h2>
    <form  className={css.form}>
      <input type="text" placeholder="Username" required className={css.input}/>
      <input type="text" placeholder="Email" required className={css.input}/>
      <input type="password" placeholder="Password" required className={css.input}
      />
      <button className={css.button}>Register</button>
      {/* {error && "Something went wrong!"} */}
    </form>
    <span className={css.or}>- OR -</span>
    <Link className={css.link} href="/dashboard/login">
      Login with an existing account
    </Link>
  </div>
);
};

export default Registor;