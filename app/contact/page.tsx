"use client";
import { useForm } from "react-hook-form";
import Logo from "../components/Logo";
import axios from "axios";
import {useRouter} from 'next/navigation';
import { Toaster, toast } from 'sonner'


export default function ContactPage() {
  const router = useRouter();
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit((data) => {
    try  {
            axios.post("https://api-estelar.iwebtecnology.com/send-email", JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                },
            });
        toast.success('Formulario enviado con exito');
        console.log("enviado");
        setTimeout(() => {
            router.push("/");
        }, 3000);
    } catch (error) {
        console.error("Error al enviar formulario:", error);
        toast.error('Error al enviar formulario');

    }
  });
  return (
    <main>
      <Toaster richColors position="bottom-center"/>
      <h1 className="text-3xl font-bold text-center">Contáctanos</h1>
      <div className="relative flex flex-col items-center justify-center w-full mt-10 mb-20 md:mx-auto bg-primary bg-creamBg md:w-min">
        <div className="absolute -top-10 md:-top-8">
          <Logo w="90px" />
        </div>
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 px-20 pt-20 pb-10 mx-auto md:pb-10">
          <div className="flex flex-col w-full gap-3 md:flex-row md:gap-32">
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
              {...register("nombre", { required: true })}
                placeholder="Nombre"
                className="h-12 px-3 bg-white rounded-xl"
                type="text"
              />
              <input
              {...register("email", { required: true })}
                placeholder="Correo electrónico"
                className="h-12 px-3 bg-white rounded-xl"
                type="email"
              />
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <input
              {...register("apellido", { required: true })}
                placeholder="Apellido"
                className="h-12 px-3 bg-white rounded-xl"
                type="text"
              />
              <input
              {...register("telefono", { required: true })}
                placeholder="Teléfono"
                className="h-12 px-3 bg-white rounded-xl"
                type="text"
              />
            </div>
          </div>
          <textarea
              {...register("mensaje", { required: true })}
            placeholder="Mensaje..."
            className="w-full h-40 p-3 bg-white rounded-xl"></textarea>
          <button
            className="w-full h-12 text-xl font-medium text-white bg-black cursor-pointer rounded-xl"
            type="submit">
            Enviar
          </button>
        </form>
      </div>
    </main>
  );
}
