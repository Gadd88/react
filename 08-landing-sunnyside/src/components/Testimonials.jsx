import jennie from '../../src/assets/images/image-jennie.jpg'
import thomas from '../../src/assets/images/image-thomas.jpg'
import emily from '../../src/assets/images/image-emily.jpg'
import Testimon from './Testimon'


const Testimonials = () => {
  return (
    <section className="flex flex-col text-center p-15 sm:p-10 md:p-5 font-barlow text-[14px] text-very-dark-grayish-blue">
        <h2 className='text-xl text-very-dark-grayish-blue font-fraunces mb-10'>
            Client Testimonials
        </h2>
        <div className="testimonials grid grid-cols-1 sm:grid-cols-3">
            <Testimon 
                name='Emily R.' 
                position='Marketing Director' 
                text='We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.' 
                pic={emily}/>
            <Testimon 
                name='Jennie F.' 
                position='Business Owner' 
                text='Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!' 
                pic={jennie}/>
            <Testimon 
                name='Thomas S.' 
                position='Chief Operating Officer' 
                text='Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.' 
                pic={thomas}/>
            
        </div>
    </section>
  )
}

export default Testimonials