import { useState } from "react"
import Header from "./components/Header"
Header
import styled from '@emotion/styled'
import Form from "./components/Form"
import Resumen from "./components/Resumen"
import Resultado from "./components/Resultado"
import Spinner from "./components/Spinner"


const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
  border-radius: 1rem;
  opacity: .9;
`

function App() {
  
  const [resumen, setResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  })
  
  const [cargando, setCargando] = useState(false)
  
  const { cotizacion, datos } = resumen



  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
        />
      <ContenedorForm>
        <Form 
          setResumen={setResumen}
          setCargando={setCargando}/>
          {
            cargando ? <Spinner /> : null
          }
          
        <Resumen
          datos={datos}/>
        {
          !cargando ? <Resultado cotizacion={cotizacion}/> : null
        }
        
      </ContenedorForm>
    </Contenedor>
  )
}

export default App
