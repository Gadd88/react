import burguer from '../../public/images/icon-hamburger.svg'
import { useState } from 'react'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const handleClick = () =>{
        // setVisible(!visible)
        setVisible(prevState=>!prevState)
    }

  return (
    <nav className=''>
        <ul className={`bg-white p-2 w-[329px] h-[305px] absolute left-0 right-0 mx-auto top-[106px] flex-col justify-around items-center after:absolute after:top-[-24px] after:content-[''] after:right-0 after:border-[12px] after:border-t-transparent after:border-l-transparent after:border-b-white after:border-r-white text-dark-grayish-blue text-xl ${visible ? 'flex':'hidden'} `}>
            <li className='cursor-pointer'>About</li>
            <li className='cursor-pointer'>Services</li>
            <li className='cursor-pointer'>Projects</li>
            <li className='cursor-pointer bg-yellow w-[140px] h-[56px] grid place-content-center rounded-full uppercase font-fraunces text-very-dark-desaturated-blue'>Contact</li>
        </ul>
        <div>
            <img src={burguer} alt="menu" className='cursor-pointer' onClick={handleClick}/>
        </div>
    </nav>
  )
}

export default Navbar