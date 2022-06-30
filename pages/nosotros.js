import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'


const Nosotros = () => {
  return (
    <Layout
        pagina='Nosotros'
    >
        <main className="contenedor">
            <h2 className="heading">Nosotros</h2>

            <div className={styles.contenido}>

                <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" 
                alt="Imagen sobre nosotros" />
                <div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper odio, nec facilisis odio. Nullam eu vestibulum leo, 
                        nec imperdiet lacus. Praesent rhoncus eros augue, et rutrum nisi auctor nec. Vivamus tristique leo quis augue sollicitudin, nec 
                        condimentum sem maximus. Sed ac venenatis turpis, id feugiat elit. Aenean tempus consequat leo ac rutrum. Curabitur auctor odio ac 
                        arcu sagittis egestas. Cras ac urna vitae nisl hendrerit efficitur ac sed metus. 
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent et semper odio, nec facilisis odio. Nullam eu vestibulum leo, 
                        nec imperdiet lacus. Praesent rhoncus eros augue, et rutrum nisi auctor nec. Vivamus tristique leo quis augue sollicitudin, nec 
                        condimentum sem maximus. Sed ac venenatis turpis, id feugiat elit. Aenean tempus consequat leo ac rutrum. Curabitur auctor odio ac 
                        arcu sagittis egestas. Cras ac urna vitae nisl hendrerit efficitur ac sed metus. Sed ut est justo. 
                    </p>
                </div>
            </div>
        </main>
    </Layout>
  )
}

export default Nosotros
