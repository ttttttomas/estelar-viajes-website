'use client'
import Link from "next/link"
import { useState } from "react"

export default function HeaderList() {

    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
        console.log(show)
    }
  return (
    <div className="relative hidden xl:block">
    <ul className={`flex items-center gap-16 text-tertiary font-semibold`}>
            <Link href="/">Inicio</Link>
            <p className="cursor-pointer" onClick={handleClick}>Paquetes</p>
            <Link href="/about-us">¿Quienes Somos?</Link>
            <Link href="/contact">Contacto</Link>
        </ul>
    <div className={show ? "absolute flex flex-col cursor-pointer items-center gap-2 px-2 py-1 right-[315px]" : "hidden"}>
        <Link onClick={() => setShow(!show)} className='w-32 p-1 text-center border rounded-lg cursor-pointer text-tertiary bg-secondary border-tertiary' href="/travel-packages">Sierras</Link>
        <Link onClick={() => setShow(!show)} className='w-32 p-1 text-center border rounded-lg cursor-pointer text-tertiary bg-secondary border-tertiary' href="/travel-packages">Cordillera</Link>
        <Link onClick={() => setShow(!show)} className='w-32 p-1 text-center border rounded-lg cursor-pointer text-tertiary bg-secondary border-tertiary' href="/travel-packages">Costas</Link>
    </div>
    </div>
  )
}
