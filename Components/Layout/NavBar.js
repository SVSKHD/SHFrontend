import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
  Button,
  ButtonGroup,
  Container,
  Card,
} from 'reactstrap';
import {APP_NAME} from "../../config"
import {isAuth, signout} from "../../actions/auth"
import Link from "next/link"
import { Router } from 'next/router';
import {FaEdit , FaAddressBook , FaGopuram} from "react-icons/fa"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Container>
       <Navbar dark expand="md">
       <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
       <NavbarToggler outline color="light" onClick={toggle} ><FaGopuram size={30}/></NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
         
         
          {isAuth() && (
          <Nav className="mr-auto">
           <NavItem>
             <ButtonGroup>
             <Button href="/blogs" size="md" color="dark">
             <b>Blogs</b>
             </Button>
              

             <Button href="/user/crud/blog" size="md" color="dark">
             <FaEdit size={20}/>
             </Button>

             <Button href="/contact" size="md" color="dark">
             <FaAddressBook size={20}/>
             </Button>

             </ButtonGroup>
           </NavItem>
          
          </Nav>
          )}
          <br/>
          
          
          <Nav className="ml-auto" navbar>

            {/* signin & signup */}
            {!isAuth() && (
              <React.Fragment>
              <Card>
              <ButtonGroup  size="md">
              <Button href="/signup" color="warning"><b>Signup</b></Button>
              <Button href="/signin" color ="success"><b>Signin</b></Button>
              </ButtonGroup>
              </Card>
              </React.Fragment>
            )}
            

            {isAuth() && isAuth().role === 0 && (
            <React.Fragment>
              <Link href="/user">
              <ButtonGroup>
              <Button 
              size="md" 
              outline color ="light"
              >
                <b>{`${isAuth().name}'s Dashboard`}</b>
              </Button>
              <Button 
              onClick={() => signout(() => Router.replace(`/signin`))} 
              color="danger">
              <b>Signout</b>
              </Button>              
              </ButtonGroup>
              </Link>
            </React.Fragment>
            )}

            {isAuth() && isAuth().role === 1 && (
            <React.Fragment>
             
              <Link href="/admin">
              <ButtonGroup>
              <Button 
              size="md" 
              color ="light"
              >
                <b>
                  {`${isAuth().name}'s Dashboard`}
                </b>
              </Button>
              <Button 
              onClick={() => signout(() => Router.replace(`/signin`))} 
              color="danger">
              <b>Signout</b>
              </Button> 
              </ButtonGroup>
              </Link>
           
            </React.Fragment>
            )}
          </Nav>
  
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
