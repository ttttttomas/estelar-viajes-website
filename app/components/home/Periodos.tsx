import Link from 'next/link'

export default function Periodos() {
  return (
    <section className="mt-5 mb-10" id="periodos">
        <p className="my-10 text-2xl font-semibold text-center">SELECCIONÁ UN PERÍODO</p>
        <div className="relative flex flex-col flex-wrap items-center justify-center gap-20 md:flex-row md:gap-52">
          <Link className="transition-all md:hover:scale-105" href="/">
            <img src="periodo2.png" alt="" />
          </Link>
          <Link className="transition-all md:hover:scale-105" href="/">
            <img src="periodo2.png" alt="" />
          </Link>
          <Link className="transition-all md:hover:scale-105" href="/">
            <img src="periodo2.png" alt="" />
          </Link>
        </div>
      </section>
  )
}
