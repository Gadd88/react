import { useState } from "react";
import styled from '@emotion/styled'

const Label = styled.label`
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`

const Select = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    border-radius: 10px;
    -webkit-appearance: none;
    border: none;
    font-size: 1.2rem;
    color: black;
    margin-top: 7px;
    background: #fff;
    option{
        background-color: #fff;
    }
`
const useMoneda = (label, stateInicial, MONEDAS) =>{
    //state
    const [moneda, setMoneda] = useState(stateInicial);

    const SeleccionarMoneda = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e=>setMoneda(e.target.value)}
                value={moneda}
                >
                    <option value="">Seleccione</option>
                {
                    MONEDAS.map(opcion => (
                        <option 
                            key={opcion.codigo}
                            value={opcion.codigo}
                        >
                            {opcion.nombre}
                        </option>
                    ))
                }
            </Select>
        </>
    );

    //retornar state, interfaz y funcion modificadora
    return [moneda, SeleccionarMoneda, setMoneda]
}

export default useMoneda;

