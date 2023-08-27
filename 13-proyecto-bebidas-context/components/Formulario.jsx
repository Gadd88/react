

const Formulario = () => {
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
                    className="form-control">
                        <option value="">Selecciona categoria</option>
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