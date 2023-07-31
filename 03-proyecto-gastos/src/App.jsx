import { useState } from "react"
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"


function App() {
  
  //definir state
  const [presupuesto, setPresupuesto] = useState(0)
  const [restante, setRestante] = useState(0)
  const [mostrarPregunta, setMostrarPregunta] = useState(true)
  const [gastos, setGastos] = useState([])

  //cuando agreguemos nuevo gasto
  const agregarNuevoGasto = (gasto) =>{
    setGastos([...gastos, gasto])
  }

  return (
    <>
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            {
              mostrarPregunta 
                ? (<Pregunta 
                    setPresupuesto={setPresupuesto}
                    setRestante={setRestante}
                    setMostrarPregunta={setMostrarPregunta}
                    />)
                : (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario 
                        presupuesto={presupuesto}
                        setPresupuesto={setPresupuesto}
                        restante={restante}
                        setRestante={setRestante}
                        agregarNuevoGasto={agregarNuevoGasto}/>
                    </div>
                    <div className="one-half column">

                    </div>
                  </div>
                )
            }
          </div>
        </header>
      </div>
    </>
  )
}

export default App
