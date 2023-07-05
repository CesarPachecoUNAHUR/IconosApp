import React from 'react';
import Icon from '@mdi/react';
import { mdiDog } from '@mdi/js';
import '../misEstilos/header.css';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaBeer  } from "@react-icons/all-files/fa/FaBeer";



const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href="#"
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
  </a>
));

const Header = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <div className="container-fluid position-fixed">
          <Icon path={mdiDog} size={3} className="logo" /> 
          <h1 className="logo">Iconos</h1>
          
          <Dropdown className="menu-dropdown">
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
            <FaBeer  />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#">Home</Dropdown.Item>
            <Dropdown.Item href="#">Suscrubirme</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        </div>
      </nav>
    );
};


export default Header;