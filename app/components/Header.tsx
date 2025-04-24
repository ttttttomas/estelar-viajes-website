import Logo from './Logo'
import {montserratAlternates} from '@/app/layout'
import List from './HeaderList'

export default function Header() {
  return (
    <header className='fixed top-0 z-10 flex items-center justify-around w-full gap-20 py-3 backdrop-blur-xs'>
        <div className='flex items-center gap-30'>
            <Logo w="90px"/>
            <div className={`flex flex-col items-center ${montserratAlternates.className}`}>
                <h1 className='text-2xl font-semibold'>Estelar Viajes</h1>
                <small className='font-medium text-black/60 '>by Mundo Terramar S.R.L</small>
            </div>
        </div>
        <List />
    </header>
  )
}
