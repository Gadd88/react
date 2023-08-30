import { useContext } from "react"
import { RecetasContext } from "../context/RecetasContext"

const Recetas = () => {

    const {recetas} = useContext(RecetasContext)
  return (
    <div>
        <h2>Recetas</h2>
        <ul>
            {
                recetas
                ? recetas.map(receta=>(
                    <li
                        key={receta.idDrink}
                        >
                            <img src={receta.strDrinkThumb} alt="bebida" style={{width: '150px'}}/>
                            <p><strong>{receta.strDrink}</strong></p>
                    </li>
                    ))
                : <p><strong>No se encontraron recetas</strong></p>
            }
        </ul>
    </div>
  )
}

export default Recetas

/* idDrink: number
strDrink: string
strDrinkThumb: srcURL img */

