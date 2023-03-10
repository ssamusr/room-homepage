import { useContext, useState } from 'react'
import { HeroContext } from '../../context/HeroProvider'
import { Navbar } from '../Menu/Navbar'
import { ButtomLeft } from './ButtomLeft'
import { ButtomRight } from './ButtomRight'
import { IconArrow } from '../Icons'

export function Header () {
  const [index, setIndex] = useState(0)
  const bbdd = useContext(HeroContext)

  return (
    <header className='grid grid-cols-3 grid-rows-[7fr_1fr_8fr] lg:grid-cols-7 lg:grid-rows-[7fr_1fr]'>

      <div className='col-start-1 col-end-4 row-start-1 row-end-3 relative lg:col-start-1 lg:col-end-5 lg:row-start-1 lg:row-end-3'>
        <Navbar />
        <img src={bbdd[index].imgHero} alt={bbdd[index].alt} className='object-cover w-full h-full hidden lg:block' />
        <img src={bbdd[index].imgHeroMobile} alt={bbdd[index].alt} className='object-cover w-full h-full lg:hidden' />
      </div>

      <div className='col-start-3 col-end-4 row-start-2 row-end-3 z-[1] lg:col-start-5 lg:col-end-6 lg:row-start-2 lg:row-end-3'>
        <ButtomLeft index={index} setIndex={setIndex} />

        <ButtomRight index={index} setIndex={setIndex} />
      </div>

      <article className='flex flex-col justify-center items-start gap-6 p-10 col-start-1 col-end-4 row-start-3 row-end-4 lg:px-28 lg:col-start-5 lg:col-end-8 lg:row-start-1 lg:row-end-3'>
        <h1 className='text-3xl font-bold lg:text-4xl'>{bbdd[index].title}</h1>
        <p className='text-base text-dark-gray h-48 lg:h-36'>{bbdd[index].text}</p>
        <button className='flex items-center gap-6 uppercase font-bold tracking-[0.3em] lg:tracking-[0.8em] lg:hover:text-light-gray lg:hover:fill-light-gray'>
          Shop Now
          <span>
            <IconArrow />
          </span>
        </button>
      </article>
    </header>
  )
}
