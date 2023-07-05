import React from 'react'
import Icon from '@mdi/react';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiWhatsapp } from '@mdi/js';

import '../misEstilos/footer.css'

function Footer () {
  return (
   
    <div className='container'>
      <div className="row align-items-center footer">
        <div className="col-md-6 contacto ">
          <span>Contactenos por nuestra redes sociales:</span>
        </div>
        <div className="col-md-2">
          <Icon path={mdiWhatsapp} size={2} />
        </div>
        <div className="col-md-2 align-items-center">
          <Icon path={mdiGithub} size={2} />
        </div>
        <div className="col-md-2">
          <Icon path={mdiLinkedin} size={2} />
        </div>
      </div>
       
    </div>
  )
}

export default Footer