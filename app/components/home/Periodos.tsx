'use client'
import Link from 'next/link'

export default function Periodos() {
  return (
    <section className="mt-5 mb-10" id="periodos">
        <h1 className='text-4xl text-center font-extralight text-tertiary'>¡LLEGARON LAS VACACACIONES DE INVIERNO!</h1>
        <p className="my-10 text-lg font-bold text-center">SELECCIONÁ UN PERÍODO</p>
        <div className="relative flex flex-col flex-wrap items-center justify-center gap-20 md:flex-row md:gap-30">
          <Link className="transition-all w-50 md:hover:scale-105" href="/sierra">
            <img src="sierras.webp" className='object-cover w-full rounded-xl' alt="" />
          </Link>
          <Link className="transition-all w-50 md:hover:scale-105" href="/cordillera">
            <img src="cordillera.webp"  className='object-cover w-full'alt="" />
          </Link>
          <Link className="transition-all w-50 md:hover:scale-105" href="/costa">
            <img src="costa.webp"  className='object-cover w-full'alt="" />
          </Link>
          <Link className="transition-all w-50 md:hover:scale-105" href="/miniturismo">
            <img src="periodo4.png"  className='object-cover w-full'alt="" />
          </Link>
          <Link className="transition-all w-50 md:hover:scale-105" href="/verano2026">
            <img src="verano.png"  className='object-cover w-full'alt="" />
          </Link>
          <Link className="transition-all w-50 md:hover:scale-105" href="/findeanio">
            <img src="findeanio.png"  className='object-cover w-full'alt="" />
          </Link>
        </div>
      </section>
  )
}
