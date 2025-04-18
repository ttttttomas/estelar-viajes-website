import Link from 'next/link'
import Logo from './Logo'
import {montserratAlternates} from '@/app/layout'

export default function Header() {
  return (
    <header className='flex fixed top-0 w-full backdrop-blur-xs z-10 justify-around gap-20 py-5'>
        <div className='flex items-center gap-30'>
            <Logo w="80px"/>
            <div className={`flex flex-col items-center ${montserratAlternates.className}`}>
                <h1 className='font-semibold text-2xl'>Estelar Viajes</h1>
                <small className='text-black/60 font-medium '>by Mundo Terramar S.R.L</small>
            </div>
        </div>
        <ul className={`flex items-center gap-16 ${montserratAlternates.className} text-tertiary font-semibold`}>
            <Link href="/">Inicio</Link>
            <Link href="/">Paquetes</Link>
            <Link href="/">¿Quienes Somos?</Link>
            <Link href="/">Contacto</Link>

        </ul>
    </header>
  )
}
