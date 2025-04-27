import Link from "next/link";
import PaymentsTable from "./components/PaymentsTable";
import Opinions from "./components/home/Opinions";
import Periodos from "./components/home/Periodos";
import Destacados from "./components/home/Destacados";
import Carrusel from "./components/home/Carrusel";


export default function Home() {
  return (
    <main>
      <ul className="flex justify-between py-1 font-medium text-white px-15 bg-tertiary">
        <Link href="/">Inicio</Link>
        <Link href="#periodos">Períodos</Link>
        <Link href="#payments">Formas de pago</Link>
        <Link href="#viajar">{'"Viajar"'}</Link>
        <Link href="#clients">Clientes</Link>
        <Link href="#destacados">Destacados</Link>
      </ul>
      <Carrusel />
      <Periodos />
      <PaymentsTable />
      <section className="flex flex-col items-center justify-center px-20 my-5 xl:flex-row" id="viajar">
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