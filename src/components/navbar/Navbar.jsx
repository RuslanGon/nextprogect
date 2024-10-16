"use client"

import Link from "next/link"
import css from "./page.module.css";

import { signOut, useSession } from "next-auth/react";
import DarckModelToggle from "../DarckModelToggle/DarckModelToggle.jsx";

const links = [
    {
      id: 1,
      title: "Home",
      url: "/",
    },
    {
      id: 2,
      title: "Portfolio",
      url: "/portfolio",
    },
    {
      id: 3,
      title: "Blog",
      url: "/blog",
    },
    {
      id: 4,
      title: "About",
      url: "/about",
    },
    {
      id: 5,
      title: "Contact",
      url: "/contact",
    },
    {
      id: 6,
      title: "Dashboard",
      url: "/dashboard",
    },
  ];

const Navbar = () => {
  const session = useSession();
  return (
    <nav className={css.container}>
        <Link href='/' className={css.logo}>MyApp</Link>
        <div className={css.links}>
          <DarckModelToggle />
            {links.map((link) =>(
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
              <button className={css.logout} onClick={signOut}>Logout</button>

            { session.status == "authenticated" &&
              <button className={css.logout} onClick={signOut}>Logout</button>}
        </div>
    </nav>
  )
}

export default Navbar