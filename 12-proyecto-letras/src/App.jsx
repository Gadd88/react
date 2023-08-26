import { useEffect, useState } from "react";
import Formulario from "./components/Formulario"
import axios from 'axios'
import Cancion from "./components/Cancion";
import Info from "./components/Info";


function App() {

  const [buscarLetra, setBuscarLetra] = useState({});
  const [error, setError] = useState(false);
  const [resultadoLetra, setResultadoLetra] = useState('')
  const [infoArtista, setInfoArtista] = useState('')
  
  useEffect(() => {
    if(Object.keys(buscarLetra).length===0) return; //evitar ejecucion si el objeto viene vacio

    const consultarApiLetra = async () =>{
      const {artista, cancion} = buscarLetra;
      const apikey_audiodb = 'DBCDA'

      const url = `https://api.lyrics.ovh/v1/${artista}/${cancion}`
      const url2 = `https://www.theaudiodb.com/api/v1/json/${apikey_audiodb}/search.php?s=${artista}`
      //usamos PROMISE para ejecutar ambas consultas al mismo tiempo y esperar por ambos resultados.
      const [letra, info] = await Promise.all([
        axios.get(url),
        axios.get(url2)
      ])
      setResultadoLetra(letra.data.lyrics)
      setInfoArtista(info.data.artists[0])

    }
    consultarApiLetra();

  },[buscarLetra, infoArtista]);

  return (
    <>
      <Formulario 
        setBuscarLetra={setBuscarLetra}
        />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Info
              infoArtista={infoArtista}/>
          </div>
          <div className="col-md-6">
            <Cancion 
              resultadoLetra={resultadoLetra}
              />
          </div>
        </div>
      </div>
      <footer>
        powered by <a href="#">Falta una api buena XD</a>
      </footer>
    </>
  )
}

export default App

//Musicmatch api key = 2dec2a041c484c02995d0a3b2ed3ffa9	
//apikey_audiodb = DBCDA
//audiodbapi = https://www.theaudiodb.com/api/v1/json/${apikey_audiodb}/search.php?s=${artista}