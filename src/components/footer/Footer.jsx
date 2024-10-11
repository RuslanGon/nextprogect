import css from './page.module.css'
import Image from 'next/image.js'

const Footer = () => {
  return (
    <footer className={css.container}>
        <div>2023 My App. All rights reserved</div>
        <div className={css.social}>
          <Image className={css.icon} src='/vk.png' width={15} height={15} alt='icon' />
          <Image className={css.icon} src='/inst.png' width={15} height={15} alt='icon' />
          <Image className={css.icon} src='/twitter.png' width={15} height={15} alt='icon' />
          <Image className={css.icon} src='/yt.png' width={15} height={15} alt='icon' />

        </div>
    </footer>
  )
}

export default Footer