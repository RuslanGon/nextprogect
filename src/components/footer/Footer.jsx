import Link from 'next/link'
import css from './page.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={css.container}>
        <div>2023 My App. All rights reserved</div>
        <div className={css.social}>
          <Link href="https://vk.com" target="_blank" passHref>
            <Image className={css.icon} src='/vk.png' width={25} height={25} alt='VK icon' />
          </Link>
          <Link href="https://instagram.com" target="_blank" passHref>
            <Image className={css.icon} src='/inst.png' width={25} height={25} alt='Instagram icon' />
          </Link>
          <Link href="https://twitter.com" target="_blank" passHref>
            <Image className={css.icon} src='/twitter.png' width={25} height={25} alt='Twitter icon' />
          </Link>
          <Link href="https://youtube.com" target="_blank" passHref>
            <Image className={css.icon} src='/yt.png' width={25} height={25} alt='YouTube icon' />
          </Link>
        </div>
    </footer>
  )
}

export default Footer
