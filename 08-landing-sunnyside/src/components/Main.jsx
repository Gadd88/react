import header_mobile from '../../public/images/mobile/image-header.jpg'
import header_desk from '../../public/images/desktop/image-header.jpg'




const Main = () => {

  return (
    <main>
        
        <picture>
            <source media='(max-width:640px)' srcSet={header_mobile}/>
            <source media='(min-width:641px)' srcSet={header_desk}/>
            <img src={header_mobile} alt="background" />
        </picture>
    </main>
  )
}

export default Main