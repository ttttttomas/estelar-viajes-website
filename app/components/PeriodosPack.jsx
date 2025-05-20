import Link from "next/link";
import Transport from "./icons/Transport";
import Days from "./icons/Days";
import Nights from "./icons/Nights";
import Des from "./icons/Des";
import Ship from "./icons/Ship";
import Plane from "./icons/Plane";


export default function PeriodosPack({ products }) {
  return (
    <main className="w-full">
      <section id="bg">
        <img src="/bg-home1.webp" alt="background" />
      </section>
      <section className={`mx-14`}>
        <h6 className="w-full py-3 font-bold tracking-wide text-center md:text-3xl rounded-2xl bg-primary">
          NUESTROS PAQUETES
        </h6>
        <div className="flex flex-wrap justify-center gap-10 my-5 md:justify-start">
          {products.map((product) => (
            <Link
                  key={product.ID}
                  className="min-h-[700px] flex flex-col pb-3 overflow-hidden transition-all bg-white max-h-[600px] md:group md:hover:scale-95 max-w-80 rounded-2xl"
                  href={`/travel-packages/${product.periodo}/${product.ID}`}>
                  <img
                    className="w-full transition-all min-h-52 group-hover:scale-110"
                    src={product.image}
                    alt={product.destino}
                  />
                  <p className="pl-3 text-xl font-black tracking-wide w-max pt-7 text-tertiary">
                    {product.destino}
                  </p>
                  <div className="flex h-full pr-2">
                    <div className="flex flex-col justify-between w-3/4 gap-8">
                      <p className="pl-3 text-sm font-semibold">{product.subtitulo}</p>
                      <small className="pl-3 text-sm text-gray-600 ">
                        {product.descripcion}
                      </small>
                      <b className="pl-5 font-semibold text-md">Salida: {product.date}</b>
                      <div className="flex flex-col items-center w-full">
                        {product.desde === 1 && <small className="text-xs">desde</small>}
                        <p className="md:text-[35px] text-2xl font-bold text-tertiary">
                          {product.periodo === "internacional" ? "$USD " : "$"}{product.precio}.-
                        </p>
                        <small className="text-xs">+ ${product.adicional}.-</small>
                      </div>
                    </div>
                    <div className="w-1/4 h-full pl-2 border-l border-gray-400 border-dashed">
                      <ul className="flex flex-col items-center justify-center h-full gap-5 text-xs text-nowrap">
                        <li className="flex flex-col items-center gap-2">
                          {product.transporte === "Bus Semi" && <Transport />}
                          {product.transporte === "Bus Mix" && <Transport />}
                          {product.transporte === "Bus Cama" && <Transport />}
                          {product.transporte === "Aéreo" && <Plane />}
                          {product.transporte === "Crucero" && <Ship />}
                          <p>{product.transporte}</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                          <Days />
                          <p>{product.days}</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                          <Nights />
                          <p>{product.nights}</p>
                        </li>
                        <li className="flex flex-col items-center gap-2">
                          <Des />
                          <p>{product.regimen}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
