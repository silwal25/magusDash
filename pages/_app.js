import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.scss"
import Layout from "../components/Layout/Layout"
import "../styles/node.css"

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
