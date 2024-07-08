import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/Navbar"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Service from "./components/services/Service";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route exact path="/" element={<Hero></Hero>}></Route>
        <Route exact path="/services" element={<Service></Service>}></Route>
        <Route exact path="/portfolio" element={<Portfolio></Portfolio>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  )
}

export default App
