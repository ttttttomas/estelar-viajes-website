import './globals.css'
import {Montserrat_Alternates, Montserrat,Assistant, Moon_Dance} from "next/font/google"
import { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Redes from './components/Redes'
import AsideContextProvider from './context/AsideContext'
import Aside from './components/Aside'

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
  description: 'Starter with Tailwind and custom color variables',
  keywords: [],
  
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-secondary py-32 ${montserrat.className}`}>
        <AsideContextProvider>
        <Header />
        <Aside />
        {children}
        <Redes />
        <Footer />
        </AsideContextProvider>
        </body>
    </html>
  )
}
