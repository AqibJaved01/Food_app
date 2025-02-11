import React from 'react'
import Styles from './page.module.css'
import Image from 'next/image'
import { getMeal } from '@/lib/meals'

const page = ({params}) => {
    const meal = getMeal(params?.mealSlug)
    meal.instructions = meal.instructions.replace(/\n/g, '<br />')
  return (

  <>
  <header className={Styles.header}>
    <div className={Styles.image}>
        <Image src={meal.image} fill/>
    </div>
    <div className={Styles.headerText}>
        <h1>{meal?.title}</h1>
        <p className={Styles.creator}>by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
        </p>
        <p className={Styles.summary}>{meal.summary}</p>
    </div>
  </header>
  <main>
  <p className={Styles.instructions} dangerouslySetInnerHTML={{
    __html : meal.instructions
  }}></p>
  </main>
  </> 
   )
}

export default page