import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoRecetas from "./components/ListadoRecetas"
import CategoriasProvider from "./context/CategoriasContext"
import RecetasProvider from "./context/RecetasContext"



function App() {

  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <div className="row">
            <ListadoRecetas/>
          </div>
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  )
}

export default App