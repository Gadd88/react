import egg from '../../src/assets/images/desktop/image-transform.jpg'
import coup from '../../src/assets/images/desktop/image-stand-out.jpg'
import berry from '../../src/assets/images/desktop/image-graphic-design.jpg'
import orange from '../../src/assets/images/desktop/image-photography.jpg'
import Testimonials from './Testimonials'


const Body = () => {
  return (
    <section className='font-barlow'>
        <div className="row1 flex justify-between w-full">
            <div className="first w-[50%] p-20 flex flex-col gap-10 items-start justify-center">
                <h2 className='text-5xl font-fraunces'>Transform your brand</h2>
                <p className='text-dark-grayish-blue'>
                    We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <p className='text-2xl uppercase font-fraunces cursor-pointer relative block group'>
                    Learn more
                    <span className="absolute w-full h-2 bg-yellow rounded-full top-6 left-0 opacity-50 group-hover:opacity-100"></span>
                </p>
            </div>
            <div className="first-img w-[50%]">
                <img src={egg} alt="" />
            </div>
        </div>
        <div className="row2 w-full flex">
            <div className="second-img w-[50%]">
                <img src={coup} alt="" />
            </div>
            <div className="first w-[50%] p-20 flex flex-col gap-10 items-start justify-center">
                <h2 className='text-5xl font-fraunces'>Stand out to the right audience</h2>
                <p className='text-dark-grayish-blue'>
                    Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places. 
                </p>
                <p className="text-2xl uppercase font-fraunces cursor-pointer relative block group">
                    Learn more
                    <span className="absolute w-full h-2 bg-soft-red rounded-full top-6 left-0 opacity-50 group-hover:opacity-100"></span>
                </p>
            </div>
        </div>
        <div className="row3 w-full flex">
            <div className="third-img w-[50%] relative">
                <img src={berry} alt="" />
                <div className='text-center w-[350px] flex flex-col gap-8 justify-center absolute opacity-60 left-0 right-0 mx-auto bottom-16'>
                    <h2 className='text-3xl font-fraunces'>Graphic design</h2>
                    <p className='text-center'>
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>
            <div className="third-img w-[50%] relative">
                <img src={orange} alt="" />
                <div className='text-center w-[350px] flex flex-col gap-8 justify-center absolute opacity-60 left-0 right-0 mx-auto bottom-16'>
                    <h2 className='text-3xl font-fraunces'>Photography</h2>
                    <p className=''>
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
        <Testimonials/>
    </section>
  )
}

export default Body