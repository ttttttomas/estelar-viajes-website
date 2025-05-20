import Link from "next/link";
import Transport from "./icons/Transport";
import Days from "./icons/Days";
import Nights from "./icons/Nights";
import Des from "./icons/Des";
import { Package } from "../types";

export default function PackageCard(product: Package) {
  return (
    <Link
      key={product.ID}
      className="h-full pb-3 overflow-hidden transition-all bg-white max-h-[600px] md:group md:hover:scale-95 max-w-80 rounded-2xl"
      href={`/travel-packages/${product.periodo}/${product.ID}`}>
      <img
        className="w-full transition-all group-hover:scale-110"
        src={product.image}
        alt={product.destino}
      />
      <p className="pl-5 text-2xl font-black tracking-wide w-max pt-7 text-tertiary">
        {product.destino}
      </p>
      <div className="flex h-full pr-2">
        <div className="flex flex-col justify-center w-3/4 gap-8">
          <p className="pl-5 font-semibold">{product.subtitulo}</p>
          <small className="pl-5 text-sm text-gray-600 ">
            {product.descripcion}
          </small>
          <b className="pl-5 font-semibold text-md">Salida: {product.date}</b>
          <div className="flex flex-col items-center w-full">
            {product.desde === 1 && <small className="text-xs">desde</small>}
            <p className="md:text-[40px] text-4xl font-bold text-tertiary">
              ${product.precio}.-
            </p>
            <small className="text-xs">+ ${product.adicional}.-</small>
          </div>
        </div>
        <div className="w-1/4 h-full pl-2 border-l border-gray-400 border-dashed">
          <ul className="flex flex-col items-center justify-center gap-5 text-xs text-nowrap">
            <li className="flex flex-col items-center gap-2">
              <Transport />
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
  );
}
