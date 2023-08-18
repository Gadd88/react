

const Testimon = ({name, position, text, pic}) => {
  return (
    <article className="testimonial flex flex-col justify-between items-center p-4 transition-all duration-300 hover:scale-110 sm:p-2 sm:justify-start h-full md:p-5 lg:px-10">
        <figure>
            <img src={pic} alt="" className='rounded-full w-20 mb-3 sm:mb-2 lg:mb-4'/>
        </figure>
        <p className='mb-7 sm:mb-5 sm:text-xs'>
            {text}
        </p>
        <h4 className='text-xl font-fraunces text-black'>
            {name}
        </h4>
        <p className=''>
            {position}
        </p>
    </article>
  )
}

export default Testimon