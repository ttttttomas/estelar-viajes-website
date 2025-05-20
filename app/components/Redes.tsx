'use client'
import { useState } from 'react'
import Instagram from './icons/Redes/Instagram'
import Facebook from './icons/Redes/Facebook'
import Wpp from './icons/Redes/Wpp'
import Arrow from './icons/Arrow'
import Link from 'next/link'

export default function Redes() {
    const [show, setShow] = useState(false);
    const handleClick = () =>{
        setShow(!show);
    }

  return (
    <>
        <div onClick={handleClick} className={show ? "w-5 h-5 top-[57%] cursor-pointer z-10 right-15 fixed transition-all" : "w-5 h-5 top-[57%] z-10 cursor-pointer right-5 fixed transition-all"}>
            <div className={show ? "rotate-180 transition-all z-20" : "transition-all z-10"}>
                <Arrow />
            </div>
        </div>
        <section className={show ? "fixed mr-2 top-[50%] right-0 transition-all z-10" : "fixed mr-2 top-[50%] -right-10 transition-all z-10"}>
            <ul className='flex flex-col gap-3 backdrop-blur-sm'>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} target='_blank' href="https://www.facebook.com/people/Estelar-viajes/61557417986282/#">
                <Facebook />
                </Link>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} target='_blank' href="https://www.instagram.com/estelarviajes.sanber/">
                <Instagram />
                </Link>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} target='_blank' href="https://wa.me/1165216518">
                <Wpp />
                </Link>
            </ul>
        </section>
    </>
  )
}
