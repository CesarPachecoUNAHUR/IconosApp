import React from 'react';
import Icon from '@mdi/react';
import 'react-bootstrap/Container';
import { mdiGithub } from '@mdi/js';
import { mdiLinkedin } from '@mdi/js';
import { mdiFacebook } from '@mdi/js';

import '../misEstilos/footer.css';

function Footer() {
  return (
    <div className='Container'>
      <div className="row footer">
        <div className="col-md-5">
          <div className="icon-container">
            <span className="contact-text">Busquenos en nuestras redes sociales:</span>
            <a href="https://www.facebook.com/cesar.pacheco.9047" target="_blank" rel="noopener noreferrer" className="icon-link">
              <Icon path={mdiFacebook} size={2} />
            </a>
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="icon-link">
              <Icon path={mdiGithub} size={2} />
            </a>
            <a href="https://www.linkedin.com/in/cesar-pacheco-8b429852/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3BTJzb8C7dTwChFOV5h99yzg%3D%3D" target="_blank" rel="noopener noreferrer" className="icon-link">
              <Icon path={mdiLinkedin} size={2} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
