import axios from "axios";

export default async function CarteleraPage() {

  const cartelera = await axios.get(`https://automotoresyrigoyen.com/api/cars`);
  console.log(cartelera.data);
  
    return (
      <main className="grid grid-cols-1 gap-10 p-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cartelera.data.map((cartelera) => (
          <div key={cartelera.ID} className="flex flex-col w-64 h-auto gap-5 p-4 rounded-lg shadow-md shadow-black/30">
            <img src={cartelera.imagen1} alt={cartelera.descripcion} className="object-cover rounded-lg" />
            <p className="text-xl font-bold text-center">{cartelera.marca}</p>
            <p className="text-center text-orangeMedium">{cartelera.modelo}</p>
          </div>
        ))}
      </main>
    );
  };