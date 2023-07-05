import React, {Fragment} from "react"
import '../misEstilos/card.css'


const Card = ({elemento}) => {
  const { title, imageSource, text } = elemento;
  
  return (
    <Fragment>
      
    <div className='card text-center bg-dark animate__animated animate__fadeInUp style="width: 18rem' >
        <div className="overflow">
          <img src={imageSource}
               alt="" 
               className="card-img-bottom "
               style={{ height: "400px", objectFit: "cover"}} 
          />  
        </div>
        
        <div className='card-body text-light'>
            
            <h4 className='card-title'>{title}</h4>
            <p className='card-text text-light'>
              { text ? 
                text 
                :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam fugit dolor voluptates quasi sint quod eum nemo illum mpora totam? Assumenda neque nesciunt dolores tenetur itaque? Quidem explicabo ullam assumenda.'
              }                
            </p>
            
        </div>
        
    </div>
    </Fragment>
  )
}

export default Card