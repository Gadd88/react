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
const useCripto = (label, criptoInicial, listaCriptos) =>{
    //state
    const [cripto, setCripto] = useState(criptoInicial);

    const SeleccionarCripto = () => (
        <>
            <Label>{label}</Label>
            <Select
                onChange={e=>setCripto(e.target.value)}
                value={cripto}
                >
                    <option value="">Seleccione</option>
                {
                    listaCriptos.map(opcion => (
                        <option 
                            key={opcion.CoinInfo.Id}
                            value={opcion.CoinInfo.Name}
                        >
                            {opcion.CoinInfo.FullName}
                        </option>
                    ))
                }
            </Select>
        </>
    );

    //retornar state, interfaz y funcion modificadora
    return [cripto, SeleccionarCripto, setCripto]
}

export default useCripto;