import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap"
import MenuIcon from '@mui/icons-material/Menu'

const NavbarMenu = () => {

    const [isOpen, setValue] = useState(false);

    const handleToggle = () => setValue(!isOpen)

  return (
    <Navbar container='lg' expand='xl'>
        <NavbarToggler onClick={ handleToggle }>
            <MenuIcon />
        </NavbarToggler>
        <Collapse isOpen={ isOpen } navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="#home">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about">Sobre nosotros</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#cards">Facilidades</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact">Contáctanos</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default NavbarMenu