"use client"
import { signIn, useSession } from 'next-auth/react';
import css from './page.module.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Login = () => {
  const { status, data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn('credentials', { email, password });
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit} className={css.form}>
        <input type="email" placeholder="Email" required className={css.input} />
        <input type="password" placeholder="Password" required className={css.input} />
        <button className={css.button}>Login</button>
      </form>
      <button onClick={() => signIn("google")}>Login with Google</button>
    </div>
  );
};

export default Login;
