
const Cancion = ({resultadoLetra}) => {

    if(resultadoLetra.length===0) return null
  
    return (
        <div>
            <h2>Letra</h2>
            <p className="letra">{resultadoLetra}</p>
        </div>
    )
}

export default Cancion