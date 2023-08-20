

const Noticia = ({noticia}) => {
    const {urlToImage, url, title, author, source} = noticia

    const imagen = (urlToImage) 
        ? <div className="card-image">    
            <img 
                src={urlToImage} alt={title}/> 
            <span 
                className="card-title">
                {source.name}
            </span>
        </div>
        : null
    

  return (
    <div className="col s12 m6 l4">
        <div className="card">
            {imagen}
            <div className="card-content">
                <p>{title}</p>
                <p>{author}</p>
            </div>
            <div className="card-action">
                <a 
                    href={url}
                    target='_blank'
                    rel='noreferrer noopener'
                    className="waves-effect waves-light btn">Ver nota completa</a>
            </div>
        </div>
    </div>
  )
}

export default Noticia