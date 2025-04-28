'use client'
import {useEffect, useState} from 'react'
import Circle from '../icons/Circle'

export default function Carrusel() {
    const [isMobile, setIsMobile] = useState(false);
    const [index, setIndex] = useState(0)

    const handleImageChange = (number: number) => {
        setIndex(number)
    }

    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 768);
        };
    
        // Llamamos una vez al montar
        handleResize();
    
        window.addEventListener('resize', handleResize);
    
        // Limpiar el event listener al desmontar
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
    // setTimeout(() => {
    //     setIndex((prev) => (prev + 1) % images.length);
    // }, 3000)

    const images = [
        "/bg-home1.webp",
        "/bg-home2.webp",
        "/bg-home3.webp",
    ]
    const imagesMobile = [
        "/bg-home1mobile.png",
        "/bg-home2mobile.png",
        "/bg-home3mobile.png",
    ]
  return (
    <section className='relative w-full h-full '>
        <div className="flex items-center justify-center">
            <img 
            src={(isMobile ? imagesMobile : images)[index]} 
            alt="background"
            className="object-cover w-full h-[300px] md:h-[500px]" />
        </div>
        <div className="absolute top-[250px] md:top-[480px] md:left-2 left-0 md:right-auto right-0 flex gap-3 items-center justify-center">
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
