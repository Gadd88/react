import { useContext } from "react"
import { RecetasContext } from "../context/RecetasContext"
import Receta from "./Receta"

const ListadoRecetas = () => {

    const {recetas} = useContext(RecetasContext)
  return (
    <div className="row mt-5">
        <h1>Listado</h1>
            {
                recetas
                ? recetas.map(receta=>(
                    <Receta
                        key={receta.idDrink}
                        receta={receta}
                        />
                ))
                : <p><strong>No se encontraron recetas</strong></p>
            }
    </div>
  )
}

export default ListadoRecetas

/* idDrink: number
strDrink: string
strDrinkThumb: srcURL img */

