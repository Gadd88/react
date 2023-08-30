import { useContext, useState } from "react"
import { CategoriasContext } from "../context/CategoriasContext"
import { RecetasContext } from "../context/RecetasContext"



const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)
    const { setRecetaBuscada, setConsultar } = useContext(RecetasContext)

    const [busqueda, setBusqueda] = useState({
        nombre:'',
        categoria:''
    })
    
    const obtenerDatosReceta = (e) => {
        setBusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const consultarReceta = (e) => {
        e.preventDefault()
        setConsultar(true)
        setRecetaBuscada(busqueda)
    }

  return (
    <form
        onSubmit={consultarReceta}
        >
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
            <div className="col-md-4">
                <input 
                    type="text" 
                    name='nombre'
                    placeholder="Buscar por ingrediente"
                    className="form-control"
                    onChange={obtenerDatosReceta}/>
            </div>
            <div className="col-md-4">
                <select 
                    name="categoria"
                    className="form-control"
                    onChange={obtenerDatosReceta}>
                        <option value="">Selecciona categoria</option>
                        {
                            categorias.map(categoria=>(
                                <option
                                    key={categoria.strCategory} 
                                    value={categoria.strCategory}
                                    >
                                        {categoria.strCategory}
                                </option>
                            ))
                        }
                </select>
            </div>
            <div className="col-md-4">
                <input 
                    type="submit" 
                    value="Buscar Bebidas" />
            </div>
        </div>
    </form>
  )
}

export default Formulario