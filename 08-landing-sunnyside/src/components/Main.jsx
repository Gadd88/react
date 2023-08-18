import header_mobile from '../../src/assets/images/mobile/image-header.jpg'
import header_desk from '../../src/assets/images/desktop/image-header.jpg'
import arrow from '../../src/assets/images/icon-arrow-down.svg'
import Body from "./Body"


const Main = () => {

  return (
    <main>
        <picture>
            <source media='(max-width:640px)' srcSet={header_mobile}/>
            <source media='(min-width:639px)' srcSet={header_desk}/>
            <img src={header_mobile} alt="background" />
        </picture>
        <h1 className='uppercase font-fraunces absolute text-5xl text-white top-[15%] text-center sm:text-3xl sm:p-10 sm:w-full sm:top-[10%] md:text-5xl lg:text-7xl md:top-[8%] lg:top-[15%]'>We are creative</h1>
        <picture className='absolute top-[30%] left-[50%] sm:top-[25%] md:top-[17%] lg:top-[35%]'>
          <img src={arrow} alt="" />
        </picture>
        <Body/>
    </main>
  )
}

export default Main