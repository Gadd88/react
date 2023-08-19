import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaNoticias from "./components/ListaNoticias"


function App() {
  
  const [categoria, setCategoria] = useState('')
  const [noticias, setNoticias] = useState([])

  useEffect(() => {
    const consultarApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5bd1577b0a914e63adaca2cafd488ea8`
      const response = await fetch(url)
      const notis = await response.json();
      setNoticias(notis.articles)
      console.log(noticias)
    }
    consultarApi()

  },[categoria])


  
  
  return (
    <>
      <Header
        titulo='Buscador de Noticias'
        />
      <div className="container white">
        <Formulario setCategoria={setCategoria}/>
        <ListaNoticias noticias={noticias}/>
      </div>
    </>
  )
}

export default App

//ApiKey
//5bd1577b0a914e63adaca2cafd488ea8

//https://newsapi.org/v2/top-headlines/sources?apiKey=5bd1577b0a914e63adaca2cafd488ea8