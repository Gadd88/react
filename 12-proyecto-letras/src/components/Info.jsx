
const Info = ({infoArtista}) => {

    const { strArtistThumb, strGenre, strBiographyES } = infoArtista

    if(Object.keys(infoArtista).length===0) return null;
  return (
    <div className="card border-light">
        <div className="card-header bg-primary text-light font-weight-bold">
            Información Artista
        </div>
        <div className="card-body">
            <img src={strArtistThumb} alt="Logo Artista" />
            <p className="card-text">Género: {strGenre}</p>
            <h2 className="card-text">Biografia: </h2>
            <p className="card-text">{strBiographyES}</p>
            <div>
                <p>Redes Sociales</p>
            </div>
        </div>
    </div>
  )
}

export default Info