import Link from 'next/link'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className='flex flex-col justify-between items-center flex-wrap gap-y-5 bg-white text-black'>
      <ul className='flex w-full justify-between items-center underline flex-wrap gap-y-5 px-16 py-5 bg-tertiary text-white'>
        <Link href="/documentacion">
          <li>● Documentación para salir del país</li>
        </Link>      
        <Link href="/cancelacion">
          <li>● Política de cancelación</li>
        </Link>
        <Link href="/terminos">
          <li>● Términos y condiciones</li>
        </Link>
        <Link href="/privacidad">
          <li>● Política de privacidad y menores</li>
        </Link>
        <Link href="/cartelera">
          <li>● Cartelera</li>
        </Link>
      </ul>
      <section className='flex w-full px-20 justify-between'>
        <div className='flex flex-col gap-2'>
            <Logo w="200px" />
            <img src="/ministerio.png" alt="Logo"/>
        </div>
        <ul className='flex flex-col justify-between'>
            <p className='font-bold text-xl'>Contacto</p>
            <li>11-6521-6518</li>
            <li>reservas@estelarviajes.com</li>
            <li>info@estelarviajes.com</li>
        </ul>
        <ul className='flex flex-col justify-between'>
            <p className='font-bold text-xl'>Mapa del sitio</p>
            <Link className='underline' href="/">Inicio</Link>
            <Link className='underline' href="/">Paquetes</Link>
            <Link className='underline' href="/">¿Quienes Somos?</Link>
            <Link className='underline' href="/">Contacto</Link>
        </ul>
      </section>
      <div className="flex flex-col justify-center gap-5 mt-5 items-center">
                   <p className={`text-lg`}>Razon social: MUNDO TERRAMAR S.R.L - Cuit: 30-71637562-1 </p> 
                   <Link href="https://iwebtecnology.com/" target="_blank" className="flex justify-center items-center">
                      <p>Desarrollado por</p>
                      <img src="/iWeb.png" alt="Logo" width="121"/>
                    </Link>
                </div>
    </footer>
  )
}
