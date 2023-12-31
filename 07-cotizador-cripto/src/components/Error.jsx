import styled from '@emotion/styled'

const MensajeError = styled.p`
    background-color: #b7322c;
    padding: 1rem;
    color: #fff;
    font-size: 20px;
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
    border-radius: 10px;
`

const Error = ({mensaje}) => {
  return (
    <MensajeError>
        {mensaje}
    </MensajeError>
  )
}

export default Error