import { createContext, useState } from "react"

//crear el context
export const CategoriasContext = createContext()

//Provider es donde se encuentran las funciones y state
const CategoriasProvider = (props) => {

    return(
        <CategoriasContext.Provider
            value={{}}>
            {props.children}
        </CategoriasContext.Provider>
    )
}




export default CategoriasProvider