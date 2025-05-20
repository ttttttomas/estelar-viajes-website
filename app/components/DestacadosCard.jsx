import Link from "next/link";
import CalendarDay from "./CalendarCard";

export default function DestacadosCard({ product }) {

  return (
    <Link
    style={{ backgroundImage: `url('${product.image}')` }}
      className="bg-center bg-cover bg-repeat-none h-[200px] w-full md:min-w-[400px] relative rounded-2xl shadow-black/50 shadow-md"
      href={`/travel-packages/${product.periodo}/${product.ID}`}>
        <div className="flex justify-start w-full">
            {product.mes && <CalendarDay day={product.dia} month={product.mes} />}
            {product.mes2 && <CalendarDay day={product.dia2} month={product.mes2} />}
            {product.mes3 && <CalendarDay day={product.dia3} month={product.mes3} />}
        </div>
      <p className="absolute left-0 right-0 text-xl font-bold text-center text-white top-22 xl:text-3xl">
        {product.destino}
      </p>
    </Link>
  );
}
