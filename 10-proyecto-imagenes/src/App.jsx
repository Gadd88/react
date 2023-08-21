import 'bootswatch/dist/yeti/bootstrap.min.css'
import { useState, useEffect } from 'react'
import Formulario from './components/Formulario'
import ListadoImagenes from './components/ListadoImagenes'

function App() {
  const [busqueda, setBusqueda] = useState('')
  const [imagenes, setImagenes] = useState([])
  const [paginaActual, setPaginaActual] = useState(1)
  const [totalPaginas, setTotalPaginas] = useState(1)

  useEffect(() => {
    
    const consultaApi = async () => {
      if(busqueda==='') return;

      const imgPorPag = 20;

      const api_key = '38956509-c0ee7542ad12c99f03848dd3b';

      const url = `https://pixabay.com/api/?key=${api_key}&q=${busqueda}&per_page=${imgPorPag}`;

      const respuesta = await fetch(url);

      const resultado = await respuesta.json();
      console.log(resultado)
      setImagenes(resultado.hits)
      //calcular paginacion
      const calcularPaginas = Math.ceil(resultado.totalHits / imgPorPag);
      setTotalPaginas(calcularPaginas)
    }
    consultaApi();
  }, [busqueda])

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual - 1;

    if(nuevaPaginaActual === 0) return;

    setPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual + 1;

    if(nuevaPaginaActual >= totalPaginas) return;
    setPaginaActual(nuevaPaginaActual)
  }

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
        <button
          type='button'
          className='btn btn-info mr-1'
          onClick={paginaAnterior}>&laquo; Anterior</button>
        <button
          type='button'
          className='btn btn-info mr-1'
          onClick={paginaSiguiente}>Siguiente &laquo;</button>
      </div>
      
    </div>
  )
}

export default App

//
//const url = `https://pixabay.com/api/?key=${api_key}&q=${busqueda}&image_type=photo`;
