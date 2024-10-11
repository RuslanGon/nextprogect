import css from './page.module.css'
import Link from 'next/link.js'

const Button = ({text, url}) => {
  return (
<Link href={url}>
    <button className={css.container}>{text}</button>
</Link>
  )
}

export default Button