import Link from 'next/link'
import styles from '../styles/NoFound.module.css'

const NoFound = () => {
  return (

    <div className={styles.no_encontrado}>
        <h1 className="heading">Página no encontrada</h1>

        <Link href="/">Volver al Inicio</Link>
        
    </div>

  )
}

export default NoFound
