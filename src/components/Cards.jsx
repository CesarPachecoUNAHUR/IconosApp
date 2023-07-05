
import Card from './Card1'

const Cards = ({listaDeElementos}) => {
  return (
    <div className='container d-flex justfy-content-center'>
        <div className='row'>
          {
            listaDeElementos.map( card => (
              <div className='col-lg-4 col-md-4 col-sm-12 mb-8' key={card.id}>
                  <Card
                    elemento ={card}
                />
              </div>
            ))
          }
        </div>
        
        
    </div>
    
  )
}

export default Cards