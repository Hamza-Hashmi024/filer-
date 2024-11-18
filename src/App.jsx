import { BrowserRouter , Routes , Route } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import Contactus from "./Pages/Contactus";
import BusinessServices from "./Pages/BusinessServices";
import TaxTools from "./Components/TaxTools";



const App = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/services" element={<BusinessServices/>}/>
      <Route path="/taxtools" element={<TaxTools/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App


