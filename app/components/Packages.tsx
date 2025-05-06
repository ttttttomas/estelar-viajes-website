import React from 'react'
import {assistant} from '@/app/layout'
import PackageCard from './PackageCard'


export default function Packages() {
  return (
    <section className={`${assistant.className} mx-14`}>
        <h6 className='w-full py-3 text-3xl font-bold tracking-wide text-center rounded-2xl bg-primary'>CORDILLERA</h6>
        <div className='flex flex-wrap justify-start gap-10 my-5'>
            {Array.from({length: 10}, (_, i) => i + 1).map(() => (
                <PackageCard key={2} />
            ))}
        </div>
    </section>
  )
}
