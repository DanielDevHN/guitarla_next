import Image from "next/image"
import Link from "next/link"
import styles from '../styles/Guitarra.module.css'

const Guitarra = ({guitarra}) => {

    const { descripcion, imagen, nombre, precio, url } = guitarra
  return (
    <div className={styles.guitarra}>
        <Image  primary="true" layout='responsive' width={150} height={350}
        src={imagen.url} alt={`Imagen Guitarra ${nombre}`} />
        <div className={styles.contenido}>
            <h3>{nombre}</h3>
            <p className={styles.descripcion}>{descripcion}</p>
            <p className={styles.precio}>${precio}</p>
            <Link href={`/guitarras/${url}`}> 
                <a className={styles.enlace}>
                    Ver Producto
                </a>
            </Link>
        </div>
    </div>
  )
}

export default Guitarra
