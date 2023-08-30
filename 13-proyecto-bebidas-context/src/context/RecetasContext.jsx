import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([])
    const [recetaBuscada, setRecetaBuscada] = useState({
        nombre:'',
        categoria:''
    })
    const [consultar, setConsultar] = useState(false)

    const {nombre, categoria} = recetaBuscada

    useEffect(() => {
        if(consultar){
            const obtenerReceta = async () => {
                if(nombre.length>0 && categoria.length>0){
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                    const respuesta = await axios.get(url)
                    setRecetas(respuesta.data.drinks)
                }else if(nombre.length>0){
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}`
                    const respuesta = await axios.get(url)
                    setRecetas(respuesta.data.drinks)
                }else if(categoria.length>0){
                    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoria}`
                    const respuesta = await axios.get(url)
                    setRecetas(respuesta.data.drinks)
                }
            }
            obtenerReceta()
            setConsultar(false)
        }
    }, [recetaBuscada])
    
    
    

    return(
        <RecetasContext.Provider
            value={{
                setRecetaBuscada,
                recetas,
                setConsultar
            }}>
            {props.children}
        </RecetasContext.Provider>
    )
}

export default RecetasProvider