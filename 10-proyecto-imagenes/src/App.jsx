import 'bootswatch/dist/yeti/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])

  useEffect(() => {
    
    const consultaApi = async () => {
      if(busqueda==='') return;

      const imgPorPag = 20;

      const api_key = '38956509-c0ee7542ad12c99f03848dd3b';

      const url = `https://pixabay.com/api/?key=${api_key}&q=${busqueda}&per_page=${imgPorPag}`;

      const respuesta = await fetch(url);

      const resultado = await respuesta.json();
      setImagenes(resultado.hits)
    }
    consultaApi();
  }, [busqueda])
  

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imágenes
        </p>
        <Formulario
          setBusqueda={setBusqueda}/>
      </div>
      <div className='row justify-content-center'>
        <ListadoImagenes  
          imagenes={imagenes}/>
      </div>
    </div>
  )
}

export default App

//
//const url = `https://pixabay.com/api/?key=${api_key}&q=${busqueda}&image_type=photo`;
