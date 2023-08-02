import styled from '@emotion/styled'
import { useState } from 'react'
import { obtenerDiferencia, totalMarca, totalPlan } from '../helper'
import PropTypes from 'prop-types'

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`

const Label = styled.label`
    flex: 0 0 100px;
`

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none;
`

const InputRadio = styled.input`
    margin: 0 1rem;
`

const Boton = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;
    &:hover{
        cursor: pointer;
        background-color: #26c6da;
    }
`

const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 1rem;
    border-radius: 1rem;
`

const Form = ({setResumen, setCargando}) => {

    Form.propTypes = {
        setResumen: PropTypes.func,
        setCargando: PropTypes.func
    }

    const [datos, setDatos] = useState({
        marca:'',
        year:'',
        plan:''
    })

    const [error, setError] = useState(false)

    //extraer los valores del state
    const {marca, year, plan} = datos;

    //leer datos del form y pasar al state
    const obtenerDatos = (e) =>{
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }

    //funcion para submit
    const cotizarSeguro = (e) =>{
        e.preventDefault();

        if(marca.trim()==='' || year.trim==='' || plan.trim()===''){
            setError(true)
            return
        }
        //valor inicial = 5000
        let resultado = 5000;

        //obtener diferencia de años para modiicar el precio 3%
        const diferencia = obtenerDiferencia(year)

        resultado -= ((diferencia * 3) * resultado) / 100;

        //americano +15% - asiatico +5% - europeo +30%
        resultado += totalMarca(marca) * resultado;

        //basico +30% - completo +50%
        resultado += totalPlan(plan) * resultado;

        resultado = parseFloat(resultado).toFixed(2);

        //muestra el spinner
        setCargando(true)

        setTimeout(() =>{
            //quita el spinner
            setCargando(false)
            //carga los datos
            setResumen({
                cotizacion: Number(resultado),
                datos: datos
            })
        }, 2000)


        setDatos({
            marca:'',
            year:'',
            plan:''
        })

    }

  return (
    <form
        onSubmit={cotizarSeguro}>
        {
            error 
                ? <Error>Todos los campos son obligatorios</Error>
                : null
        }
        <Campo>
            <Label>Marca</Label>
            <Select
                name='marca'
                value={marca}
                onChange={obtenerDatos}>
                <option value="">--Seleccione--</option>
                <option value="americano">Americano</option>
                <option value="europeo">Europeo</option>
                <option value="asiatico">Asiatico</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Año</Label>
            <Select
                name='year'
                value={year}
                onChange={obtenerDatos}>
                <option value="">--Seleccione--</option>
                <option value="2012">2012</option>
                <option value="2013">2013</option>
                <option value="2014">2014</option>
                <option value="2015">2015</option>
                <option value="2016">2016</option>
                <option value="2017">2017</option>
                <option value="2018">2018</option>
                <option value="2019">2019</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
            </Select>
        </Campo>
        <Campo>
            <Label>Plan</Label>
            <InputRadio 
                type="radio" 
                name="plan"
                value="basico"
                checked={plan==='basico'}
                onChange={obtenerDatos}
                /> Básico

            <InputRadio 
                type="radio" 
                name="plan"
                value="completo"
                checked={plan==='completo'}
                onChange={obtenerDatos}
                /> Completo
        </Campo>
        <Boton type="submit">Cotizar</Boton>
    </form>
  )
}

export default Form