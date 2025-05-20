'use client'
import axios from 'axios';
import WhatsappForm from '../../../components/WhatsappForm'
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';

export default function ProductPage() {
  const [currentProduct, setCurrentProduct] = useState(null);
  const params = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      setCurrentProduct(null);
      const response = await axios.get(`https://api-estelar.iwebtecnology.com/products/${params.id}`);
      setCurrentProduct(response.data)
    };
    
    loadProduct();
  }, []);

  return (
    <>
      {currentProduct && (
        <main key={currentProduct.ID}>
          <img
            src={currentProduct.image}
            alt="background-section"
            className="w-full h-[400px] object-cover mt-1"
          />
          <section className="flex flex-col gap lg:flex-row">
            <div className="w-full mb-10">
              <ul className="flex justify-center gap-5 px-8 py-4 text-[12px] font-semibold text-center text-white bg-opacity-50 bg-tertiary md:gap-32 md:text-base">
                <a href="#detalles">Detalles</a>
                {currentProduct.itinerario && <a href="#itinerario">Itinerario</a>}
                {currentProduct.incluye && <a href="#incluye">Incluye</a>}
                {currentProduct.tarifas && <a href="#tarifas">Tarifas</a>}
                {currentProduct.tarifas && <a href="#fechas">Fechas</a>}
                {currentProduct.observaciones && <a href="#observaciones">Observaciones</a>}
              </ul>
              <h2 className="mt-5 text-2xl font-bold tracking-wide text-center">
                {currentProduct.destino}
              </h2>
              <h3 className="mt-5 tracking-wide text-center md:px-52">
                {currentProduct.descripcion}
              </h3>
              <div className="flex flex-col gap-5">

              <div
                id="detalles"
                className="w-full mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="w-full px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Detalles del paquete
                </p>
                <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                  <li>{`${currentProduct.days} dias ${currentProduct.nights} noches`}</li>
                  <li>{`Tipo de transporte: ${currentProduct.transporte}`}</li>
                  <li>{`Hotel: ${currentProduct.hotel}`}</li>
                  <li>{`Régimen: ${currentProduct.regimen}`}</li>
                </ul>
              </div>

               <div
                id="fechas"
                className="w-full mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="w-full px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Fechas de salida
                </p>
                <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                  {currentProduct.date && <li>{currentProduct.date}</li>}
                  {currentProduct.date2 && <li>{currentProduct.date2}</li>}
                  {currentProduct.date3 && <li>{currentProduct.date3}</li>}
                </ul>
              </div>

              {currentProduct.itinerario && <div
                id="itinerario"
                className="w-full px-5 mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Itinerario
                </p>
                <ul className="flex flex-col gap-5 px-4 py-6 text-sm font-semibold">
                  {currentProduct.itinerario && <li>Dia 1: {currentProduct.itinerario}</li>}
                  {currentProduct.itinerario2 && <li>Día 2: {currentProduct.itinerario2}</li>}
                  {currentProduct.itinerario3 && <li>Día 3: {currentProduct.itinerario3}</li>}
                  {currentProduct.itinerario4 && <li>Día 4: {currentProduct.itinerario4}</li>}
                  {currentProduct.itinerario5 && <li>Día 5: {currentProduct.itinerario5}</li>}
                  {currentProduct.itinerario6 && <li>Día 6: {currentProduct.itinerario6}</li>}
                  {currentProduct.itinerario7 && <li>Día 7: {currentProduct.itinerario7}</li>}
                  {currentProduct.itinerario8 && <li>Día 8: {currentProduct.itinerario8}</li>}
                </ul>
              </div>}

              {currentProduct.incluye && <div
                id="incluye"
                className="w-full mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Incluye
                </p>
                <ul className="flex flex-col gap-2 px-4 py-6 text-sm font-semibold">
                  {currentProduct.incluye && <li>{`${currentProduct.incluye}`}</li>}
                  {currentProduct.incluye2 && <li>{`${currentProduct.incluye2}`}</li>}
                  {currentProduct.incluye3 && <li>{`${currentProduct.incluye3}`}</li>}
                  {currentProduct.incluye4 && <li>{`${currentProduct.incluye4}`}</li>}
                </ul>
              </div>}

              {currentProduct.tarifas && <div
                id="tarifas"
                className="w-full mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Tarifas
                </p>
                <ul className="flex flex-col gap-2 px-4 pt-6 pb-4 text-sm font-semibold">
                  {currentProduct.tarifas && <li>{`$${currentProduct.tarifas}.-`}</li>}
                  {currentProduct.tarifas2 && <li>{`$${currentProduct.tarifas2}.-`}</li>}
                  {currentProduct.tarifas3 && <li>{`$${currentProduct.tarifas3}.-`}</li>}
                  {currentProduct.tarifas4 && <li>{`$${currentProduct.tarifas4}.-`}</li>}
                </ul>
              </div>}

              <div
                id="observaciones"
                className="w-full mx-auto my-3 shadow-2xl md:w-3/4 rounded-3xl">
                <p className="px-4 py-3 text-sm font-medium text-white rounded-t-lg shadow-lg bg-tertiary text-start">
                  Observaciones
                </p>
                <ul className="flex flex-col gap-2 px-4 pt-6 pb-5 text-sm font-semibold">
                  <li>{`${currentProduct.observaciones}`}</li>
                  <li>{`${currentProduct.observaciones2}`}</li>
                  <li>{`${currentProduct.observaciones3}`}</li>
                </ul>
              </div>
              </div>
            </div>

            <div className="flex flex-col items-center md:w-full lg:w-1/4">
              <div className="w-full pb-8 text-center bg-tertiary rounded-3xl md:rounded-none md:rounded-bl-3xl">
                <h4 className="pt-5 text-lg font-medium text-center text-white">
                  ¿Te gustaría reservar?
                </h4>
                <span className="text-sm text-white/70">
                  Rellena este formulario para consultar disponibilidad.
                </span>
                <WhatsappForm />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}