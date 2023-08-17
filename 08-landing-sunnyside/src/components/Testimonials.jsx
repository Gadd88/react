import jennie from '../../src/assets/images/image-jennie.jpg'
import thomas from '../../src/assets/images/image-thomas.jpg'
import emily from '../../src/assets/images/image-emily.jpg'

const Testimonials = () => {
  return (
    <section className="flex flex-col text-center p-28 font-barlow text-[14px] text-very-dark-grayish-blue">
        <h2 className='text-xl text-very-dark-grayish-blue font-fraunces mb-10'>
            Client Testimonials
        </h2>
        <div className="testimonials grid grid-cols-3">
            <article className="testimonial flex flex-col justify-between items-center p-4 transition-all duration-300 hover:scale-110">
                <figure>
                    <img src={emily} alt="" className='rounded-full w-20 mb-5'/>
                </figure>
                <p className='mb-10'>
                    We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>
                <h4 className='text-xl font-fraunces text-black'>Emily R.</h4>
                <p className=''>Marketing Director</p>
            </article>
            <article className="testimonial flex flex-col justify-between items-center p-4 transition-all duration-300 hover:scale-110">
                <figure>
                    <img src={thomas} alt="" className='rounded-full w-20 mb-5'/>
                </figure>
                <p className='mb-10'>
                    Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                </p>
                <div>
                    <h4 className='text-xl font-fraunces text-black'>Thomas S.</h4>
                    <p className=''>Chief Operating Officer</p>
                </div>
            </article>
            <article className="testimonial flex flex-col justify-between items-center p-4 transition-all duration-300 hover:scale-110">
                <figure>
                    <img src={jennie} alt="profile" className='rounded-full w-20 mb-5'/>
                </figure>
                <p className='mb-10 '>
                    Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <div>
                    <h4 className='text-xl font-fraunces text-black'>Jennie F.</h4>
                    <p className=''>Business Owner</p>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Testimonials