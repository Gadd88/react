import { useState } from "react"


const useSelect = (stateInicial, opciones) => {

    const [state, setState] = useState(stateInicial)
    // const [pais, setPais] = useState(paises)

  const SelectNoticias = () => (
    <>
        <select 
            className="browser-default"
            value={state}
            onChange={e=> setState(e.target.value)}
            >
            {
                opciones.map(opcion => (
                    <option
                        key={opcion.value} 
                        value={opcion.value}
                        >
                        {opcion.label}
                    </option>
                ))
            }
        </select>
        {/* <select
            className="browser-default"
            value={pais}
            onChange={e=>setPais(e.target.value)}>
                {
                    paises.map(pais => (
                        <option 
                            value={pais.value}
                            key={pais.value}>
                            {pais.label}
                        </option>
                    ))
                }
        </select> */}
    </>
  )
  return [state, SelectNoticias]
}

export default useSelect