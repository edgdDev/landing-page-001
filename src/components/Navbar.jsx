import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap"
import MenuIcon from '@mui/icons-material/Menu'

const nav_link = {
    color: 'white',
    fontWeight: 'bold'
}

const NavbarMenu = () => {

    const [isOpen, setValue] = useState(false)
    const [navbar, setNavbar] = useState(false)

    const handleToggle = () => setValue(!isOpen)

    const changeBackgroundNavbar = () => {
        if( window.scrollY >= 745 ) {
            setNavbar(true)
            return
        }
        setNavbar(false)
    }

    window.addEventListener('scroll', changeBackgroundNavbar)

  return (
    <Navbar container='lg' expand='xl' fixed="top" className={ navbar? 'navbar-menu-active' : 'navbar-menu' }>
        <NavbarToggler onClick={ handleToggle }>
            <MenuIcon />
        </NavbarToggler>
        <Collapse isOpen={ isOpen } navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                    <NavLink href="#home" style={ nav_link }>Inicio</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#about" style={ nav_link }>Sobre nosotros</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#cards" style={ nav_link }>Facilidades</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" style={ nav_link }>Contáctanos</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default NavbarMenu