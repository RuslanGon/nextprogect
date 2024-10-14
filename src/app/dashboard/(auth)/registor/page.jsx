"use client"
import Link from 'next/link';
import css from './page.module.css'
import { useState } from 'react';
import { headers } from 'next/headers.js';

const Registor = () => {

  const [error, setError] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    try {
      const res = await fetch("/api/auth/registor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      res.status === 201 &&
        router.push("/dashboard/login?success=Account has been created");
    } catch (err) {
      setError(err);
      console.log(err);
    }
  };


  return (
    <div className={css.container}>
    <h1 className={css.title}>Create an Account</h1>
    <h2 className={css.subtitle}>Please sign up to see the dashboard.</h2>
    <form  className={css.form} onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" required className={css.input}/>
      <input type="text" placeholder="Email" required className={css.input}/>
      <input type="password" placeholder="Password" required className={css.input}/>
      <button className={css.button}>Register</button>
      {error && "Something went wrong!"}
    </form>
    <span className={css.or}>- OR -</span>
    <Link className={css.link} href="/dashboard/login">
      Login with an existing account
    </Link>
  </div>
);
};

export default Registor;