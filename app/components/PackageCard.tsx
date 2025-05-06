import Link from 'next/link'
import Transport from './icons/Transport'
import Days from './icons/Days'
import Nights from './icons/Nights'
import Des from './icons/Des'

export default function PackageCard() {
  return (
    <Link key={2} className='h-full pb-3 overflow-hidden transition-all bg-white md:group md:hover:scale-95 max-w-80 rounded-2xl' href={'/sierras'}>
                <img className='w-full transition-all group-hover:scale-110' src="/bg-home1mobile.webp" alt="" />
                <p className='pl-5 text-2xl font-black tracking-wide w-max pt-7 text-tertiary'>San Bernardo</p>
                <div className='flex h-full pr-2'>

                <div className='flex flex-col justify-center gap-8'>
                    <p className='pl-5 font-semibold'>Hotelería 2* y 3*</p>
                    <small className='pl-5 text-sm text-gray-600 '>Domingo de pascua en la costa atlantica de San Bernardo</small>
                    <b className='pl-5 font-semibold text-md'>Salida: 17/04/2025</b>
                    <div className='flex flex-col items-center w-full'>
                        <small className='text-xs'>desde</small>
                        <p className='md:text-[40px] text-4xl font-bold text-tertiary'>$ 175.000.-</p>
                        <small className='text-xs'>+ $ 5.000.-</small>
                    </div>
                </div>
                <div className='h-full pl-2 border-l border-gray-400 border-dashed'>
                    <ul className='flex flex-col items-center justify-center gap-5 text-xs text-nowrap'>
                        <li className='flex flex-col items-center gap-2'>
                            <Transport />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <Days />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <Nights />
                            <p>Bus semicama</p>
                        </li>
                        <li className='flex flex-col items-center gap-2'>
                            <Des />
                            <p>Bus semicama</p>
                        </li>
                    </ul>
                </div>
                
                </div>
            </Link>
  )
}
