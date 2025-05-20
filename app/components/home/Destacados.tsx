'use client'
import axios from "axios";
import DestacadosCard from "../DestacadosCard";
import {useState, useRef, useEffect} from "react";
import { Package } from "@/app/types";

export default function Destacados() {
    const [products, setProducts] = useState<Package[]>([]);
    const [isDragging, setIsDragging] = useState<boolean>(false);
    const [startX, setStartX] = useState<number>(0);
    const [scrollLeft, setScrollLeft] = useState<number>(0);
    const carouselRef = useRef<HTMLUListElement>(null);
    const [isDraggable, setIsDraggable] = useState(true);


useEffect(() => {
  const fetchProducts = async () => {
      const response = await axios.get(
        `https://api-estelar.iwebtecnology.com/products`
      );
      setProducts(response.data);      
  }
  fetchProducts();

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
        
   const productsWithDates = products.map((product: Package) => {
  const meses = [
    "ENE", "FEB", "MAR", "ABR", "MAY", "JUN",
    "JUL", "AGOS", "SEPT", "OCT", "NOV", "DIC",
  ];

  const result = { ...product };

  if (product.date) {
    const [year, month, day] = product.date.split("-");
    result.mes = meses[parseInt(month, 10) - 1];
    result.dia = day;
    result.year = year
  } else {
    console.warn("Producto sin fecha principal:", product);
  }

  if (product.date2) {
    const [year2, month2, day2] = product.date2.split("-");
    result.mes2 = meses[parseInt(month2, 10) - 1];
    result.dia2 = day2;
    result.year3 = year2;
  }

  if (product.date3) {
    const [year3, month3, day3] = product.date3.split("-");
    result.mes3 = meses[parseInt(month3, 10) - 1];
    result.dia3 = day3;
    result.year3 = year3;
  }

  return result;
});



  return (
    <section className="mx-5 mb-10" id="destacados">
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
         className="flex flex-col items-center gap-20 mx-2 overflow-hidden md:mx-0 md:overflow-x-scroll md:flex-row flex-nowrap">
            {productsWithDates.slice(0,6).map((product) => ( 
              <DestacadosCard key={product.ID} product={product} /> 
              ))}
        </ul>
    </section>
  )
}
