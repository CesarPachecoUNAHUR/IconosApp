
import Card from './Card1'

const Cards = ({listaDeElementos}) => {
  const eliminarElementoLocalStorage = (id) => {
    const tarjetasGuardadas = localStorage.getItem("tarjetas");
    if (tarjetasGuardadas) {
      const parsedTarjetas = JSON.parse(tarjetasGuardadas);
      const tarjetasActualizadas = parsedTarjetas.filter(
        (tarjetas) => tarjetas.id !== id
      );
      localStorage.setItem("tarjetas", JSON.stringify(tarjetasActualizadas));
    }
  };
  return (
    <div className='container d-flex justfy-content-center'>
        <div className='row'>
          {
            listaDeElementos.map( card => (
              
              <div className='col-lg-4 col-md-4 col-sm-12 mb-8' key={card.id}>
                  
                  <Card
                    elemento ={card}
                    
                  />
                  <div className="d-flex justify-content-center my-4">
                    <button
                      className="btn btn-outline-secondary"
                      onClick={() => eliminarElementoLocalStorage(card.id)}
                    >
                      Sacar Icono
                    </button>
                  </div>
              </div>
              
            ))
          }
        </div>
        
        
    </div>
    
  )
}

export default Cards