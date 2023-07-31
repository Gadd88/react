import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import PropTypes from "prop-types";


const Formulario = ({crearCita}) => {

    // crear state de citas
    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false)

    //funcion al escribir en inputs
    const handleChange = (e) =>{
        const input = e.target.name
        const datos = e.target.value
        setCita({...cita, 
            [input]:datos
        })
    }

    //extraer los valores
    const { mascota, propietario, fecha, hora, sintomas } = cita;

    //funcion al clickear en agregar cita
    const handleSubmit = (e) =>{
        e.preventDefault();
        
        // validar inputs
        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === ''){
            setError(true)
            return
        }

        // eliminar mensaje de error
        setError(false)


        // asignar un ID
        cita.id = uuidv4();

        // crear la cita
        crearCita(cita)

        // reiniciar el form, utiliza los values agregados en los inputs
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }



  return (
    <>
        <h2>Crear Cita</h2>
        {
            error ? <p className="alerta-error">Todos los campos son obligatorios</p>: null
        }
        <form 
            action="POST"
            onSubmit={handleSubmit}
        >
            <label htmlFor="">Nombre Mascota</label>
            <input 
                type="text" 
                name='mascota'
                className="u-full-width"
                placeholder="Roco, Draco, Pipo..."
                onChange={handleChange}
                value={mascota}
            />
            <label htmlFor="">Nombre Dueño</label>
            <input 
                type="text" 
                placeholder="Nombre dueño de la mascota..." 
                name='propietario'
                className="u-full-width"
                onChange={handleChange}
                value={propietario}
            />
            <label htmlFor="">Fecha</label>
            <input 
                type="date" 
                name='fecha'
                className="u-full-width"
                onChange={handleChange}
                value={fecha}
            />
            <label htmlFor="">Hora</label>
            <input 
                type="time" 
                name='hora'
                className="u-full-width"
                onChange={handleChange}
                value={hora}
            />
            <label htmlFor="">Síntomas</label>
            <textarea 
                name="sintomas"
                cols="30" 
                rows="10" 
                className="u-full-width"
                onChange={handleChange}
                value={sintomas}
            >

            </textarea>
            <button 
                type="submit" 
                className="u-full-width button-primary"
            >
                    Agregar Cita
            </button>
        </form>
    </>
  )
}

Formulario.propTypes = {
    crearCita: PropTypes.func.isRequired
}

export default Formulario