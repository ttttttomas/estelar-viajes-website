'use client'
import { createContext, useState } from 'react'
import axios from 'axios'

export const PackageContext = createContext()

export default function PackageContextProvider({ children }) {
 const baseURL = "https://api-estelar.iwebtecnology.com"

    const getPackages = async () => {
        const response = await axios.get(`${baseURL}/products`)
        return response.data
    }
    const getCartelera = async () => {
        const response = await axios.get(`${baseURL}/cartelera`)
        return response.data
    }
  return (
    <asideContext.Provider value={{ getPackages, getCartelera }}>
      {children}
    </asideContext.Provider>
  )
}