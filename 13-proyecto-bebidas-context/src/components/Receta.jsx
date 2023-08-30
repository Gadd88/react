

const Receta = ({receta}) => {

    const {strDrink, strDrinkThumb} = receta

    return (
        <div className="col-md-4 mb-3">
            <div className="card">
                <h5 
                    className="card-header"
                    style={{height:'50px'}}>{strDrink}</h5>
                <img 
                    src={strDrinkThumb}
                    className='card-img-top'
                    alt={`Imagen de ${strDrink}`}
                    style={{objectFit:'contain'}} 
                    />
                <div className="card-body">
                    <button
                        type='button'
                        className="btn btn-block btn-primary">
                        Ver Receta
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Receta