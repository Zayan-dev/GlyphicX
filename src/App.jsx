import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
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
import Alert from "./components/alert/alertBox";
import ServiceDetail from "./components/services/ServiceDetail";
// import Resources from "./components/resources/resources";

function App() {
  // const [alertInfo, setAlertInfo] = useState({
  //   display: false,
  //   message: "",
  //   type: "",
  // });

  // useEffect(() => {
  //   if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //     setAlertInfo({
  //       display: true,
  //       message:
  //         "It looks like you are using dark mode. For the best experience, please disable it.",
  //       type: "warning",
  //     });
  //     const timer = setTimeout(() => {
  //       setAlertInfo({ display: false, message: "", type: "" });
  //     }, 6000);
  //     return () => clearTimeout(timer);
  //   }
  // }, []);

  return (
    <BrowserRouter>
      {/* <Alert
        display={alertInfo.display}
        message={alertInfo.message}
        type={alertInfo.type}
        onClose={() => setAlertInfo({ display: false, message: "", type: "" })}
      /> */}
      <Navigation />
      <ScrollToTop />
      <CookiesPopup></CookiesPopup>
      <Routes>
        <Route exact path="/" key="hero" element={<Hero></Hero>}></Route>
        <Route exact path="/services" key="service" element={<Service></Service>}></Route>
        <Route exact path="/services/:detail" key="service" element={<ServiceDetail/>}></Route>
        <Route
          exact
          path="/portfolio"
          key="portfolio"
          element={<Portfolio></Portfolio>}
        ></Route>

        <Route exact path="/contact" key="contact" element={<Contact></Contact>}></Route>
        <Route
          exact
          path="/privacypolicy" key="privacypolicy"
          element={<Privacy></Privacy>}
        ></Route>
        <Route exact path="/termsofservices" key="termsofservices" element={<Tos></Tos>}></Route>
        {/* <Route exact path="/resources" element={<Resources></Resources>}></Route> */}
      </Routes>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App
