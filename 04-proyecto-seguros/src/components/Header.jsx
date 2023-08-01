import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const ContenedorHeader = styled.header`
    background-color: #26c6da;
    padding: 10px;
    font-weight: bold;
    color: #ffffff;
    border-radius: 1rem;
    margin-bottom: .5rem;
    opacity: .8;
`;

const TextoHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`

const Header = ({titulo}) => {

  Header.propTypes = {
    titulo :PropTypes.string
  }
  return (
    <ContenedorHeader>
        <TextoHeader>{titulo}</TextoHeader>
    </ContenedorHeader>
  )
}

export default Header