import logo from '../../src/assets/images/logo.svg'
import facebook from '../../src/assets/images/icon-facebook.svg'
import instagram from '../../src/assets/images/icon-instagram.svg'
import pinterest from '../../src/assets/images/icon-pinterest.svg'
import twitter from '../../src/assets/images/icon-twitter.svg'

const Footer = () => {
  return (
    <footer className='flex flex-col bg-dark-moderate-cyan bg-opacity-80 items-center p-10 gap-10'>
        <img src={logo} alt="logo" className='w-[100px] mb-2'/>
        <nav>
            <ul className='flex gap-8 font-barlow text-white'>
                <li className='opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110'>About</li>
                <li className='opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110'>Services</li>
                <li className='opacity-50 hover:opacity-100 cursor-pointer transition-all duration-300 hover:scale-110'>Projects</li>
            </ul>
        </nav>
        <div className="socials flex gap-5 mt-5">
            <img src={facebook} alt="facebook" className='cursor-pointer hover:fill-white transition-all duration-200 hover:scale-125'/>
            <img src={instagram} alt="instagram" className='cursor-pointer hover:fill-white transition-all duration-200 hover:scale-125'/>
            <img src={twitter} alt="twitter" className='cursor-pointer hover:fill-white transition-all duration-200 hover:scale-125'/>
            <img src={pinterest} alt="pinterest" className='cursor-pointer hover:fill-white transition-all duration-200 hover:scale-125'/>
        </div>
        <p>Matias Saade &copy; 2023</p>
    </footer>
  )
}

export default Footer