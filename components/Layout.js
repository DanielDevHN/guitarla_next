import Head from "next/head"

const Layout = ({children, pagina}) => {
  return (
    <div>
        <Head>
            <title>GuitarLA - {pagina}</title>
            <meta name="description" content="Sitio Web de venta de guitarras" />
        </Head>

        {children}
    </div>
  )
}

export default Layout
