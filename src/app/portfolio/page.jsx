import Link from 'next/link'
import css from './page.module.css'

const Portfolio = () => {
  return (
    <div className={css.container}>
    <h1 className={css.selectTitle}>Choose a gallery</h1>
    <div className={css.items}>
      <Link href="/portfolio/illustrations" className={css.item}>
        <span className={css.title}>Illustrations</span>
      </Link>
      <Link href="/portfolio/websites" className={css.item}>
        <span className={css.title}>Websites</span>
      </Link>
      <Link href="/portfolio/applications" className={css.item}>
        <span className={css.title}>Application</span>
      </Link>
    </div>
  </div>
  )
}

export default Portfolio