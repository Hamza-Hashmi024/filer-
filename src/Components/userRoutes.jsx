import { BrowserRouter , Routes , Route } from "react-router-dom";
import ScrollToTop from '../ScrollToTop';
import Home from "../Pages/Home";
import Aboutus from "../Pages/Aboutus";
import Contactus from "../Pages/Contactus";
import BusinessServices from "../Pages/BusinessServices";
import TaxTools from "../Components/TaxTools";
import NtNStatus from "../Tools/NtNStatus"
import ATLstatus from "../Tools/ATLstatus";
import USALLC from "./Services/USALLC";
import CompanyRegistration from "../Components/Services/CompanyRegistration"
import IncomeTax from "./Services/IncomeTax";

const userRoutes = () => {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/aboutus" element={<Aboutus/>}/>
      <Route path="/contactus" element={<Contactus/>}/>
      <Route path="/services" element={<BusinessServices/>}/>
      <Route path="/taxtools" element={<TaxTools/>}/>
      <Route path="/ntnstatuschecker" element={<NtNStatus/>}/>
      <Route path="/Atlstatus" element={<ATLstatus/>}/>
      <Route path="/company-registration" element={<CompanyRegistration />} />
        <Route path="/income-tax" element={<IncomeTax />} />
        <Route path="/usa-llc" element={<USALLC />} />
    </Routes>
    </BrowserRouter>
  )
}

export default userRoutes
