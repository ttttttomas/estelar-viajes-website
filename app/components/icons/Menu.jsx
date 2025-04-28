'use client'

import { useContext } from "react"
import { asideContext } from "@/app/context/AsideContext"

export default function Menu() {
  const { isOpen, setIsOpen } = useContext(asideContext)

  const handleClick = () => {
    setIsOpen(!isOpen)
    console.log(isOpen)
  }
  return (
    <svg onClick={handleClick} className="cursor-pointer" width="27" height="16" viewBox="0 0 27 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="1" x2="27" y2="1" stroke="black" strokeWidth="2"/>
<line y1="8" x2="27" y2="8" stroke="black" strokeWidth="2"/>
<line y1="15" x2="27" y2="15" stroke="black" strokeWidth="2"/>
</svg>

  )
}
