
const ListaNoticias = ({noticias}) => {
  return (
    <div>
        <ul>
            {
                noticias ?
                noticias.map( noticia => (
                    <li key={noticia.source.id}>
                        <h2>{noticia.title}</h2>
                        <a href={noticia.url}>Ver nota completa</a>
                        <p>{noticia.author}</p>
                    </li>
                ))
                : null
            }
        </ul>
    </div>
  )
}

export default ListaNoticias