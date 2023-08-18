

const BodyRow = ({title, text, img, color, reverse }) => {
  return (
    <article className={`flex flex-col-reverse sm:flex-${reverse? reverse : 'row'}`}>
        <div className="flex flex-col items-center text-center gap-5 p-5 sm:w-1/2 sm:justify-center">
            <h2 className="font-fraunces text-4xl sm:text-xl md:text-4xl">
                {title}
            </h2>
            <p className="text-very-dark-grayish-blue sm:text-sm md:text-lg">
                {text}
            </p>
            <p className={`font-fraunces uppercase relative group cursor-pointer sm:text-sm md:text-xl`}>
                Learn more
                <span className={`absolute w-full h-[5px] bg-${color ? color : 'yellow'} top-5 left-0 rounded-full opacity-50 group-hover:opacity-100`}></span>
            </p>
        </div>
        <div className="sm:w-1/2">
            <img src={img} alt="" />
        </div>
    </article>
  )
}

export default BodyRow
