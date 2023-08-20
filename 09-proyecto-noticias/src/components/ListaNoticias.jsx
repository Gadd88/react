import Noticia from './Noticia'

const ListaNoticias = ({noticias}) => {
  return (
    <div className="row">
            {
                noticias ?
                noticias.map( noticia => (
                    <Noticia
                        key={noticia.url}
                        noticia={noticia}/>
                ))
                : null
            }
    </div>
  )
}

export default ListaNoticias