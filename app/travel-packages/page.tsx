import React from 'react'
import { assistant } from '../layout'
import PackageCard from '../components/PackageCard'
import axios from 'axios'

export default async function TravelPackages() {
    const response = await axios.get(`https://api-estelar.iwebtecnology.com/products`);
    const packages = response.data

  return (
    <main>
    <section id="bg">
        <img src="/bg-home1.webp"  alt="background" />
    </section>
    <section className={`${assistant.className} mx-14`}>
      <h6 className='w-full py-3 text-3xl font-bold tracking-wide text-center rounded-2xl bg-primary'>TRAVEL PACKAGES</h6>
      <div className='flex flex-wrap justify-start gap-10 my-5'>
        {packages.map((product) => (<PackageCard product={product} key={product.ID} />))}
      </div>
    </section>
  </main>
  )
}
