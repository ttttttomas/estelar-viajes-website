'use client'
import Link from "next/link"
import { useState } from "react"

export default function HeaderList() {
    const [show, setShow] = useState(false);
    
    const handleClick = () =>{
        setShow(!show);
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
        <Link onClick={() => setShow(!show)} className='p-1 text-center border rounded-lg cursor-pointer w-34 text-tertiary bg-secondary border-tertiary' href="/travel-packages/sierras">Sierras</Link>
        <Link onClick={() => setShow(!show)} className='p-1 text-center border rounded-lg cursor-pointer w-34 text-tertiary bg-secondary border-tertiary' href="/travel-packages/cordillera">Cordillera</Link>
        <Link onClick={() => setShow(!show)} className='p-1 text-center border rounded-lg cursor-pointer w-34 text-tertiary bg-secondary border-tertiary' href="/travel-packages/costa">Costa</Link>
        <Link onClick={() => setShow(!show)} className='p-1 text-center border rounded-lg cursor-pointer w-34 text-tertiary bg-secondary border-tertiary' href="/travel-packages/internacionales">Internacionales</Link>
    </div>
    </div>
  )
}
