import React, { useEffect, useState } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import listaDeElementos from "./data.json";

import Cards from "./components/Cards";
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

  
function App() {
  const [tarjetas, setTarjetas] = useState([]);

  useEffect(() => {
    const tarjetasGuardadas = localStorage.getItem("tarjetas");
    if (tarjetasGuardadas) {
      setTarjetas(JSON.parse(tarjetasGuardadas));
    }
  }, []);
  
  return (
    <>
      <div className="App">
        <Header/>
        <LandingPage/>
        <Cards
          listaDeElementos= {tarjetas}
        />
        <Footer/>
      </div>
    </>
  );
}

export default App;