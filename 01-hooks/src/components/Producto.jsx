const Producto = ({producto, carrito, setCarrito, productos}) => {

    const {nombre, precio, id} = producto

    //agregar producto al carrito
    const seleccionarProducto = (id) =>{
        const item = productos.filter(producto => producto.id === id)[0];
        setCarrito([...carrito, item])
    }

    //eliminar producto del carrito
    const eliminarProducto = (id) => {
        const productos = carrito.filter(producto => producto.id !== id)
        setCarrito(productos)
    }

  return (
    <>
        <h2>{nombre}</h2>
        <p>${precio}</p>
        {
            productos
            ? (
                <button onClick={()=>seleccionarProducto(id)}>Comprar</button>
            ) : (
                <button onClick={()=>eliminarProducto(id)}>Eliminar</button>
            )
        }
    </>
  )
}

export default Producto