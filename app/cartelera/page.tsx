import axios from "axios";

type Cartelera = {
  ID: number;
  descripcion: string;
  periodo: string;
  image: string;
};

export default async function CarteleraPage() {

  const cartelera = await axios.get(`https://api-estelar.iwebtecnology.com/cartelera`);

  const carteleraInternacionales = cartelera.data.filter((cartelera: Cartelera) => cartelera.periodo === "internacional" || cartelera.periodo === "Internacional");
  const carteleraSierras = cartelera.data.filter((cartelera: Cartelera) => cartelera.periodo === "Sierras" || cartelera.periodo === "Sierra");
  const carteleraCordilleras = cartelera.data.filter((cartelera: Cartelera) => cartelera.periodo === "Cordillera");
  const carteleraCosta = cartelera.data.filter((cartelera: Cartelera) => cartelera.periodo === "Costa");
  
    return (
      <main className="flex flex-wrap justify-center mx-20">
        <h1 className="w-full mx-auto text-2xl font-bold text-center">Cartelera</h1>
          <p className="w-full mx-auto my-5 text-xl font-bold text-center underline">INTERNACIONALES</p>
          <div className="flex flex-wrap items-center justify-start gap-10 mx-auto my-5">
          {carteleraInternacionales.map((cartelera: Cartelera) => (
              <img key={cartelera.ID} src={cartelera.image} alt={cartelera.periodo} className="object-contain h-64 rounded-xl" />
            ))}
          </div>
          <p className="w-full mx-auto my-5 text-xl font-bold text-center underline">SIERRAS</p>
          <div className="flex flex-wrap items-center justify-between gap-10 my-5">
          {carteleraSierras.map((cartelera: Cartelera) => (
              <img key={cartelera.ID} src={cartelera.image} alt={cartelera.periodo} className="object-contain rounded-xl w-82" />
            ))}
          </div>
          <p className="w-full mx-auto my-5 text-xl font-bold text-center underline">CORDILLERA</p>
          <div className="flex flex-wrap items-center justify-between w-full gap-10 my-5">
          {carteleraCordilleras.map((cartelera: Cartelera) => (
              <img key={cartelera.ID} src={cartelera.image} alt={cartelera.periodo} className="object-contain rounded-xl w-82" />
            ))}
          </div>
          <p className="w-full mx-auto my-5 text-xl font-bold text-center underline">COSTA</p>
          <div className="flex flex-wrap items-center justify-between gap-10 my-5">
          {carteleraCosta.map((cartelera: Cartelera) => (
              <img key={cartelera.ID} src={cartelera.image} alt={cartelera.periodo} className="object-contain rounded-xl w-82" />
            ))}
          </div>
      </main>
    );
  };