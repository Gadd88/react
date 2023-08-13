import styled from '@emotion/styled'
import imagen from './assets/imagen.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`
const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`
const Heading = styled.h1`
  color: #fff;
  text-align: left;
  font-weight: bold;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  text-transform: uppercase;
  &::before{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
  &::after{
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }
`

function App() {


  return (
    <Contenedor>
      <div>
        <Imagen 
          src={imagen} 
          alt="imagen criptomonedas" />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>
      </div>
    </Contenedor>
  )
}

export default App
