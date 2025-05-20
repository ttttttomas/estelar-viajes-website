import {assistant} from '@/app/layout';

export default function PackagesPage() {
  return (
      <main>
        <section id="bg">
            <img src="/bg-home1.webp"  alt="background" />
        </section>
        <section className={`${assistant.className} mx-14`}>
          <h6 className='w-full py-3 text-3xl font-bold tracking-wide text-center rounded-2xl bg-primary'>Paquetes</h6>
          <div className='flex flex-wrap justify-start gap-10 my-5'>
            {/* <PeriodosPack /> */}
          </div>
        </section>
      </main>
    )
  }
  