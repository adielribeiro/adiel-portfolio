import { BrowserRouter } from "react-router-dom"
import Home from "./pages/Home/Home"
import Footer from "./pages/Home/Footer/Footer"


const App = () => {


  return (
    <BrowserRouter>
      <Home />
      <Footer />
    </BrowserRouter>
   
  )
}

export default App
