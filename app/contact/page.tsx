'use client'

import Logo from "../components/Logo";

export default function ContactPage() {
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("enviado");
    }
    return (
        <main>
        <h1 className="text-3xl font-bold text-center">
            Contáctanos
        </h1>
        <div className="relative flex flex-col items-center justify-center w-full mt-10 mb-20 md:mx-auto bg-primary bg-creamBg md:w-min">
            <div className="absolute -top-10 md:-top-8">
                <Logo w="90px"/>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-3 px-20 pt-20 pb-10 mx-auto md:pb-10">
                <div className="flex flex-col w-full gap-3 md:flex-row md:gap-32">
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <input placeholder="Nombre" className="h-12 px-3 bg-white rounded-xl" type="text" />
                        <input placeholder="Correo electrónico" className="h-12 px-3 bg-white rounded-xl" type="email" />
                    </div>
                    <div className="flex flex-col gap-3 md:w-1/2">
                        <input placeholder="Apellido" className="h-12 px-3 bg-white rounded-xl" type="text" />
                        <input placeholder="Teléfono" className="h-12 px-3 bg-white rounded-xl" type="text" />
                    </div>
                </div>
                <textarea placeholder="Mensaje..." className="w-full h-40 p-3 bg-white rounded-xl">
                </textarea>
                <button className="w-full h-12 text-xl font-medium text-white bg-black rounded-xl" type="submit">Enviar</button>
            </form>
        </div>
        </main>
    )
}

