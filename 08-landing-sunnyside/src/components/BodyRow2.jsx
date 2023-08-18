

const BodyRow2 = ({title, img, text}) => {
  return (
    <div className="w-full relative h-[100vh] sm:w-[50%] sm:h-full">
        <img src={img} alt="fruit" className="h-full object-cover sm:object-contain relative "/>
        <div className='absolute bottom-[10px] text-center opacity-70 flex flex-col justify-center items-center gap-3 p-10 sm:justify-start sm:top-3/5 sm:p-7 md:p-10 md:top-1/2'>
            <h2 className='text-2xl font-fraunces sm:text-base lg:text-4xl'>
                {title}
            </h2>
            <p className='text-xl sm:text-xs lg:text-base'>
                {text}
            </p>
        </div>
    </div>
  )
}

export default BodyRow2

//text-center w-[350px] flex flex-col gap-5 justify-center absolute opacity-60 left-0 right-0 mx-auto bottom-6 lg:bottom-16 border-2 h-[100px]

//text-xl lg:text-3xl font-fraunces

//text-sm lg:text-base text-center