import { useState } from "react"
import Error from "./Error"

const Pregunta = ({setPresupuesto, setRestante}) => {

    //definir el state
    const [cantidad, setCantidad] = useState(0)
    const [error, setError] = useState(false)

    //funcion que captura presupuesto
    const definirPresupuesto = (e) =>{
        let presupuesto = Number(e.target.value, 10);
        setCantidad(presupuesto)
    }

    //onsubmit
    const agregarPresupuesto = (e) =>{
        e.preventDefault();

        //validar
        if(cantidad < 1 || isNaN(cantidad)){
            setError(true)
            return
        }
        
        //si pasa validacion
        setError(false)
        setPresupuesto(cantidad)
        setRestante(cantidad)

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
            action=""
            onSubmit={definirPresupuesto}>
            <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto" 
                onChange={definirPresupuesto}
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