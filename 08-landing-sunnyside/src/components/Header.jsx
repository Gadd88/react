import logo from '../../public/images/logo.svg'
import Navbar from './Navbar'


const Header = () => {
  return (
    <header className='font-barlow absolute w-full px-6 pt-8 flex justify-between'>
        <img src={logo} alt="" />
        <Navbar/>
    </header>
  )
}

export default Header