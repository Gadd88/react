import { useState, useEffect } from 'react'
import styled from 'styled-components'
import Clima from './components/Clima'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Error from './components/Error'


function App() {

  const [busqueda, setBusqueda] = useState({
    ciudad:'',
    pais:''
});

const {ciudad, pais} = busqueda

const [consulta, setConsulta] = useState(false)

const [resultado, setResultado] = useState({})

const [error, setError] = useState(false)

useEffect(()=>{
  const consultarApi = async() =>{
    if(consulta){
      const appId = '3653d5bce8c0ea0f4386f3db4f6f79ac'
      //obtenemos lat y lon
      const url = `http://api.openweathermap.org/geo/1.0/direct?q=${ciudad},${pais}&limit=1&appid=${appId}`
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      console.log(resultado);
      //consultamos a la otra api usando lat y lon
      const lat = resultado[0].lat;
      const lon = resultado[0].lon;
      const fetchClima = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appId}`)
      const clima = await fetchClima.json();
      
      if(!clima){
        setError(true)
      }else{
        setError(false)
      }
      setResultado(clima)
      setConsulta(false)
    }
  }
  consultarApi();

},[consulta])

let componente;
if(error){
  componente = <Error mensaje='No hay resultados'/>
}else{
  componente = <Clima resultado={resultado}/>
}


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
              {componente}
            </div>
          </div>
        </div>
      </div>
      <Button>Presioname</Button>
    </>
  )
}

export default App

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