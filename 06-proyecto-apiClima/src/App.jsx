import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Formulario from './components/Formulario'
import Header from './components/Header'



function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
});

const {ciudad, pais} = busqueda

const [consulta, setConsulta] = useState(false)

useEffect(()=>{
  if(consulta===true){
    console.log(ciudad)
  }

},[ciudad,consulta])

  return (
    <> 
      <Header titulo='Clima React'/>
      <div className='contenedor-form'>
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                busqueda={busqueda}
                setBusqueda={setBusqueda}
                setConsulta={setConsulta}
                />
            </div>
            <div className="col m6 s12">
            </div>
          </div>
        </div>
      </div>
      {/* <Button>Presioname</Button> */}
    </>
  )
}

export default App

//apikey
//https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=3653d5bce8c0ea0f4386f3db4f6f79ac
const Button = styled.button`
  min-width: 130px;
  height: 40px;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  border: 1px solid #000;
  color: #fff;
  background: transparent;
  z-index: 0;
  &:hover:after {
    top: 0;
    left: 0;
  }
  &:after {
    content: "";
    width: 100%;
    z-index: -1;
    position: absolute;
    height: 100%;
    top: 5px;
    left: 5px;
    transition: 0.2s;
    background-color: #6c757d;
  }
`