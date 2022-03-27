import '../styles/globals.css'
import MainContainer from '../components/MainContainer'
import ItemProvider from '../context/items'

function MyApp({ Component, pageProps }) {
  
  return (

  <ItemProvider>
      <MainContainer>
        <Component {...pageProps} />
      </MainContainer>
  </ItemProvider>
)}

export default MyApp
