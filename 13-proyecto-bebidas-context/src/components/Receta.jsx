import { useContext, useState } from "react"
import {ModalContext} from "../context/ModalContext"
import ModalBox from "./Modal";

const Receta = ({receta}) => {

    //configuracion modal de materialUI
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true)

    const {setIdReceta, modalInfo} = useContext(ModalContext)
    const {strDrink, strDrinkThumb, idDrink} = receta

    const handleClick = () =>{
        setIdReceta(idDrink)
        handleOpen();
    }

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
                        className="btn btn-block btn-primary"
                        onClick={handleClick}>
                        Ver Receta
                    </button>
                </div>
            </div>
            <ModalBox
                open={open}
                setOpen={setOpen}/>
        </div>
    )
}

export default Receta