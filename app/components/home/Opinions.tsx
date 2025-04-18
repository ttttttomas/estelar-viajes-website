import Star from "../icons/Star";
import Comillas from "../icons/Comillas";
import Link from "next/link";

export default function Opinions() {

    const opinions = [{
        id: 1,
        stars: 5,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, officia repellendus! Fugit nam aliquam ipsum at voluptatum sapiente quaerat recusandae aut eaque, officiis dolores sequi optio eligendi voluptas vitae maiores.",
    },
    {
        id: 2,
        stars: 4,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, officia repellendus! Fugit nam aliquam ipsum at voluptatum sapiente quaerat recusandae aut eaque, officiis dolores sequi optio eligendi voluptas vitae maiores.",
    },
    {
        id: 3,
        stars: 2,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, officia repellendus! Fugit nam aliquam ipsum at voluptatum sapiente quaerat recusandae aut eaque, officiis dolores sequi optio eligendi voluptas vitae maiores.",
    },
    {
        id: 4,
        stars: 1,
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit, officia repellendus! Fugit nam aliquam ipsum at voluptatum sapiente quaerat recusandae aut eaque, officiis dolores sequi optio eligendi voluptas vitae maiores.",
    }
]

  return (
    <section className="my-5 mx-2 flex flex-col" id="clients">
        <p className="font-semibold text-2xl text-center my-10">ALGUNAS DE NUESTRAS RESEÑAS</p>
        <ul className="grid grid-cols-1 md:grid-cols-2 place-items-center gap-10">
          {opinions.map((opinion) => (
            <li key={opinion.id} className="max-w-[400px] flex items-start gap-5 bg-white p-5 rounded-3xl shadow-black/30 shadow-md">
                <Comillas />
                <div className="flex flex-col gap-5">
                    <div className="flex justify-center gap-8"> {[...Array(opinion.stars)].map((_, i) => (<Star key={i} />))} </div>
                    <p>{opinion.text}</p>
                </div>
            </li>
          ))}
        </ul>
        <Link target="_blank" className="text-center py-10 font-bold text-xl underline" href='/'>Ver todas las reseñas</Link>
      </section>
  )
}
