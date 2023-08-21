import 'bootswatch/dist/yeti/bootstrap.min.css'
import Formulario from './components/Formulario'



function App() {
  

  return (
    <div className='container'>
      <div className="jumbotron">
        <p className="lead text-center">
          Buscador de imágenes
        </p>
        <Formulario/>
      </div>
    </div>
  )
}

export default App

//const api_key = '38956509-c0ee7542ad12c99f03848dd3b'
//const URL = `https://pixabay.com/api/?key=${api_key}&q=${parametro}&image_type=photo`
