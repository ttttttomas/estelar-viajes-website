import Link from "next/link";
import CardPayment from "./components/icons/CardPayment";
import Opinions from "./components/home/Opinions";
import Destacados from "./components/home/Destacados";

export default function Home() {
  return (
    <main className="py-32">
      <ul className="flex justify-between px-15 py-1 font-medium bg-tertiary text-white">
        <Link href="/">Inicio</Link>
        <Link href="#periodos">Períodos</Link>
        <Link href="#payments">Formas de pago</Link>
        <Link href="#viajar">{'"Viajar"'}</Link>
        <Link href="#clients">Clientes</Link>
        <Link href="#destacados">Destacados</Link>
      </ul>
      <section id="bg">
        <img src="/bg-home1.png" className="mt-10" alt="background" />
      </section>
      <section className="my-5" id="periodos">
        <p className="font-semibold text-2xl text-center my-10">SELECCIONÁ UN PERÍODO</p>
        <div className="flex flex-col md:flex-row items-center flex-wrap gap-52 justify-center">
          <Link href="/">
            <img src="periodo2.png" className="" alt="" />
          </Link>
          <Link href="/">
            <img src="periodo2.png" className="" alt="" />
          </Link>
          <Link href="/">
            <img src="periodo2.png" className="" alt="" />
          </Link>
        </div>
      </section>
      <section className="my-5 bg-tertiary" id="payments">
        <ul className="flex justify-between text-secondary pt-3 text-sm px-10 py-2">
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />
            <p>Efectivo</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />
            <p>Transferencia</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />    
            <p>Mercado Pago</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
            <CardPayment />         
            <p>Tarjeta de credito</p>
          </li>
          <li className="flex flex-col items-center justify-center gap-1">
          <CardPayment />
            <p>Tarjeta de debito</p>
          </li>
        </ul>
      </section>
      <section className="my-5 flex flex-col xl:flex-row items-center justify-center px-20" id="viajar">
        <img src="/viajar-image.png" className="object-cover" alt="viajar" />
        <p className="font-medium md:h-full xl:max-w-[500px] text-lg mx-auto">Viajar no es solo cambiar de lugar, es cambiar la energía. Es abrir los ojos a nuevas culturas, descubrir paisajes que solo viste en fotos, y vivir momentos que se quedan para siempre. Ya sea que sueñes con recorrer la inmensidad de nuestra querida Argentina o quieras explorar destinos lejanos como Europa, el Caribe o Asia, cada viaje es una oportunidad única de conectar con el mundo y con vos mismo.
Nosotros te ayudamos a que esa experiencia sea tan simple de planear como inolvidable de vivir. Porque no se trata solo de elegir un destino, sino de encontrar ese lugar que te haga sentir vivo.
Anímate. El próximo gran recuerdo de tu vida está un paso más cerca.</p>
      </section>
      <Opinions />
     <Destacados />
    </main>
  )
}