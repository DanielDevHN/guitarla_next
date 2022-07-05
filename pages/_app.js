import { useState} from "react"
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const [carrito, setCarrrito] = useState([])

  const agregarCarrito = producto => {
    setCarrrito([...carrito, producto])
  }

  return <Component {...pageProps} 
      carrito={carrito}
      agregarCarrito = {agregarCarrito}
  />
}

export default MyApp
