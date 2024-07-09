import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navigation from "./components/Navigations";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import Resources from "./components/resources/resources";
import ScrollToTop from "./components/scrolltotop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <ScrollToTop />
      <Routes>
        <Route exact path="/" element={<Hero></Hero>}></Route>
        <Route exact path="/services" element={<Service></Service>}></Route>
        <Route exact path="/portfolio" element={<Portfolio></Portfolio>}></Route>
        <Route exact path="/resources" element={<Resources></Resources>}></Route>
        <Route exact path="/contact" element={<Contact></Contact>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
