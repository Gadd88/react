import { useState, useEffect } from "react"
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListaNoticias from "./components/ListaNoticias"


function App() {
  
  const [categoria, setCategoria] = useState('')

  useEffect(() => {
    const consultarApi = async () =>{
      const url = `https://newsapi.org/v2/top-headlines?country=ar&category=${categoria}&apiKey=5bd1577b0a914e63adaca2cafd488ea8`
      const response = await fetch(url)
      const noticias = await response.json();
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
      </div>
    </>
  )
}

export default App

//ApiKey
//5bd1577b0a914e63adaca2cafd488ea8

//https://newsapi.org/v2/top-headlines/sources?apiKey=5bd1577b0a914e63adaca2cafd488ea8