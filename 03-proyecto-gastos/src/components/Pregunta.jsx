import { useState } from "react"
import Error from "./Error"
import PropTypes from 'prop-types'


const Pregunta = ({ setPresupuesto, setResto, setMostrarPregunta }) => {

    Pregunta.propTypes = {
        setPresupuesto: PropTypes.func,
        setResto: PropTypes.func,
        setMostrarPregunta: PropTypes.func
    }

    //definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //onsubmit
    const agregarPresupuesto = (e) =>{
        e.preventDefault()

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }
        
        //si pasa validacion
        setError(false)
        setPresupuesto(cantidad)
        setResto(cantidad)
        setMostrarPregunta(false)
    }
  return (
    <>
        <h2>Indica tu presupuesto</h2>
        {
            error 
                ? <Error mensaje='El presupuesto es incorrecto'/> 
                : null
        }
        <form 
            onSubmit={agregarPresupuesto}>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto" 
                onChange={(e)=>setCantidad( parseInt(e.target.value, 10))}
                />
            <input 
                type="submit" 
                className="button-primary u-full-width"
                value='Definir presupuesto'
                />
        </form>
    </>
  )
}

export default Pregunta