
const ListaNoticias = (data) => {
  return (
    <div>
        <ul>
            {
                data.length>0 ?
                data.map( item => (
                    <li key={item.source.id}>
                        <h2>{item.source.name}</h2>
                        <p>{item.source.description}</p>
                    </li>
                ))
                : null
            }
        </ul>
    </div>
  )
}

export default ListaNoticias