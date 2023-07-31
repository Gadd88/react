
const Pregunta = () => {
  return (
    <>
        <h2>Indica tu presupuesto</h2>
        <form action="">
            <input 
                type="number"
                className="u-full-width"
                placeholder="Coloca tu presupuesto" 
                />
            <input 
                type="submit" 
                className="button-primary u-full-width"
                value='Definir presupuesto'
                />
        </form>
    </>
  )
}

export default Pregunta