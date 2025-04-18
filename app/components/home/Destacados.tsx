'use client'
import CalendarDay from "../CalendarCard";
import Link from "next/link";
import {useState, useRef} from "react";

export default function Destacados() {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const carouselRef = useRef<HTMLUListElement>(null);
  
  
    const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
      if (!carouselRef.current) return;
      
      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
      
      // Prevenir selección de texto durante el arrastre
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    };
  
    const handleMouseLeave = () => {
      setIsDragging(false);
      resetStyles();
    };
  
    const handleMouseUp = () => {
      setIsDragging(false);
      resetStyles();
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
      if (!isDragging || !carouselRef.current) return;
      e.preventDefault();
      
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Ajusta la velocidad de arrastre
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
      if (!carouselRef.current) return;
      
      setIsDragging(true);
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };
  
    const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
      if (!isDragging || !carouselRef.current) return;
      
      const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchEnd = () => {
      setIsDragging(false);
    };
  
    const resetStyles = () => {
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
        
  return (
    <section className="mt-5" id="destacados">
        <p className="font-semibold text-2xl text-center my-10">NUESTROS PAQUETES DESTACADOS</p>
        <ul 
         ref={carouselRef}
         onMouseDown={handleMouseDown}
         onMouseLeave={handleMouseLeave}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
         className="flex flex-col md:flex-row flex-nowrap gap-20 px-20 overflow-x-scroll">
            {[...Array(6)].map((_, i) => (
                 <Link key={i} className="bg-paquete h-[200px] min-w-[400px] relative rounded-2xl shadow-black/50 shadow-md" href="/">
                     <CalendarDay day={i+1} month={"Enero"} />
                     <p className="absolute text-white font-bold text-center right-0 top-22 left-0 text-xl xl:text-3xl">MAR DEL PLATA</p>  
                 </Link>
            ))}
        </ul>
    </section>
  )
}
