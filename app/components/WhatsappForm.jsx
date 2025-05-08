'use client'
import { useForm, useFieldArray } from "react-hook-form";

export default function ReservaForm() {

    const { register, handleSubmit, control } = useForm({
      defaultValues: {
        pasajeros: [{ nombre: "", apellido: "", dni: "" }],
        fechaSalida: "",
      },
    });
  
    const { fields, append, remove } = useFieldArray({
      control,
      name: "pasajeros",
    });
  
    const onSubmit = (data) => {
      let message = `Hola, quiero hacer una reserva.\n\nPasajeros:\n`;
  
      data.pasajeros.forEach((p, index) => {
        message += `🧑 Pasajero ${index + 1}\n- Nombre: ${p.nombre}\n- Apellido: ${p.apellido}\n- DNI: ${p.dni}\n\n`;
      });
  
      message += `📅 Fecha de salida: ${data.fechaSalida}\n📅 Fecha de vuelta: ${data.fechaVuelta}\n📞 Teléfono: ${data.telefono}\n📧 Email: ${data.email}`;
  
      const phoneNumber = "1167877298"; // Reemplaza con el número de WhatsApp destino
      const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
      window.open(url, "_blank");
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 p-3 mt-6 text-white b-10">
        {fields.map((field, index) => (
          <div key={field.id} className="p-2 space-y-2 border rounded-t-xl md:rounded-3xl">
            <input {...register(`pasajeros.${index}.nombre`)} placeholder="Nombre" className="w-full px-4 py-2 text-black bg-white border rounded" required />
            <input {...register(`pasajeros.${index}.apellido`)} placeholder="Apellido" className="w-full px-4 py-2 text-black bg-white border rounded" required />
            <input {...register(`pasajeros.${index}.dni`)} placeholder="DNI" className="w-full px-4 py-2 text-black bg-white border rounded" required />
            {index > 0 && (
              <button type="button" onClick={() => remove(index)} className="w-full p-1 text-white bg-red-500 rounded cursor-pointer">
                ❌ Eliminar pasajero
              </button>
            )}
          </div>
        ))}
        <button type="button" onClick={() => append({ nombre: "", apellido: "", dni: "" })} className="p-2 text-black rounded cursor-pointer bg-primary">
          ➕ Agregar pasajero
        </button>
  
        <label className="block text-white">📅 Fecha de salida</label>
        <input {...register("fechaSalida")} type="date" className="w-full p-2 text-black bg-white border rounded" required />
  
        <input {...register("telefono")} type="tel" placeholder="Teléfono" className="w-full p-2 text-black bg-white border rounded" required />
        <input {...register("email")} type="email" placeholder="Correo electrónico" className="w-full p-2 text-black bg-white border rounded" required />
        
        <button type="submit" className="p-2 text-white border rounded cursor-pointer hover:bg-white hover:text-black bg-tertiary">Enviar</button>
      </form>
    );
  }