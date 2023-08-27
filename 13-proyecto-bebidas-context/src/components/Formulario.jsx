import { useContext } from "react"
import { CategoriasContext } from "../context/CategoriasContext"



const Formulario = () => {

    const { categorias } = useContext(CategoriasContext)

    const selectCategoria = (e) => {
        console.log(e.target.value)
    }
  return (
    <form>
        <fieldset className="text-center">
            <legend>Busca bebidas por Categoría o Ingrediente</legend>
        </fieldset>
        <div className="row mt-4">
            <div className="col-md-4">
                <input 
                    type="text" 
                    name='nombre'
                    placeholder="Buscar por ingrediente"
                    className="form-control"/>
            </div>
            <div className="col-md-4">
                <select 
                    name="categoria"
                    className="form-control"
                    onChange={selectCategoria}>
                        <option value="">Selecciona categoria</option>
                        {
                            categorias.map(categoria=>(
                                <option
                                    key={categorias.strCategory} 
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