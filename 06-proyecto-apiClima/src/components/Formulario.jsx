import { useState } from "react"
import 'materialize-css'




const Formulario = ({setBusqueda, busqueda, setConsulta}) => {

    const [error, setError] = useState(false)

    const {ciudad, pais} = busqueda;

    const handleChange = e =>{
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        //validar
        if(ciudad.trim()==='' || pais.trim()===''){
            setError(true)
            return
        }
        setError(false)

    }

  return (
    <form onSubmit={handleSubmit}>
        {
            error 
                ? <p 
                    className="red darken-4 error"
                    >Todos los campos son obligatorios</p>
                : null
        }
        <div className="input-field col s12">
            <input 
                type="text" 
                name='ciudad'
                id='ciudad'
                value={ciudad}
                onChange={handleChange}
                />
            <label htmlFor='ciudad'>Ciudad:</label>
        </div>
        <div className="input-field col s12">
            <select 
                name="pais" 
                id="pais"
                value={pais}
                onChange={handleChange}
                className='browser-default'
                style={{position: 'relative', top:'40px'}}
            >
                <option value='' disabled>Seleccione un país</option>
                <option value="US">Estados Unidos</option>
                <option value="MX">México</option>
                <option value="AR">Argentina</option>
                <option value="CO">Colombia</option>
                <option value="CR">Costa Rica</option>
                <option value="ES">España</option>
                <option value="PE">Perú</option>
            </select>
            <label htmlFor="pais">País: </label>
        </div>
        <div className="input-field col s12" style={{position:'relative', top:'25px'}}>
            <input 
                type="submit" 
                value="Buscar Clima" 
                className="waves-effect waves-light btn-large btn-block yellow accent-4" />
        </div>
    </form>
  )
}

export default Formulario