import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {

  const [idReceta, setIdReceta] = useState(null)
  const [modalInfo, setModalInfo] = useState({})

  useEffect(() => {
    if(!idReceta) return
    
    const consultarApi = async () => {
      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idReceta}`
      const respuesta = await axios.get(url)
      setModalInfo(respuesta.data.drinks[0])
    }
    consultarApi()
  }, [idReceta])

  return (
    <ModalContext.Provider
        value={{
            setIdReceta,
            modalInfo
        }}>
        {props.children}
    </ModalContext.Provider>
  )
}

export default ModalProvider

/* 
strAlcoholic
strDrinkThumb
strGlass
strIngredient(n)
strInstructions
strMeasure1
 */