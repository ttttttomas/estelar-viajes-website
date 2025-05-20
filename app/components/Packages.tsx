import {assistant} from '@/app/layout'


export default function PackagesSierras() {
  // const response = await axios.get(`https://api-estelar.iwebtecnology.com/products`);
  // const packages = response.data.filter((product) => product.periodo === "Sierra");

  return (
    <section className={`${assistant.className} mx-14`}>
        <h6 className='w-full py-3 text-3xl font-bold tracking-wide text-center rounded-2xl bg-primary'>SIERRAS</h6>
        <div className='flex flex-wrap justify-start gap-10 my-5'>
            {/* {packages.map((product) => (<PackageCard product={product} key={product.ID} />))} */}
        </div>
    </section>
  )
}
