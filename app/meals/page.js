import { Suspense } from 'react';
import Link from 'next/link';
import Styles from './page.module.css'
import MealGrid from '@/components/meals/meal-grid';
import { getMeals } from '@/lib/meals';

export default function MealPage () {
  async function Meals () {
    const meals = await getMeals()
    return (
      <MealGrid meals={meals}/>
    )
  }

    return (
      <>
       <header className={Styles.header}>
        <h1>
          Delicious mean, created with <span className={Styles.highlight}>by you</span>
        </h1>
        <p>
          Chose you favrouite meal and cock it yourself. Its easy and fun!
        </p>
        <p className={Styles.cta}>
          <Link href='/meals/share'>
            Share Your Favrouite Recipe
          </Link>
        </p>
       </header>
       <main className={Styles.main}>
        <Suspense fallback={<p className={Styles.loading}>Fetching meals...</p>}>
        <Meals/>
        </Suspense>
       </main>
      </>
    );
}