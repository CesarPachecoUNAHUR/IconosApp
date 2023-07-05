import React from 'react'
import '../misEstilos/landingPage.css'
import Card from './Card';


const LandingPage = () => {
   
    return (
        <div className='container'>
            <div className='main align-items-center'>
                <section className='main1'>
                  <Card/>
                </section>
                <section class="main2">
                <h3 class="titulo">
                    <strong>Iconos:</strong> <br/>
                    Las mascotas que queremos llevar,
                    compartir y amarlas en donde estemos, 
                    disfutando sus mejores expresiones.
                </h3>    
                </section>
                
            </div>
       
        </div>
     );
}
 
export default LandingPage;