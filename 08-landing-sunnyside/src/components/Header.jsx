import logo from '../../public/images/logo.svg'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='font-barlow absolute w-full px-6 py-8 flex justify-between items-center '>
        <img src={logo} alt="" className='w-full h-full md:w-[300px] md:h-[50px]'/>
        <Navbar/>
    </header>
  )
}

export default Header