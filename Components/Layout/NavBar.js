import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Button,
  ButtonGroup,
  Container,
  Card,
  CardBody
} from 'reactstrap';
import {APP_NAME} from "../../config"
import {isAuth, signout} from "../../actions/auth"
import Link from "next/link"
import { Router } from 'next/router';
import {FaEdit , FaAddressBook} from "react-icons/fa"

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Container>
       <Navbar dark expand="md">
       <NavbarBrand href="/">{APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
         
         
          <Nav className="mr-auto">
           <NavItem>
             <ButtonGroup>
             <Button href="/blogs" size="sm" color="dark">
             <b>Blogs</b>
             </Button>
              

             <Button href="/user/crud/blog" size="sm" color="dark">
             <FaEdit size={20}/>
             </Button>

             <Button href="/contact" size="sm" color="dark">
             <FaAddressBook size={20}/>
             </Button>

             </ButtonGroup>
           </NavItem>
          
          </Nav>
          <br/>
          
          
          <Nav className="ml-auto" navbar>

            {/* signin & signup */}
            {!isAuth() && (
              <React.Fragment>
              <Card>
              <ButtonGroup  size="sm">
              <Button href="/signup" color="warning"><b>Signup</b></Button>
              <Button href="/signin" color ="success"><b>Signin</b></Button>
              </ButtonGroup>
              </Card>
              </React.Fragment>
            )}
            

            {isAuth() && isAuth().role === 0 && (
            <React.Fragment>
             <Card>
             <ButtonGroup  size="sm">
              <Button outline color="dark"><b>{isAuth().name}</b></Button>
              <Button href="/user" outline color ="dark">{`${isAuth().name}'s Dashboard`}</Button>
            </ButtonGroup>
            </Card>
            </React.Fragment>
            )}

            {isAuth() && isAuth().role === 1 && (
            <React.Fragment>
             <ButtonGroup  size="sm">
              <Button outline color="light"><b>{isAuth().name}</b></Button>
              <Button href="/admin" outline color ="light"><b>{`${isAuth().name}'s Dashboard`}</b></Button>
            </ButtonGroup>
            </React.Fragment>
            )}
            

            {isAuth() && (
              <Button onClick={() => signout(() => Router.replace(`/signin`))} color="danger" size="sm">Signout</Button>
            )}
           
           
          
            
         

   
            
          </Nav>
  
        </Collapse>
      </Navbar>
      </Container>
    </div>
  );
}

export default NavBar;
