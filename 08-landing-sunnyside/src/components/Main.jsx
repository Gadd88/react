import header_mobile from '../../src/assets/images/mobile/image-header.jpg'
import header_desk from '../../src/assets/images/desktop/image-header.jpg'
import arrow from '../../src/assets/images/icon-arrow-down.svg'



const Main = () => {

  return (
    <main>
        <picture>
            <source media='(max-width:640px)' srcSet={header_mobile}/>
            <source media='(min-width:641px)' srcSet={header_desk}/>
            <img src={header_mobile} alt="background" />
        </picture>
        <picture className='absolute top-[45%] left-[50%]'>
          <img src={arrow} alt="" />
        </picture>

    </main>
  )
}

export default Main