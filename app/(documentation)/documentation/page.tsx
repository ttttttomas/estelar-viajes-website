export default function DocumentationPage() {
    return (
      <main className="mx-5">
        <div className="mx-auto">
          <h1 className="mb-4 text-2xl font-bold text-center">
            Documentación para salir del país
          </h1>
  
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-bold">
              Destino a los países miembros o asociados del MERCOSUR
            </h2>
            <p className="mb-2">
              Documentación que deberá presentar todo argentino para salir del país con destino a los países miembros o asociados del MERCOSUR:
            </p>
            <ul className="pl-6 mb-4 list-disc">
              <li>DNI (Ver Observaciones)</li>
              <li>Cédula de identidad MERCOSUR, expedida por la Policía Federal Argentina</li>
              <li>Cédula de identidad, expedida por la Policía Federal Argentina (Formato viejo sin Código de Lectura Mecánica)</li>
              <li>Cédula de Identidad Provincial, expedida por la Los Gobiernos Provinciales (para Bolivia y Chile)</li>
              <li>Libreta Cívica o de Enrolamiento</li>
              <li>Pasaporte de su nacionalidad Vigente</li>
            </ul>
            <h3 className="font-bold">Observaciones:</h3>
            <ul className="pl-6 list-disc">
              <li>Cualquiera sea el documento que presente, deberá estar en buen estado de conservación.</li>
              <li>El menor que cumplió 16 años tiene un plazo de 180 días para el canje de su DNI (Decreto N° 538/04) extendiéndose durante ese lapso su validez para egresar del Territorio Nacional.</li>
              <li>
                Tanto mayores como menores de edad no podrán viajar con la constancia de trámite del DNI o Cédulas de Identidad ya vencidas.
              </li>
              <li>Tampoco se podrá salir del país sin la correspondiente ACTUALIZACIÓN de los 8 años en el DNI.</li>
            </ul>
          </section>
  
          <section className="mb-6">
            <h2 className="mb-2 text-xl font-bold">
              Documentos de viaje de los Estados Partes del MERCOSUR y Estados Asociados - MERCOSUR/CMC/Decreto N° 18/08
            </h2>
            <p className="mb-2">
              Los países del Mercosur eliminan pasaportes: Los ciudadanos de los países del Mercado Común del Sur (Mercosur) tienen derecho a circular libremente entre las naciones miembros del bloque y sus asociados, luego de que la Cumbre de presidentes que culminó ayer en San Miguel de Tucumán hiciera oficial esta decisión. A partir de ahora, los residentes de Argentina, Brasil, Paraguay, Uruguay, así como los de países asociados como Bolivia, Chile, Colombia, Ecuador, Perú y Venezuela, podrán transitar la región sin necesidad de presentar pasaportes.
            </p>
            <p className="mb-2">
              En el comunicado final de la XXXV Cumbre del bloque regional, los jefes de Estados miembros y países asociados explican que este acuerdo facilitará el tránsito de las personas en el ámbito comunitario.
            </p>
            <h3 className="mb-2 font-bold">Documentos válidos:</h3>
            <ul className="flex flex-col gap-3 pl-6 list-disc">
              <li>Argentina: Cédula de identidad expedida por la Policía Federal, Pasaporte, DNI</li>
              <li>Brasil: Cédula de identidad expedida por cada Estado de la Federación con validez Nacional, Pasaporte</li>
              <li>Paraguay: Cédula de identidad, Pasaporte</li>
              <li>Uruguay: Cédula de identidad, Pasaporte</li>
              <li>Bolivia: Cédula de Identidad, Pasaporte</li>
              <li>Chile: Cédula de Ciudadanía, Pasaporte</li>
              <li>Colombia: Pasaporte, Cédula de Identidad, Cédula de Extranjería</li>
              <li>Ecuador: Pasaporte, Cédula de Identidad, Carné de Extranjería</li>
              <li>Perú: Pasaporte, Documento Nacional de Identidad, Carné de Extranjería</li>
              <li>Venezuela: Pasaporte, Cédula de Identidad</li>
            </ul>
          </section>
  
          <section className="my-10">
            <h2 className="mb-2 text-xl font-bold">
              Documentación que deberá presentar todo argentino para salir del país con destino a los países NO MERCOSUR
            </h2>
            <h3 className="font-bold">Documentos Válidos de Viaje:</h3>
            <ul className="pl-6 mb-4 list-disc">
              <li>Pasaporte de su nacionalidad válido y vigente.</li>
              <li>Visación Consular de así requerirlo el país de destino</li>
            </ul>
            <h3 className="font-bold">Observaciones:</h3>
            <ul className="pl-6 list-disc">
              <li>El Pasaporte que presente, deberá estar en buen estado de conservación.</li>
            </ul>
          </section>
        </div>
      </main>
    );
  };