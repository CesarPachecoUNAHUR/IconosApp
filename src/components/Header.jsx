import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Icon from '@mdi/react';
import { mdiCameraIris } from '@mdi/js';
import '../misEstilos/header.css';

const Header = () => {
    return (
      <> <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand  className="logo">
          <Icon path={mdiCameraIris} size={3}  /> 
          <h1>Iconos</h1>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Imagenes cedidas por: <a href="https://unsplash.com/developers"><strong>Unsplash</strong></a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
     
    );
};


export default Header;