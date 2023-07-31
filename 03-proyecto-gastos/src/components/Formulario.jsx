import {useState} from 'react'
import Error from './Error'
import shortId from 'shortid'

const Formulario = ({agregarNuevoGasto}) => {

    const [nombreGasto, setNombreGasto] = useState('')
    const [cantidadGasto, setCantidadGasto] = useState(0)
    const [error, setError] = useState(false)

    const agregarGasto = e =>{
        e.preventDefault()

        //validar
        if(cantidadGasto<1 || isNaN(cantidadGasto) || nombreGasto.trim()===''){
            setError(true)
            return
        }
        setError(false)
        
        //construir el gasto
        const gasto = {
            nombre: nombreGasto,
            cantidad: cantidadGasto,
            id: shortId.generate()
        }
        
        //pasar el gasto al componente
        agregarNuevoGasto(gasto)

        //resetear el form
        setNombreGasto('')
        setCantidadGasto(0)
    }

  return (
    <form 
        onSubmit={agregarGasto}>
        <h2>Agrega tus gastos aqui</h2>
        {
            error 
            ? <Error mensaje='Ambos campos son obligatorios o Presupuesto incorrecto' />
            : null
        }
        <div className="campo">
            <label>Concepto</label>
            <input 
                type="text" 
                className='u-full-width'
                placeholder='Ej. transporte'
                value={nombreGasto}
                onChange={(e)=>setNombreGasto(e.target.value)}/>
        </div>
        <div className="campo">
            <label>Monto</label>
            <input 
                type="number" 
                className='u-full-width'
                placeholder='Ej. 300'
                value={cantidadGasto}
                onChange={(e)=>setCantidadGasto(Number(e.target.value,10))}/>
        </div>
        <input 
            type="submit" 
            className='button-primary u-full-width'
            value='Agregar gasto'/>
    </form>
  )
}

export default Formulario