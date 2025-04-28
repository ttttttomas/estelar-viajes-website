import Link from 'next/link'
import Logo from './Logo'
import Cell from './icons/Cell'
import Buzon from './icons/Buzon'
import Home from './icons/Home'
import Persona1 from './icons/Persona1'
import Persona2 from './icons/Persona2'
import Contact from './icons/Contact'
import { moonDance } from '../layout'

export default function Footer() {
  return (
    <footer className='absolute z-0 flex flex-col flex-wrap items-center justify-between w-full text-black bg-white gap-y-5'>
      <ul className='flex flex-wrap items-center justify-between w-full px-16 py-5 text-white underline gap-y-5 bg-tertiary'>
        <Link href="/documentation">
          <li>● Documentación para salir del país</li>
        </Link>      
        <Link href="/cancelation">
          <li>● Política de cancelación</li>
        </Link>
        <Link href="/terms">
          <li>● Términos y condiciones</li>
        </Link>
        <Link href="/privacity">
          <li>● Política de privacidad y menores</li>
        </Link>
        <Link href="/cartelera">
          <li>● Cartelera</li>
        </Link>
      </ul>
      <section className='flex flex-col justify-between w-full gap-10 px-20 md:gap-0 md:flex-row'>
        <div className='flex flex-col gap-2'>
            <Logo w="200px" />
            <img src="/ministerio.png" alt="Logo"/>
        </div>
        <ul className='flex flex-col justify-between gap-5 md:gap-0'>
            <p className='text-xl font-bold'>
              Contacto</p>
            <li className='flex items-center gap-5'>
              <Cell />
              
              11-6521-6518</li>
            <li className='flex items-center gap-5'>
              <Buzon />
              
              reservas@estelarviajes.com</li>
            <li className='flex items-center gap-5'>
              <Buzon />
              
              info@estelarviajes.com</li>
        </ul>
        <ul className='flex flex-col justify-between gap-5 md:gap-0'>
            <p className='text-xl font-bold'>Mapa del sitio</p>
            <Link className='flex items-center gap-5 underline' href="/">
            <Home fill={"black"}/>
            Inicio</Link>
            <Link className='flex items-center gap-5 underline' href="/travel-packages">
            <Persona1 fill={"black"} />
            Paquetes</Link>
            <Link className='flex items-center gap-5 underline' href="/about-us">
            <Persona2 fill={"black"} />
            ¿Quienes Somos?</Link>
            <Link className='flex items-center gap-5 underline' href="/contact">
            <Contact fill={"black"} />
            Contacto</Link>
        </ul>
      </section>
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
                   <p className={`md:text-xl ${moonDance.className}`}>Razon social: MUNDO TERRAMAR S.R.L - Cuit: 30-71637562-1 </p> 
                   <Link href="https://iwebtecnology.com" target="_blank" className="flex items-center justify-center">
                      <p>Desarrollado por</p>
                      <img src="/iweb.png" alt="Logo" width="121"/>
                    </Link>
      </div>
    </footer>
  )
}
