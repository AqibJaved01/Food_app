'use client'
import { useRef, useState } from 'react'
import Styles from './image-picker.module.css'
import Image from 'next/image'
export default function ImagePicker ({label , name}) {
    const [pickedImage , setPickedImage] = useState(null)
    const imageRef = useRef()

    const handleImageChange = (event)=>{
        const file = event?.target.files[0]

        if(!file){
            setPickedImage(null)
            return
        }
        const fileReader = new FileReader()

        fileReader.readAsDataURL(file)
        fileReader.onload=()=>{
            setPickedImage(fileReader.result)
        }


    }
    function handlePickClick () {
        imageRef.current.click()
    }

    return (
        <div className={Styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={Styles.controls}>
                <div className={Styles.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && (
                        <Image 
                        src={pickedImage} 
                        alt='Pciker image' 
                        fill 
                        />
                    )}

                </div>
                <input 
                 className={Styles.input}
                 type='file'
                 id={name}
                 accept='image/png , image/jpeg'
                 name ={name}
                 ref={imageRef}
                 onChange={handleImageChange}
                />
                <button 
                className={Styles.button} 
                type='button'
                onClick={handlePickClick}
                >
                    Pick an Image
                </button>
  
            </div>
        </div>
    )
}