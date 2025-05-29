import {montserratAlternates} from '@/app/layout'
import List from './HeaderList'
import Menu from './icons/Menu'

export default function Header() {
  return (
    <header className='fixed top-0 z-10 flex items-center justify-around w-full gap-10 px-2 py-3 bg-secondary md:px-10 backdrop-blur-xs'>
      <p className='block xl:hidden'>
        <Menu />
      </p>
        <div className='flex flex-row-reverse items-center justify-between w-full h-full gap-5 xl:px-0 xl:w-auto xl:flex-row md:gap-30'>
            <img src="/logo2.png" width={90} alt="logo" />
            <div className={`flex flex-col items-center ${montserratAlternates.className}`}>
                <h1 className='font-semibold text-md xl:text-2xl'>Estelar Viajes</h1>
                <small className='text-xs font-medium text-nowrap md:text-normal text-black/60 '>by Mundo Terramar S.R.L</small>
            </div>
        </div>
        <List />
    </header>
  )
}
