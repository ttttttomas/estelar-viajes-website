import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='absolute flex flex-col flex-wrap items-center justify-between w-full text-black bg-white gap-y-5'>
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
      <section className='flex justify-between w-full px-20'>
        <div className='flex flex-col gap-2'>
            <Logo w="200px" />
            <img src="/ministerio.png" alt="Logo"/>
        </div>
        <ul className='flex flex-col justify-between'>
            <p className='text-xl font-bold'>Contacto</p>
            <li>11-6521-6518</li>
            <li>reservas@estelarviajes.com</li>
            <li>info@estelarviajes.com</li>
        </ul>
        <ul className='flex flex-col justify-between'>
            <p className='text-xl font-bold'>Mapa del sitio</p>
            <Link className='underline' href="/">Inicio</Link>
            <Link className='underline' href="/">Paquetes</Link>
            <Link className='underline' href="/">¿Quienes Somos?</Link>
            <Link className='underline' href="/">Contacto</Link>
        </ul>
      </section>
      <div className="flex flex-col items-center justify-center gap-5 mt-5">
                   <p className={`text-lg`}>Razon social: MUNDO TERRAMAR S.R.L - Cuit: 30-71637562-1 </p> 
                   <Link href="https://iwebtecnology.com/" target="_blank" className="flex items-center justify-center">
                      <p>Desarrollado por</p>
                      <img src="/iWeb.png" alt="Logo" width="121"/>
                    </Link>
                </div>
    </footer>
  )
}
