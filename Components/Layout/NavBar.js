import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarToggler,
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
    <div className="Navbar shadow-lg">
     <div>
      <Navbar dark expand="md">
        <NavbarBrand  href="/">{APP_NAME}</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            
          </Nav>
          <Nav navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
           </Nav>
        </Collapse>
      </Navbar>
    </div>
      
    
    </div>
  );
}

export default NavBar;



{/* <Navbar dark expand="md">
<NavbarBrand href="/">{APP_NAME}</NavbarBrand>
 <Button outline color="light" onClick={toggle} ><FaGopuram size={30}/></Button>
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
//      {!isAuth() && (
//        <React.Fragment>
//        <Card>
//        <ButtonGroup  size="sm">
//        <Button href="/signup" color="warning"><b>Signup</b></Button>
//        <Button href="/signin" color ="success"><b>Signin</b></Button>
//        </ButtonGroup>
//        </Card>
//        </React.Fragment>
//      )}
     

//      {isAuth() && isAuth().role === 0 && (
//      <React.Fragment>
//        <Link href="/user">
//        <ButtonGroup>
//        <Button 
//        size="sm" 
//        outline color ="light"
//        >
//          <b>{`${isAuth().name}'s Dashboard`}</b>
//        </Button>
//        <Button 
//        onClick={() => signout(() => Router.replace(`/signin`))} 
//        color="danger">
//        <b>Signout</b>
//        </Button>              
//        </ButtonGroup>
//        </Link>
//      </React.Fragment>
//      )}

//      {isAuth() && isAuth().role === 1 && (
//      <React.Fragment>
      
//        <Link href="/admin">
//        <ButtonGroup>
//        <Button 
//        size="sm" 
//        color ="light"
//        >
//          <b>
//            {`${isAuth().name}'s Dashboard`}
//          </b>
//        </Button>
//        <Button 
//        onClick={() => signout(() => Router.replace(`/signin`))} 
//        color="danger">
//        <b>Signout</b>
//        </Button> 
//        </ButtonGroup>
//        </Link>
    
//      </React.Fragment>
//      )}
//    </Nav>

//  </Collapse>
// </Navbar> */}