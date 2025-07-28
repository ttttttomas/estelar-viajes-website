import './globals.css'
import {Montserrat_Alternates, Montserrat,Assistant, Moon_Dance} from "next/font/google"
import { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Wpp from './components/icons/Redes/Wpp'
// import Redes from './components/Redes'
import AsideContextProvider from './context/AsideContext'
import Aside from './components/Aside'
import Link from 'next/link'

export const montserratAlternates = Montserrat_Alternates({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const moonDance = Moon_Dance({
  subsets: ["latin"],
  weight: "400"
});
export const assistant = Assistant({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Estelar Viajes',
  description: 'En Estelar Viajes convertimos tus sueños en destinos. Somos una agencia de turismo dedicada a ofrecer experiencias inolvidables, combinando comodidad, calidad y un servicio personalizado que se adapta a tus necesidades. Desde paquetes turísticos completos hasta asesoramiento en cada detalle, te acompañamos en cada paso para que disfrutes de un viaje sin preocupaciones. ¡Descubrí el mundo con nosotros y viví experiencias estelares!',
  keywords: ["agencias de viajes", "ofertas de viaje viajes baratos" , "paquetes turísticos", "vacaciones todo incluido" , "tours y excursiones", "mejores destinos turísticos",
    "viajes turísticos", "viajes de vacaciones", "viajes de vacaciones", "viajes turísticos", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas",
    "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas",
    "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas", "excursiones turísticas",
  ],
  
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-[#DDECF5] py-32 ${montserrat.className}`}>
        <AsideContextProvider>
        <Header />
        <Aside />
        {children}
        {/* <Redes /> */}
        <Link className='fixed z-10 bottom-5 right-5 rounded-full' target='_blank' href="https://wa.me/+541135587877">
          <Wpp />
        </Link>
        <Footer />
        </AsideContextProvider>
        </body>
    </html>
  )
}
