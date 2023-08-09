import styled from 'styled-components'

const Frase = ({frase}) => {

    // if(Object.keys(frase).length === 0) return null;

  return (
    <ContenedorFrase>
        <h2>{frase.quote}</h2>
        <p>{frase.author}</p>
    </ContenedorFrase>
  )
}

export default Frase

const ContenedorFrase = styled.div`
    padding: 3rem;
    border-radius: .5rem;
    background-color: #fff;
    max-width: 800px;
    margin-top: 1rem;
    @media (min-width: 992px){
        margin-top: 10rem;
    }
    h2{
        font-family: Arial, Helvetica, sans-serif;
        text-align: center;
        position: relative;
        padding-left: 4rem;
        &::before{
            content:open-quote;
            font-size: 10rem;
            color: black;
            position: absolute;
            left: -1rem;
            top: -2rem;
        }
    }
    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1.6rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`