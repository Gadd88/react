import { useContext } from "react"
import { ModalContext } from "../context/ModalContext"
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 600,
    overflow: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalBox = ({open, setOpen}) => {

    const {modalInfo, setIdReceta, setModalInfo} = useContext(ModalContext)    
    const {strDrink, strDrinkThumb, strInstructions, strIngredient, strMeasure} = modalInfo

    const handleClose = () => {
        setOpen(false)
        setIdReceta(null)
        setModalInfo({})
    }

    const mostrarIngredientes = (modalInfo) => {
        let ingredientes = [];
        for (let i = 1; i < 16; i++) {
            if(modalInfo[`strIngredient${i}`]){
                ingredientes.push(
                    <li> {modalInfo[`strIngredient${i}`]}: {modalInfo[`strMeasure${i}`]}</li>
                )
            }
        }
        return ingredientes
    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
            <Box sx={style}>
                <Typography 
                    id="modal-modal-title" 
                    variant="h6" 
                    component="h2"
                    >
                    {strDrink}
                </Typography>
                <h3 className="mt-4">Instrucciones</h3>
                <p>{strInstructions}</p>
                <img 
                    src={strDrinkThumb}
                    className='img-fluid my-4'
                    alt={`Imagen de ${strDrink}`}
                    style={{objectFit:'contain'}} 
                />
                <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 }}
                    >
                    <h3>Ingredientes y cantidades</h3>
                    <ul style={{listStyle:'none'}}>
                        {
                            mostrarIngredientes(modalInfo)
                        }
                    </ul>
                </Typography>
            </Box>
        </Modal>
    )
}

export default ModalBox