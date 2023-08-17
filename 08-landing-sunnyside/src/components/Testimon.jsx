

const Testimon = ({name, position, text, pic}) => {
  return (
    <article className="testimonial flex flex-col justify-between items-center p-4 transition-all duration-300 hover:scale-110">
        <figure>
            <img src={pic} alt="" className='rounded-full w-20 mb-5'/>
        </figure>
        <p className='mb-10'>
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