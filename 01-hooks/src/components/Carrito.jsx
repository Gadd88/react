import './carrito.css'
import Producto from './Producto'

const Carrito = ({carrito, setCarrito}) => {

  return (
    <div className='carrito'>
        <h2>Tu carrito de compras</h2>
        {
            carrito.length > 0 ? 
            <ul>
                {
                    carrito.map(producto=>(
                        <Producto 
                            key={producto.id}
                            producto={producto}
                            carrito={carrito}
                            setCarrito={setCarrito}
                        />
                    ))
                }
            </ul> : 'No hay productos en tu carrito'
        }
    </div>
  )
}

export default Carrito