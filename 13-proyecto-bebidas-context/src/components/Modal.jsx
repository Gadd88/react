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
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const ModalBox = ({open, setOpen}) => {
    

    const handleClose = () => setOpen(false)

    const {modalInfo} = useContext(ModalContext)

    const {strDrink, strDrinkThumb, strInstructions} = modalInfo

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
                <img 
                    src={strDrinkThumb}
                    className='card-img-top'
                    alt={`Imagen de ${strDrink}`}
                    style={{objectFit:'contain'}} 
                />
                <Typography 
                    id="modal-modal-description" 
                    sx={{ mt: 2 }}
                    >
                    {strInstructions}
                </Typography>
            </Box>
        </Modal>
    )
}

export default ModalBox