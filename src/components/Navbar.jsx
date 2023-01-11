import { Grid } from "@mui/material"
import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap"

const NavbarMenu = () => {

    const [isOpen, setValue] = useState(false);

    const handleToggle = () => setValue(!isOpen)

  return (
    <Navbar container='lg' expand='xl'>
        <NavbarToggler onClick={ handleToggle }>
            <i>Toggler</i>
        </NavbarToggler>
        <Collapse isOpen={ isOpen } navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="#">Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Sobre nosotros</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Facilidades</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#">Contáctanos</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default NavbarMenu