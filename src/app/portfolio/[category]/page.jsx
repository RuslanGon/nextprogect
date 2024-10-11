import Image from 'next/image'
import css from './page.module.css'
import Button from '@/components/Button/Button'
import { items } from './data.js'
import { notFound } from 'next/navigation';

// const getData = (cat) =>{
//   const data = items[cat]

//   if (data){
//     data
//   }
//   return notFound()
// }


const Category = ({params}) => {
  // console.log(params);
  // const data = getData(params.category)
  return (
    <div className={css.container}>
      <h1 className={css.catTitle}></h1>
      <div className={css.item} >
        <div className={css.content}>
          <h1 className={css.title}></h1>
          <p className={css.desc}></p>
          <Button text="See More" url="#" />
        </div>
        <div className={css.imgContainer}>
          <Image
            className={css.img}
            fill={true}
            src=''
             alt=''
          />
        </div>
      </div>

      
    </div>
  )
}

export default Category