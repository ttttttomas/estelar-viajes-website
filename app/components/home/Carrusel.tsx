'use client'
import {useState} from 'react'
import Circle from '../icons/Circle'

export default function Carrusel() {
    const [index, setIndex] = useState(0)

    const handleImageChange = (number: number) => {
        setIndex(number)
    }

    setTimeout(() => {
        setIndex((prev) => (prev + 1) % images.length);
    }, 3000)

    const images = [
        "/bg-home1.png",
        "/bg-home2.png",
        "/bg-home3.png",
    ]
  return (
    <section className='relative w-full h-full'>
        <div className="flex items-center justify-center">
            <img src={images[index]} alt="background" className="object-cover w-full h-full" />
        </div>
        <div className="absolute top-[480px] left-2 flex gap-3 items-center justify-center">
            <div onClick={() => handleImageChange(0)} className="cursor-pointer">
            <Circle fill={index === 0 ? "black" : "none"}/>
            </div>
            <div onClick={() => handleImageChange(1)} className="cursor-pointer">
            <Circle fill={index === 1 ? "black" : "none"}/>
            </div>
            <div onClick={() => handleImageChange(2)} className="cursor-pointer">
            <Circle fill={index === 2 ? "black" : "none"}/>
            </div>
        </div>
    </section>
  )
}
