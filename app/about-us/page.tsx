import PaymentsTable from "../components/PaymentsTable"
import { assistant } from "../layout"

export default function AboutUsPage() {
  return (
    <main>
        <section className="w-full bg-white h-28"></section>
        <h1 className={`${assistant.className} absolute top-46 rounded-r-xl p-10 tracking-wide text-end font-bold text-3xl text-white bg-tertiary h-26 md:w-[600px]`}>
            ¿Quienes Somos?
        </h1>
        <section className="flex w-full px-10 mt-20">
            <div className="w-1/2 pr-10 my-auto text-center"> 
            Somos una empresa especializada en la venta de viajes, pasajes y servicios de hotelería, comprometidos con hacer realidad tus sueños de viajar. Nuestro objetivo es ofrecer experiencias únicas que se ajusten a todos los estilos de viajeros, desde quienes buscan aventura y naturaleza, hasta quienes prefieren descansar en un destino tranquilo o descubrir nuevas culturas alrededor del mundo.
Nos apasiona crear propuestas atractivas, accesibles y variadas, con opciones tanto dentro de Argentina como en los principales destinos internacionales. Creemos que cada viaje comienza con una idea, una ilusión, y ahí es donde estamos para acompañarte.

Además, contamos con nuestro propio hotel en la ciudad de San Bernardo del Tuyú, un espacio ideal para disfrutar de la costa argentina con toda la comodidad y calidez que caracteriza a nuestro servicio.
Tu próximo viaje comienza acá, y estamos listos para ayudarte a planearlo.  
            </div>
            <div className="w-1/2">
                <img src="/bg-paquete.png" className="object-cover w-full h-full" alt="background" />
            </div>
        </section>
        <section>
        <PaymentsTable  />
        </section>
    </main>
  )
}
