import styled from '@emotion/styled'
import { useEffect, useState } from 'react'
import useCripto from '../hooks/useCripto'
import useMoneda from '../hooks/useMoneda'
import axios from 'axios'
import Error from './Error'

const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color 0.3s ease;
    &:hover{
        background-color: #326ac0;
        cursor: pointer;
    }
`
const Formulario = ({setDivisa, setCripto}) => {

    //listado de criptos obtenidos de API
    const [listaCriptos, setListaCriptos] = useState([])

    //validacion y error
    const [error, setError] = useState(false)

    const MONEDAS = [
        {codigo: 'USD', nombre: 'Dolar de Estados Unidos'},
        {codigo: 'MXN', nombre: 'Peso Mexicano'},
        {codigo: 'EUR', nombre: 'Euro'},
        {codigo: 'ARS', nombre: 'Peso Argentino'},
        {codigo: 'GDP', nombre: 'Libra Esterlina'},
        {codigo: 'COL', nombre: 'Peso Colombiano'},
    ]
    //utilizar custom Hook
    const [moneda, SeleccionarMoneda] = useMoneda('Elige tu moneda', '', MONEDAS);

    const [cripto, SeleccionarCripto] = useCripto('Elige tu Criptomoneda', '', listaCriptos)

    //consulta a la API
    useEffect(() => {
      const consultaApi = async () =>{
        const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
        const resultado = await axios.get(url);
        setListaCriptos(resultado.data.Data)
      }
      consultaApi();
    }, [])
    
    const cotizarMoneda = e =>{
        e.preventDefault();

        //validar campos
        if(moneda==='' || cripto===''){
            setError(true)
            return
        }

        //luego de validar
        setError(false)
        setDivisa(moneda)
        setCripto(cripto)
    }

  return (
    <form
        onSubmit={cotizarMoneda}
    >
        {
            error
            ? <Error mensaje='Todos los campos son obligatorios'/>
            : null
        }
        <SeleccionarMoneda />

        <SeleccionarCripto/>
        <Boton
            type='submit'
            value='Calcular'
        />
    </form>
  )
}

export default Formulario