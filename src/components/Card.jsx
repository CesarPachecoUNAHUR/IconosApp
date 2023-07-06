import React, {Fragment, useEffect, useState} from "react"
import '../misEstilos/card.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { v4 as uuid } from 'uuid';
import data from "../data.json";


const Card = () => {
  let tarjetasData = data;
  let tarjetasGuardadasLocalStorage = JSON.parse(localStorage.getItem("tarjetas"));
  if (!tarjetasGuardadasLocalStorage) {
    const tarjetasCombinadas = tarjetasData.concat(tarjetasGuardadasLocalStorage);
    
    tarjetasGuardadasLocalStorage=[...tarjetasCombinadas]
  };
  
  const [tarjeta, editarTarjeta] = useState({
        title: "",
        imageSource: "",
        text: ""
    });
    
    const { title, imageSource, text } = tarjeta;
    
    const [error, setError] = useState(false);
    
    const [tarjetasGuardadas, setTarjetasGuardadas] = useState(tarjetasGuardadasLocalStorage);
    
          // Obtener las tarjetas guardadas del almacenamiento local al cargar la página
    
    
    useEffect(() => {
      // Guardar las tarjetas actualizadas en el almacenamiento local cada vez que cambien
      
      localStorage.removeItem('3');
      if(tarjetasGuardadasLocalStorage){
       
        localStorage.setItem("tarjetas", JSON.stringify(tarjetasGuardadas));
      }else{
        localStorage.setItem("tarjetas", JSON.stringify([]))
      }
    }, [tarjetasGuardadas]);

    

    const handleChange = (e) => {
        editarTarjeta({
          ...tarjeta,
          [e.target.name]: e.target.value
        });
    };
    
    const submitForm = (e) => {
        e.preventDefault();
    
        if (title.trim() === "" || text.trim() === "") {
          setError(true);
          return;
        }
    
        setError(false);
    
        const nuevaTarjeta = {
          ...tarjeta,
          id: uuid()
        };
    
        setTarjetasGuardadas([...tarjetasGuardadas, nuevaTarjeta]);
    
        editarTarjeta({
          title: "",
          imageSource: "",
          text: ""
        });
    };
    
    
    // creamos un Hook para guardar la url del gatito
    const [urlGatito, editar]= useState("");
   
    
    // Funcion para consultar API gatitos

   /* Usamos la función de actualización del estado anterior (prevState)
       para asegurarnos de que los otros campos (como "title" y "text") no
       se vean afectados y solo actualizamos el campo "imageSource" con la 
       URL de la imagen.
   */    
    const consultaAPIGatito = async() => {
        try{
        const api = await fetch("https://api.thecatapi.com/v1/images/search")
        const resultado = await api.json();
        const urlImagen = resultado[0].url;
        editarTarjeta((prevState) => ({
            ...prevState, 
            imageSource: urlImagen,
            }));
        editar(resultado[0].url)    
        }catch(error) {
        console.log(error)
        }
    }
    return (
        <>
            <button 
                style={{ display: 'block', margin: '50px' }}
                className="btn btn-outline-secondary " 
                onClick={consultaAPIGatito}
            > Cambiar imagen para tu icono
            </button>
            <br/>
            <div className='card text-center bg-dark animate__animated animate__fadeInUp style="width: 18rem' >
                <div className="overflow">
                    <img src={urlGatito}
                    alt=""
                    className="card-img-bottom "
                    style={{ height: "400px", objectFit: "cover" }} 
                />  
            <br/>
            </div>
            <Form onSubmit={submitForm}>
            <Form.Group >
                <Form.Label>Nombre</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Titulo de tu mascota"
                    name='title'
                    onChange={handleChange}
                    value={title} />
                
                            
            </Form.Group>
            <Form.Group>
                <Form.Label>Decripcion</Form.Label>
                <Form.Control 
                    type="text"
                    placeholder="Decripcion de ese momento magico"
                    name='text'
                    onChange={handleChange}
                    value={text} />
            </Form.Group>
            
            <Button 
              style={{ display: 'block', margin: '10px auto' }}  
              variant="primary" 
              type="submit"
            >
              Crear icono de muestra
            </Button>

            {
            error ?
            <h3 className="text-light"> Completa todos los campos</h3>
            : null
            }
        </Form>
        </div>
         
        </>
  )
}
export default Card