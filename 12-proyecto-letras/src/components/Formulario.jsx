import { useState } from "react";

const Formulario = ({setBuscarLetra}) => {

    const [busqueda, setBusqueda] = useState({
        artista:'',
        cancion:'',
    })
    const [error, setError] = useState(false)

    const {artista, cancion} = busqueda
    

    const actualizarBusqueda = (e) =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    //consulta para Api
    const buscarInfo = (e) =>{
        e.preventDefault()
        
        if(artista.trim()==='' || cancion.trim()===''){
            setError(true)
            return
        }
        setError(false)
        setBuscarLetra(busqueda)
        // setBusqueda({
        //     artista:'',
        //     cancion:''
        // })
    }

  return (
    <div className="bg-info">
        <div className="container">
            <div className="row">
                <form
                    className="col card text-white bg-transparent mb-5 pt-5 pb-2"
                    onSubmit={buscarInfo}
                    >
                        {
                            error 
                                ? <p className="alert alert-danger text-center p-2">Todos los campos son obligatorios</p>
                                : null
                        }
                    <fieldset>
                        <legend className="text-center">Buscador de Letras</legend>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Artista</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name='artista'
                                        placeholder='Nombre del Artista'
                                        onChange={actualizarBusqueda}
                                        value={artista}/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Canción</label>
                                    <input 
                                        type="text" 
                                        className="form-control"
                                        name='cancion'
                                        placeholder='Nombre de la canción'
                                        onChange={actualizarBusqueda}
                                        value={cancion}/>
                                </div>
                            </div>
                        </div>
                        <input 
                            type="submit" 
                            value="Buscar"
                            className="btn btn-primary mt-2 float-right"/>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Formulario