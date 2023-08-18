import burguer from '../../src/assets/images/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () =>{
        // setVisible(!visible)
        setVisible(prevState=>!prevState)
    }

  return (
    <nav className='w-full'>
        <ul className={`${visible ? 'flex':'hidden'} bg-white p-2 w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col justify-around items-center after:absolute after:top-[-24px] after:content-[''] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-dark-grayish-blue text-xl 
        sm:flex sm:flex-row sm:justify-end sm:gap-[20px] sm:after:hidden sm:bg-transparent sm:h-full sm:relative sm:text-white sm:text-sm sm:top-0 sm:w-[450px] sm:p-0
        lg:mr-0`}>
            <li className='cursor-pointer transition-all duration-300 hover:scale-125'>About</li>
            <li className='cursor-pointer transition-all duration-300 hover:scale-125'>Services</li>
            <li className='cursor-pointer transition-all duration-300 hover:scale-125'>Projects</li>
            <li className='cursor-pointer bg-yellow w-[140px] h-[56px] grid place-content-center rounded-full uppercase font-fraunces text-very-dark-desaturated-blue sm:bg-white sm:w-[100px] sm:h-[40px] hover:bg-yellow'>Contact</li>
        </ul>
        <div className='flex justify-end'>
            <img src={burguer} alt="menu" className='cursor-pointer sm:hidden relative' onClick={handleClick}/>
        </div>
    </nav>
  )
}

export default Navbar