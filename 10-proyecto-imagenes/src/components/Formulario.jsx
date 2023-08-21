import { useState } from 'react'
import Error from './Error'

const Formulario = ({setBusqueda}) => {

    const [parametro, setParametro] = useState('')
    const [error, setError] = useState(false)

    const buscarImg = (e) => {
        e.preventDefault()
        
        if(parametro.trim() === ''){
            setError(true)
            return
        }
        setError(false)
        setBusqueda(parametro.trim())
    }
  return (
    <form
        onSubmit={buscarImg}>
        <div className="row">
            <div className="form-group col-md-8">
                <input 
                    type="text" 
                    className="form-control form-control-lg"
                    placeholder="Busca una imagen, ejemplo: computadora, futbol..."
                    onChange={e=>setParametro(e.target.value)}/>
            </div>
            <div className="form-group col-md-4">
                <input 
                    type="submit" 
                    className="btn btn-lg btn-danger btn-block"
                    value="Buscar"/>
            </div>
        </div>
        {
            error
            ? <Error 
                mensaje='Agrega un parámetro de búsqueda' 
                setError={setError}/>
            : null
        }
    </form>
  )
}

export default Formulario