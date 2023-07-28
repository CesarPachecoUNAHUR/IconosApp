
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card1 from "./components/Card1"
import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";


  
function App() {
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