"use client"
import Link from "next/link"
import css from './page.module.css'

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
  return (
    <nav className={css.container}>
        <Link className={css.logo} href='/'>My App</Link>
        <div className={css.links}>
            {links.map(link => (
                <Link key={link.id} href={link.url}>{link.title}</Link>
            ))}
            <button className={css.logout} onClick={() => {console.log('logout')}}>Logout</button>
        </div>
    </nav>
    
  )
}

export default Navbar