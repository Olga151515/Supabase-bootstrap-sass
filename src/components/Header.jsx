import React, {useContext} from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import AppContext from '../context/AppContext'
import {FiLogOut, FiUser} from 'react-icons/fi';
import HeaderProvider from './HeaderProvider';


const Header = () => {
  const {signOut, appUser} = useContext(AppContext)
  return (
   <Navbar bg='primary' variant='dark' expand='lg'>
    <Container className='d-flex align-items-center '> 
      <Link to='/' className='navbar-brand fw-bolder rounded fs-3'> 
        SupaTODO
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className='ms-auto pt-2 pt-lg-0 text-uppercase'>
        <NavLink to='/' className='nav-link rounded bg-success'>
          Home 
        </NavLink>
        <div className='ms-lg-4 d-flex align-items-center gap-2 text-white '>
          
          {appUser &&  <HeaderProvider user={appUser} />}
         
        <Button 
        className='ms-lg-2 mt-3 mt-lg-0 d-flex gap-2 align-items-center' 
        variant='danger'
        onClick={signOut}
        >
          Sign Out
          <FiLogOut />
        </Button>
        </div>
      </Nav>
    </Navbar.Collapse>
    </Container> 
   </Navbar>
  )
}

export default Header