import '../styles/globals.css'
//import layout stylesheet
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    //we are now wrapping children in app.js with the layout styles
    <Layout>
      {/* the children being brought into layout are all the pages in the pages folder as props */}
        <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
