import Link from 'next/link.js'
import css from './page.module.css'
import Image from 'next/image.js'

const Blog = () => {
  return (
    <div className={css.mainContainer}>
        <Link href='blog/test'className={css.container} key='1'>
        <div className={css.imageContainer}>
            <Image
              // src={}
              alt=""
              width={400}
              height={250}
              className={css.image}
            />
          </div>
          <div className={css.content}>
            <h1 className={css.title}>Title</h1>
            <p className={css.desc}>Desc</p>
          </div>
        </Link>
    </div>
  )
}

export default Blog