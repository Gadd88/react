import egg from '../../src/assets/images/desktop/image-transform.jpg'
import coup from '../../src/assets/images/desktop/image-stand-out.jpg'
import berry from '../../src/assets/images/desktop/image-graphic-design.jpg'
import orange from '../../src/assets/images/desktop/image-photography.jpg'
import Testimonials from './Testimonials'
import cone_desk from '../../src/assets/images/desktop/image-gallery-cone.jpg'
import milk_desk from '../../src/assets/images/desktop/image-gallery-milkbottles.jpg'
import orange_desk from '../../src/assets/images/desktop/image-gallery-orange.jpg'
import sugar_desk from '../../src/assets/images/desktop/image-gallery-sugarcubes.jpg'
import BodyRow from '../../../04-proyecto-seguros/src/components/BodyRow'
import BodyRow2 from '../../../04-proyecto-seguros/src/components/BodyRow2'


const Body = () => {
  return (
    <section className='font-barlow'>
        <div className="flex w-full">
            <BodyRow 
                title='Transform your brand'
                text='We are a full-service creative agency specializing in helping brands grow fast. 
                Engage your clients through compelling visuals that do most of the marketing for you.'
                img={egg}/>
        </div>
        <div className="w-full flex flex-row-reverse">
            <BodyRow 
                title='Stand out to the right audience'
                text='Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.'
                img={coup}
                />
        </div>
        <div className="w-full flex">
            <BodyRow2
                title='Graphic design'
                text='Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.'
                img={berry}/>
            <BodyRow2
                title='Photography'
                text='Increase your credibility by getting the most stunning, high-quality photos that improve your business image.'
                img={orange}/>
        </div>
        <div className="row4 w-full grid grid-cols-4">
            <img src={cone_desk} alt="" />
            <img src={milk_desk} alt="" />
            <img src={orange_desk} alt="" />
            <img src={sugar_desk} alt="" />
        </div>
        <Testimonials/>
    </section>
  )
}

export default Body