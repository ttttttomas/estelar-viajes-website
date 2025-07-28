import PaymentsTable from "../components/PaymentsTable"
import { assistant } from "../layout"

export default function AboutUsPage() {
  return (
    <main>
        <section className="w-full bg-white h-28"></section>
        <h1 className={`${assistant.className} absolute top-46 rounded-r-xl p-10 tracking-wide text-end font-bold text-3xl text-white bg-tertiary h-26 md:w-[600px]`}>
            ¿Quienes Somos?
        </h1>
        <section className="flex flex-col w-full gap-10 mt-20 md:px-10 md:gap-0 md:flex-row">
            <div className="px-10 pr-10 mx-auto my-auto overflow-y-scroll text-center md:w-1/2 md:overflow-auto h-52 md:h-auto"> 
            Somos una empresa especializada en la venta de viajes, pasajes y servicios de hotelería, comprometidos con hacer realidad tus sueños de viajar. Nuestro objetivo es ofrecer experiencias únicas que se ajusten a todos los estilos de viajeros, desde quienes buscan aventura y naturaleza, hasta quienes prefieren descansar en un destino tranquilo o descubrir nuevas culturas alrededor del mundo.
Nos apasiona crear propuestas atractivas, accesibles y variadas, con opciones tanto dentro de Argentina como en los principales destinos internacionales. Creemos que cada viaje comienza con una idea, una ilusión, y ahí es donde estamos para acompañarte.

Tu próximo viaje comienza acá, y estamos listos para ayudarte a planearlo.  
            </div>
            <div className="px-5 mx-auto md:w-1/2">
                <img src="/bg-paquete.png" className="object-cover w-full h-full mx-auto" alt="background" />
            </div>
        </section>
        <section>
        <PaymentsTable  />
        </section>
    </main>
  )
}
