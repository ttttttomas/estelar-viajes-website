import PackageCard from '@/app/components/PackageCard';
import {assistant} from '@/app/layout'
import axios from 'axios';

export default async function PackagesPage({params}: { params: { periodo: string } }) {
  const p = [{
    ID: 1,
    periodo: "sierra",
    image: "/bg-home1.webp"
  },
  {
    ID: 2,
    periodo: "sierra",
    image: "/bg-home1.webp"
  },{
    ID: 2,
    periodo: "internacionales",
    image: "/bg-home1.webp"
  },
]

const packages = p.filter((product) => product.periodo === params.periodo);
  return (
      <main>
        <section id="bg">
            <img src="/bg-home1.webp"  alt="background" />
        </section>
        <section className={`${assistant.className} mx-14`}>
          <h6 className='w-full py-3 text-3xl font-bold tracking-wide text-center rounded-2xl bg-primary'>{params.periodo}</h6>
          <div className='flex flex-wrap justify-start gap-10 my-5'>
            {packages.map((product) => (<PackageCard product={product} key={product.ID} />))}
          </div>
        </section>
      </main>
    )
  }
  