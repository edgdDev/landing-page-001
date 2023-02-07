import { useState } from "react";
import { Navbar, NavbarToggler, Collapse, Nav, NavItem, NavLink } from "reactstrap"
import MenuIcon from '@mui/icons-material/Menu'
import logo from '../images/jedlogo3.png'

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
            <MenuIcon style={{ color: '#fff' }} />
        </NavbarToggler>
        <Collapse isOpen={ isOpen } navbar>
            <Nav className="me-auto align-items-center" navbar>
                <NavItem className="ms-5">
                    <img src={ logo } alt='Logo JED' width={190} height={50} className={ navbar? 'logo' : '' } />
                </NavItem>
                <NavItem className="ms-5">
                    <NavLink href="#home">Inicio</NavLink>
                </NavItem>
                <NavItem className="ms-5">
                    <NavLink href="#about" >Sobre nosotros</NavLink>
                </NavItem>
                <NavItem className="ms-5">
                    <NavLink href="#cards" >Facilidades</NavLink>
                </NavItem>
                <NavItem className="ms-5">
                    <NavLink href="#contact" >Contáctanos</NavLink>
                </NavItem>
            </Nav>
        </Collapse>
    </Navbar>
  )
}

export default NavbarMenu