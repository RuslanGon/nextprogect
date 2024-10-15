"use client"
import { signIn, useSession } from 'next-auth/react'
import css from './page.module.css'
import { useRouter } from 'next/router.js'

const Login = () => {
const session = useSession()
const router = useRouter()

return (
  <div className={css.container}>
    <form onSubmit={handleSubmit} className={css.form}>
      <input
        type="email"
        placeholder="Email"
        required
        className={css.input}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className={css.input}
      />
      <button className={css.button}>Login</button>
    </form>

    <button onClick={() => signIn("google")}>Login with Google</button>
  </div>
);
};

export default Login;