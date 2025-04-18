import './globals.css'
import {Montserrat_Alternates, Montserrat} from "next/font/google"
import { Metadata } from 'next'
import { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

export const montserratAlternates = Montserrat_Alternates({
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
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className={`bg-secondary ${montserrat.className}`}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  )
}
