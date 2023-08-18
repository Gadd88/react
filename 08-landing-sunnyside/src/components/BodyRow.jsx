

const BodyRow = ({title, text, img, color, flex}) => {
  return (
    <article className={`flex flex-col-reverse sm:${flex ? flex : null}`}>
        <div className="flex flex-col items-center text-center gap-5 p-5 sm:w-1/2 sm:justify-center md:px-10">
            <h2 className="font-fraunces text-4xl sm:text-xl md:text-3xl lg:text-5xl">
                {title}
            </h2>
            <p className="text-very-dark-grayish-blue sm:text-sm md:text-base lg:text-2xl">
                {text}
            </p>
            <p className={`font-fraunces uppercase relative group cursor-pointer sm:text-sm md:text-xl lg:text-2xl`}>
                Learn more
                <span className={`absolute w-full h-[5px] ${color ? color : null} top-5 left-0 rounded-full opacity-50 group-hover:opacity-100 md:top-5 lg:top-7`}></span>
            </p>
        </div>
        <div className="sm:w-1/2">
            <img src={img} alt="" />
        </div>
    </article>
  )
}

export default BodyRow
