import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className='sticky-top'>
         <Navbar expand="lg" variant="dark" bg="dark"  className='sticky-top'>
        <Container>
          <Link style={{textDecoration:'none'}} to={"/"}><Navbar.Brand>MovieTime</Navbar.Brand></Link>
        </Container>
      </Navbar>

    </div>
  )
}
