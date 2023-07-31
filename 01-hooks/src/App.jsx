import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito from './components/Carrito'
import './App.css'

function App() {
  //Crear listado de productos
  const [productos, setProductos] = useState([
    {id:1, nombre:"Laptop Lenovo", precio:350},
    {id:2, nombre:"Laptop Acer", precio:650},
    {id:3, nombre:"Laptop Hp", precio:800},
    {id:4, nombre:"Laptop RogStrix", precio:1250},
  ])

  // State para un carrito de compras
  const [carrito, setCarrito] = useState([])



  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <>
      <Header 
        titulo='Tienda Virtual' 
      />
      
      <h1>Lista de Productos</h1>
      {
        productos.map(producto =>(
          <Producto
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            setCarrito={setCarrito}
          />
        ))
      }
      <Carrito 
        carrito={carrito} 
        setCarrito={setCarrito}
      />

      <Footer
        fecha={fecha}
      />
    </>
  )
}

export default App
