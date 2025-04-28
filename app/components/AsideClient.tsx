'use client'
import {useContext, useState} from 'react'
import { asideContext } from '../context/AsideContext'
import Menu from './icons/Menu'
import {Montserrat_Alternates} from 'next/font/google'
import Link from 'next/link'
import Home from './icons/Home'
import ArrowAside from './icons/ArrowAside'
import Facebook from './icons/Redes/Facebook'
import Wpp from './icons/Redes/Wpp'
import Instagram from './icons/Redes/Instagram'
import Logo from './Logo'
import Persona1 from './icons/Persona1'
import Persona2 from './icons/Persona2'
import Contact from './icons/Contact'

const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export default function AsideClient() {
    const { isOpen, setIsOpen } = useContext(asideContext)
    const [packages, setPackages] = useState(false)

    const handleClick = () =>{
        setPackages(false)
        setIsOpen(false)
    }
  return (
            <aside className={isOpen ? "fixed top-0 left-0 z-20 h-full flex flex-col transition-all w-60 bg-tertiary" : "fixed top-0 left-0 z-20 h-screen overflow-hidden transition-all w-0 bg-tertiary"}>

                <p className="px-2 py-6 cursor-pointer">
                    <Menu />
                </p>
                <div>
                    <p className={`font-semibold text-lg px-3 ${montserratAlternates.className}`}>Estelar Viajes</p>
                    <small className={`px-3 text-black/60`}>by Mundo Terramar S.R.L</small>
                </div>
                <ul className={`px-3 py-10 gap-5 ${montserratAlternates.className} flex flex-col`}>
                    <Link onClick={handleClick} className='flex items-center gap-3 pb-3 border-b border-black border-dashed' href="/">
                        <Home fill={"white"} />
                        <p className="font-medium text-white text-md">Inicio</p>
                    </Link>
                    <li onClick={() => setPackages(!packages)} className='flex items-center gap-3 cursor-pointer'>
                        <Persona1 fill={"white"} />
                        <p className="font-medium text-white text-md">Paquetes</p>
                        <ArrowAside />
                    </li>
                        <ul className={packages ? 'flex flex-col gap-1 px-5 pb-3 text-white border-b border-black border-dashed transition-all' : 'h-0 overflow-hidden transition-all border-b border-black border-dashed'}>
                            <Link onClick={handleClick} href="/travel-packages">Semana Santa</Link>
                            <Link onClick={handleClick} href="/travel-packages">Sierras</Link>
                            <Link onClick={handleClick} href="/travel-packages">Costas</Link>
                        </ul>
                    <Link onClick={handleClick} className='flex items-center gap-3 pb-3 border-b border-black border-dashed' href="/">
                        <Persona2 fill={"white"} />
                        <p className="font-medium text-white text-md">Sobre nosotros</p>
                    </Link>
                    <Link onClick={handleClick} className='flex items-center gap-3 ' href="/">
                        <Contact fill={"white"} />
                        <p className="font-medium text-white text-md">Contacto</p>
                    </Link>
                </ul>
                <ul className='flex flex-col items-start gap-3 px-3'>
                    <Link target='_blank' className='flex items-center gap-3 text-sm' href="https://www.facebook.com/profile.php?id=61557417986282#">
                        <Facebook />
                        <p>Estelar Viajes</p>
                    </Link>
                    <Link target='_blank' className='flex items-center gap-3 text-sm' href="https://www.instagram.com/estelarviajes.sanber">
                        <Instagram />
                        <p>estelarviajes.sanber</p>
                    </Link>
                    <Link target='_blank' className='flex items-center gap-3 text-sm' href="https://wa.me/+5411652165186">
                        <Wpp />
                        <p>+54 9 11 65-21-6518</p>
                    </Link>
                </ul>
                <div className='flex items-center justify-center gap-5 mt-5'>
                    <Logo w={"80px"}/>
                </div>
            </aside>
  )
}
