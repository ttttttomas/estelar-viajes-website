import axios from "axios";

type Cartelera = {
  ID: number;
  descripcion: string;
  periodo: string;
  image: string;
};

export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function CarteleraPage() {
  let carteleraData: Cartelera[] = [];

  let carteleraInternacionales: Cartelera[] = [];
  let carteleraSierras: Cartelera[] = [];
  let carteleraCordilleras: Cartelera[] = [];
  let carteleraCosta: Cartelera[] = [];

  try {
    const res = await axios.get<Cartelera[]>(
      "https://api-estelar.iwebtecnology.com/cartelera"
    );

    carteleraData = res.data;

    carteleraInternacionales = carteleraData.filter(
      (c) => c.periodo === "internacional" || c.periodo === "Internacional"
    );
    carteleraCordilleras = carteleraData.filter((c) => c.periodo === "Cordillera");
    carteleraCosta = carteleraData.filter((c) => c.periodo === "Costa");
    carteleraSierras = carteleraData.filter(
      (c) => c.periodo === "Sierras" || c.periodo === "Sierra"
    );
  } catch (error) {
    console.error("Error cargando cartelera:", error);
    // quedan vacíos y no rompe el render
  }
  
    return (
      <main className="flex flex-wrap justify-center mx-20">
        {/* {!cartelera && <p>No hay cartelera.</p>} */}
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