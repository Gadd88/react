import { useState, useEffect } from "react"
import Pregunta from "./components/Pregunta"
import Formulario from "./components/Formulario"
import Listado from "./components/Listado"
import ControlPresupuesto from "./components/ControlPresupuesto"



function App() {
  
  //definir state
  const [presupuesto, setPresupuesto] = useState(0);
  const [resto, setResto] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [crearGasto, setCrearGasto] = useState(false);

  //actualizar el restante
  useEffect(() => {
    //agrega el nuevo presupuesto
    if(crearGasto){
      setGastos([
        ...gastos, 
        gasto
      ])
    }

    //resta del presupuesto
    let presupuestoRestante = resto - gasto.cantidad
    setResto(presupuestoRestante)

    //resetear crearGasto
    setCrearGasto(false)
  }, [gasto, gastos, resto, crearGasto])
  
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
                    setResto={setResto}
                    setMostrarPregunta={setMostrarPregunta}
                    />)
                : (
                  <div className="row">
                    <div className="one-half column">
                      <Formulario 
                        setGasto={setGasto}
                        setCrearGasto={setCrearGasto}/>
                    </div>
                    <div className="one-half column">
                      <Listado 
                        gastos={gastos}
                        />
                      <ControlPresupuesto
                        presupuesto={presupuesto}
                        resto={resto}
                        />
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
