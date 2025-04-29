'use client'
// import Loading from "@app/loading";
import { useEffect,useState } from "react";
import axios from "axios";
import { Flyers } from "../types";
import Loading from "../loading";

export default function CarteleraPage() {
  const [cartelera, setCartelera] = useState<Flyers[]>([]);
  const [loading, setLoading] = useState(true)

  useEffect(() => {
  async function loadCartelera () {
      const loadFlyers = async () => {
        const response = await axios.get(`http://147.93.71.106:8002/cartelera`)
        setCartelera(response.data)
        setLoading(false)
      }
      loadFlyers()
  }
  loadCartelera()
  console.log(cartelera)
  
  }, [])
  
    return (
      <main className={loading ? "flex justify-center items-center" : "grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"}>
        {loading ? <Loading /> : cartelera.map((cartelera) => (
          <div key={cartelera.ID} className="flex flex-col w-64 h-auto gap-5 p-4 rounded-lg shadow-md shadow-black/30">
            <img src={cartelera.image} alt={cartelera.descripcion} className="object-cover rounded-lg" />
            <p className="text-xl font-bold text-center">{cartelera.descripcion}</p>
            <p className="text-center text-orangeMedium">{cartelera.periodo}</p>
          </div>
        ))}
      </main>
    );
  };