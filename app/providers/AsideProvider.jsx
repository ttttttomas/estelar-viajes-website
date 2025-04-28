'use client'
import AsideProvider from '@/app/context/AsideContext'

export default function AsideProviderWrapper({ children }) {
  return (
    <AsideProvider>
      {children}
    </AsideProvider>
  )
}