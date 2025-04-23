import Link from 'next/link'
import CardPayment from './icons/CardPayment'

export default function PackageCard() {
  return (
    <Link key={2} className='pb-5 overflow-hidden transition-all bg-white group hover:scale-95 max-w-80 rounded-2xl' href="/">
                <img className='w-full transition-all group-hover:scale-110' src="bg-paquete.png" alt="" />
                <p className='pt-5 pl-5 text-2xl font-black tracking-wide text-tertiary'>San Bernardo</p>
                <div className='flex pr-2'>

                <div className='flex flex-col justify-center gap-4'>
                    <p className='pl-5 font-semibold'>Hotelería 2* y 3*</p>
                    <small className='pl-5 text-sm text-gray-600 '>Domingo de pascua en la costa atlantica de San Bernardo</small>
                    <b className='pl-5 font-semibold text-md'>Salida: 17/04/2025</b>
                    <div className='flex flex-col items-center w-full'>
                        <small className='text-xs'>desde</small>
                        <p className='text-[40px] font-bold text-tertiary'>$ 175.000.-</p>
                        <small className='text-xs'>+ $ 5.000.-</small>
                    </div>
                </div>
                <div className='pl-2 border-l border-gray-400 border-dashed'>
                    <ul className='flex flex-col items-center justify-center gap-5 text-xs text-nowrap'>
                        <li className='flex flex-col items-center gap-2'>
                            <CardPayment />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <CardPayment />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <CardPayment />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <CardPayment />
                            <p>Bus semicama</p>
                        </li>
                    </ul>
                </div>
                
                </div>
            </Link>
  )
}
