import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from "./components/Card1"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";


  
function App() {
  //Iniciamos nuestro local storage
  let savedFavorites = JSON.parse(localStorage.getItem('favorites'));
  if(!savedFavorites){
    savedFavorites= []
  }
  
  //Generar un hook de estado vacío con las diferentes imagenes favoritas.
  const [favorites, setFavorites] = useState(savedFavorites);
  
  // Hook useEffect: Sirve para ejecutar alguna funcionalidad cuando hay algun cambio 
  // en alguna variablle/hook/situacion
  useEffect(() => {
    if (savedFavorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites))
    }else {
     localStorage.setItem('favorites', JSON.stringify([]))
    }
  }, [savedFavorites]); 
  
  // Funcion que torna el socio nuevo y lo mete en un array de clientes
  
  const agregarFavoritos = (socio) => {
    setFavorites([...favorites, socio] )
  };
  return (
    <>
      <div className="App">
        <Header/>
        <LandingPage/>
        <Card1/>
        <Footer/>
      </div>
    </>
  );
}

export default App;