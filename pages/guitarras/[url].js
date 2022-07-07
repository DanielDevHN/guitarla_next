import { useState } from "react"
import Image from "next/image"
import Layout from "../../components/Layout"
import styles from '../../styles/Guitarra.module.css'


const Producto = ({guitarra, agregarCarrito}) => {
  
    const [cantidad, setCantidad] = useState(1)
    const { descripcion, imagen, nombre, precio, id } = guitarra[0]

    const handleSubmit = e => {
        e.preventDefault();

        if (cantidad < 1) {
            alert('Cantidad no valida')
            return
        }
        
        //Agregar al carrito
        const guitarraSeleccionada = {
            id,
            imagen: imagen.url,
            nombre,
            precio,
            cantidad
        }

        agregarCarrito(guitarraSeleccionada)
    }
  
    return (
        <Layout
            pagina={`Guitarra ${nombre}`}
        >
            <div className={styles.guitarra}>
                <Image  primary="true" layout='responsive' width={150} height={350}
                src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
                <div className={styles.contenido}>
                    <h3>{nombre}</h3>
                    <p className={styles.descripcion}>{descripcion}</p>
                    <p className={styles.precio}>${precio}</p>

                    <form className={styles.formulario} onSubmit={handleSubmit}>
                        <label className={styles.label}>Cantidad:</label>

                        <select 
                            value={cantidad}
                            onChange={e => setCantidad(parseInt(e.target.value))}
                            className={styles.select}>
                            <option value="0"> -- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                            <option value="9">9</option>
                            <option value="10">10</option>
                        </select>

                        <input
                            type="submit"
                            value="Agregar al carrito"
                        />
                    </form>
                </div>
            </div>
        </Layout>
    )
}


export async function getServerSideProps({query: {url}}) {
    const urlGuitarra = `${process.env.API_URL}/guitarras?url=${url}`
    const respuesta = await fetch(urlGuitarra)
    const guitarra = await respuesta.json()

    return {
        props: {
           guitarra
        }
    }
}



export default Producto