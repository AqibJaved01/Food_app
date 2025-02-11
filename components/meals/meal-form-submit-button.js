'use client'

import { useFormStatus } from "react-dom";
export function MealSubmitButton (){
  const {pending} = useFormStatus()

  return (
    <button type="submit" disabled={pending}>
     {pending ? "Submiting..." : "Share Meal"}
    </button>
)
}