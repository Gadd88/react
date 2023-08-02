import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { primerMayus } from '../helper'

const Resumen = ({datos}) => {

    Resumen.propTypes = {
        datos: PropTypes.object
    }

    const {marca, year, plan} = datos

    if (marca===''|| year===''|| plan==='') return null
  return (
    <ContenedorResumen>
        <h2>Resumen de Cotización</h2>
        <UnList>
            <li>Marca: {primerMayus(marca)}</li>
            <li>Año: {year}</li>
            <li>Plan: {primerMayus(plan)}</li>
        </UnList>
    </ContenedorResumen>
  )
}

export default Resumen

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`

const UnList = styled.ul`
    text-align: start;
`