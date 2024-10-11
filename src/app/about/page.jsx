import Image from 'next/image.js'
import css from './page.module.css'

const About = () => {
  return (
    <div className={css.container}>
      <div className={css.imgContainer}>
      <Image src="https://img.freepik.com/free-photo/paper-people-chain-on-green-grass-unity-concept_632805-35.jpg?w=1380&t=st=1685890833~exp=1685891433~hmac=46f15c2161ca525e238313ec9dc0812864411c64035b664d7abecd75e33494e1"
          fill={true}
          alt="about us"
          className={css.img}/>
        <div className={css.imgText}>
          <h1 className={css.imgTitle}>Lorem ipsum dolor sit</h1>
          <h2 className={css.imgDesc}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
        </div>
      </div>
    </div>
  )
}

export default About