import Link from 'next/link'
import css from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={css.container}>
        <div>2023 My App. All rights reserved</div>
        <div className={css.social}>
          <Link href="https://vk.com" passHref>
            <Image className={css.icon} src='/vk.png' width={15} height={15} alt='VK icon' />
          </Link>
          <Link href="https://instagram.com" passHref>
            <Image className={css.icon} src='/inst.png' width={15} height={15} alt='Instagram icon' />
          </Link>
          <Link href="https://twitter.com" passHref>
            <Image className={css.icon} src='/twitter.png' width={15} height={15} alt='Twitter icon' />
          </Link>
          <Link href="https://youtube.com" passHref>
            <Image className={css.icon} src='/yt.png' width={15} height={15} alt='YouTube icon' />
          </Link>
        </div>
    </footer>
  )
}

export default Footer
