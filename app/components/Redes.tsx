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
        <div onClick={handleClick} className={show ? "w-5 h-5 top-[57%] cursor-pointer z-10 right-15 fixed transition-all" : "w-5 h-5 top-[57%] cursor-pointer right-2 fixed transition-all"}>
            <div className={show ? "rotate-180 transition-all z-20" : "transition-all z-20"}>
                <Arrow />
            </div>
        </div>
        <section className={show ? "fixed mr-2 top-[50%] right-0 transition-all z-10" : "fixed mr-2 top-[50%] -right-12 transition-all z-10"}>
            <ul className='flex flex-col gap-3 backdrop-blur-sm'>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} href="">
                <Facebook />
                </Link>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} href="">
                <Instagram />
                </Link>
                <Link className={show ? 'transition-all hover:scale-110' : 'transition-all'} href="">
                <Wpp />
                </Link>
            </ul>
        </section>
    </>
  )
}
