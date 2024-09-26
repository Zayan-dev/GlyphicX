import { HashRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navigation from "./components/Navigations";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import Privacy from "./components/footer/privacypolicy/Privacy";
import Tos from "./components/footer/terms and services/Tos";
import CookiesPopup from "./components/footer/cookie/CookiesPopup";
// import Resources from "./components/resources/resources";

function App() {
  return (
    <HashRouter>
      <Navigation />
      <ScrollToTop />
      <CookiesPopup></CookiesPopup>
      <Routes>
        <Route exact path="/" element={<Hero></Hero>}></Route>
        <Route exact path="/services" element={<Service></Service>}></Route>
        <Route exact path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
        <Route exact path="/privacypolicy" element={<Privacy></Privacy>}></Route>
        <Route exact path="/termsofservices" element={<Tos></Tos>}></Route>
        {/* <Route exact path="/resources" element={<Resources></Resources>}></Route> */}
      </Routes>
 
      <Footer></Footer>
    </HashRouter>
  );
}

export default App
