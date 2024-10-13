import Image from 'next/image'
import css from './page.module.css'
import Button from '@/components/Button/Button'
import { items } from './data.js'
import { notFound } from 'next/navigation';

const getData = (cat) =>{
  const data = items[cat]

  if (data){
    return data
  }
  return notFound()
}

const Category = ({params}) => {
  // console.log(params);
  const data = getData(params.category)
  return (
    <div className={css.container}>
      <h1 className={css.catTitle}>{params.category}</h1>
      {data.map((item) =>(
 <div className={css.item} key={item.id} >
 <div className={css.content}>
   <h1 className={css.title}>{item.title}</h1>
   <p className={css.desc}>{item.desc}</p>
   <Button text="See More" url="#" />
 </div>
 <div className={css.imgContainer}>
   <Image className={css.img} fill={true} src={item.image} alt={item.id} />
 </div>
</div>
      ))}
     

      
    </div>
  )
}

export default Category