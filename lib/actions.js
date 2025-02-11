'use server'

import { redirect } from "next/navigation"
import { saveMeal } from "./meals"
import { revalidatePath } from "next/cache"

export async function shareMeal (formData) {
    const meal = {
      title : formData.get('title'),
      summary : formData.get('summary'),
      instructions : formData.get('instructions'),
      image : formData.get('image'),
      creator : formData.get('name'),
      creator_email : formData.get('email')
    }
     

    await saveMeal(meal)
    //this revalidatepath function will enforce the next js to rerender this route again instead of using cache route
    revalidatePath('/meals')
    redirect('/meals')
  }