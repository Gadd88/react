import { useState } from "react"
import Header from "./components/Header"
Header
import styled from '@emotion/styled'
import Form from "./components/Form"

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const ContenedorForm = styled.div`
  background-color: #ffffff;
  padding: 3rem;
`

function App() {
  

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
        />
      <ContenedorForm>
        <Form />
      </ContenedorForm>
    </Contenedor>
  )
}

export default App
