import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import ListaCitas from "./components/ListaCitas"


function App() {

  //citas en localStorage
  let citasIniciales = JSON.parse(localStorage.getItem('citas'));
  if(!citasIniciales){
    citasIniciales = [];
  }

  //arreglo de citas
  const [citas, setCitas] = useState(citasIniciales)
  
  //useEffect para realizar acciones cuando cambia el state
  useEffect(() => {
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(citas))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [citas])
  

  //funcion para ir agregando citas
  const crearCita = (cita) =>{
    setCitas([
      ...citas,
      cita
    ])
  }

  //funcion para eliminar cita por ID
  const eliminarCita = (id) =>{
    const nuevasCitas = citas.filter(cita=> cita.id !== id)
    setCitas(nuevasCitas)
  }

  //Mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas'

  return (
    <>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario 
              crearCita={crearCita}
            />
          </div>
          <div className="one-half column">
            <ListaCitas 
              citas={citas} 
              eliminarCita={eliminarCita}
              titulo={titulo}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
