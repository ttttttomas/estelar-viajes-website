'use client'
import CalendarDay from "../CalendarCard";
import Link from "next/link";
import {useState, useRef, useEffect} from "react";

export default function Destacados() {
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const carouselRef = useRef<HTMLUListElement>(null);
    const [isDraggable, setIsDraggable] = useState(true);

useEffect(() => {
  const handleResize = () => {
    // Por ejemplo, si el ancho es menor a 768px, lo consideramos mobile
    setIsDraggable(window.innerWidth >= 768);
  };

  handleResize(); // Ejecutar al montar
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
}, []);


  
  
    const handleMouseDown = (e: React.MouseEvent<HTMLUListElement>) => {
      // if (!isDraggable || !isDragging || !carouselRef.current) return;
      if (!carouselRef.current) return;

      setIsDragging(true);
      setStartX(e.pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
      
      // Prevenir selección de texto durante el arrastre
      document.body.style.cursor = 'grabbing';
      document.body.style.userSelect = 'none';
    };
  
    const handleMouseLeave = () => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;

      setIsDragging(false);
      resetStyles();
      
    };
  
    const handleMouseUp = () => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;

      setIsDragging(false);
      resetStyles();
    };
  
    const handleMouseMove = (e: React.MouseEvent<HTMLUListElement>) => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;
      e.preventDefault();
      
      const x = e.pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2; // Ajusta la velocidad de arrastre
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchStart = (e: React.TouchEvent<HTMLUListElement>) => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;

      if (!carouselRef.current) return;
      
      setIsDragging(true);
      setStartX(e.touches[0].pageX - carouselRef.current.offsetLeft);
      setScrollLeft(carouselRef.current.scrollLeft);
    };
  
    const handleTouchMove = (e: React.TouchEvent<HTMLUListElement>) => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;

      if (!isDragging || !carouselRef.current) return;
      
      const x = e.touches[0].pageX - carouselRef.current.offsetLeft;
      const walk = (x - startX) * 2;
      carouselRef.current.scrollLeft = scrollLeft - walk;
    };
  
    const handleTouchEnd = () => {
      if (!isDraggable || !isDragging || !carouselRef.current) return;

      setIsDragging(false);
    };
  
    const resetStyles = () => {
      
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
    };
        
  return (
    <section className="py-20" id="destacados">
        <p className="my-10 text-2xl font-semibold text-center">NUESTROS PAQUETES DESTACADOS</p>
        <ul 
         ref={carouselRef}
         onMouseDown={handleMouseDown}
         onMouseLeave={handleMouseLeave}
         onMouseUp={handleMouseUp}
         onMouseMove={handleMouseMove}
         onTouchStart={handleTouchStart}
         onTouchMove={handleTouchMove}
         onTouchEnd={handleTouchEnd}
         className="flex flex-col items-center gap-20 px-20 md:overflow-x-scroll md:flex-row flex-nowrap">
            {[...Array(6)].map((_, i) => (
                 <Link key={i} className="bg-paquete h-[200px] min-w-[400px] relative rounded-2xl shadow-black/50 shadow-md" href="/">
                     <CalendarDay day={i+1} month={"Enero"} />
                     <p className="absolute left-0 right-0 text-xl font-bold text-center text-white top-22 xl:text-3xl">MAR DEL PLATA</p>  
                 </Link>
            ))}
        </ul>
    </section>
  )
}
