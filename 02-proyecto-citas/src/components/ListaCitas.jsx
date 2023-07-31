import Cita from "./Cita"

const ListaCitas = ({citas, eliminarCita, titulo}) => {
  return (
    <>
        <h2>{titulo}</h2>
        {
            citas.map((cita)=>(
                <Cita 
                    key={cita.id}
                    cita={cita}
                    eliminarCita={eliminarCita} 
                />
            ))
        }    
    </>
  )
}

export default ListaCitas