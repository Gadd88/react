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
      //validacion
      if(busqueda==='') return;

      const imgPorPag = 20;
      const api_key = '38956509-c0ee7542ad12c99f03848dd3b';
      const url = `https://pixabay.com/api/?key=${api_key}&q=${busqueda}&per_page=${imgPorPag}&page=${paginaActual}`;
      const respuesta = await fetch(url);
      const resultado = await respuesta.json();
      //cargamos resultado a estado
      setImagenes(resultado.hits)

      //calcular paginacion
      const calcularPaginas = Math.ceil(resultado.totalHits / imgPorPag);
      setTotalPaginas(calcularPaginas)
      //volver al top
      const jumbotron = document.querySelector('.jumbotron');
      jumbotron.scrollIntoView({behavior:'smooth'})
    }
    consultaApi();
  }, [busqueda, paginaActual])

  const paginaAnterior = () =>{
    const nuevaPaginaActual = paginaActual - 1;
    //validacion
    if(nuevaPaginaActual === 0) return;
    setPaginaActual(nuevaPaginaActual);
  }

  const paginaSiguiente = () =>{
    const nuevaPaginaActual = paginaActual + 1;
    //validacion
    if(nuevaPaginaActual > totalPaginas) return;
    setPaginaActual(nuevaPaginaActual)
  }

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imágenes
        </p>
        <Formulario
          setBusqueda={setBusqueda}
          setPaginaActual={setPaginaActual}/>
      </div>
      <div className='row justify-content-center'>
        <ListadoImagenes  
          imagenes={imagenes}/>
        
        {
          (paginaActual===1)
            ? null
            : (<button
                  type='button'
                  className='bbtn btn-info mr-1 mb-2'
                  style={{width:'150px'}}
                  onClick={paginaAnterior}>&laquo; Anterior</button>)
        }
        {
          imagenes.length > 0
            ? (<p className='text-center'>
                Página: {paginaActual} de {totalPaginas} Páginas
              </p>)
            : null
        }
        {
          (paginaActual === totalPaginas)
            ? null
            :(<button
                type='button'
                className='bbtn btn-info mb-2'
                style={{width:'150px'}}
                onClick={paginaSiguiente}>Siguiente &raquo;</button>)
        }
      </div>
      
    </div>
  )
}
export default App
