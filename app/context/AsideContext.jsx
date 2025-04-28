'use client'
import { createContext, useState } from 'react'

export const asideContext = createContext()

export default function AsideContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <asideContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </asideContext.Provider>
  )
}