"use client"
import { signIn } from 'next-auth/react'
import css from './page.module.css'

const Login = () => {
  return (
    <div className={css.container}>
      <button onClick={() => signIn("google")}>login with Google</button>
    </div>
  )
}

export default Login