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
              <NavLink href="/blogs">Blogs</NavLink>
            </NavItem>
           

      {isAuth() && (
      <>
      <div>
      <NavItem className="ISH">
        <ButtonGroup>
        <Button href="/user/crud/blog" size="sm" color="dark">
        <FaEdit size={20}/>
        </Button>

        <Button href="/contact" size="sm" color="dark">
        <FaAddressBook size={20}/>
        </Button>

        </ButtonGroup>
      </NavItem>  
      </div>
      </>
      )}    
          
          
          
          
          </Nav>








          <Nav navbar>
          
          {isAuth() && isAuth().role === 0 && (
          <Button 
              onClick={() => signout(() => Router.replace(`/signin`))}  
              color="danger">
              Signout
          </Button>
          )}

          {isAuth() && isAuth().role === 1 && (
          <Button 
              onClick={() => signout(() => Router.replace(`/signin`))}  
              color="danger">
              Signout
          </Button>
          )}
          
          {!isAuth() && (
          <>
          <UncontrolledDropdown  nav inNavbar>
              <DropdownToggle nav caret>
                New User Click here
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                 <Button outline color="dark" href="/signup">
                 Signup
                 </Button>
                </DropdownItem>
                <DropdownItem>
                  <Button outline color="dark" href="/signin"> 
                  Signin
                  </Button>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            </>
            )}


      {isAuth() && isAuth().role === 0 && (
      <>
      <UncontrolledDropdown nav inNavbar>
          <DropdownToggle nav caret>
          <b>{`${isAuth().name}'s Dashboard`}</b>
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>
             <Button outline color="dark" href="/user">
              Dashboard
             </Button>
            </DropdownItem>
            <DropdownItem>
              <NavLink href="/signin">
              Signin
              </NavLink>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem className="text-danger">
            <Button 
            onClick={() => signout(() => Router.replace(`/signin`))} 
            outline color="danger">
            Signout
            </Button>
            </DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown>
        </>
        )}


           {isAuth() && isAuth().role === 1 && (
            <>
            <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <b>{`${isAuth().name}'s Dashboard`}</b>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                   <Button outline color="dark" href="/admin">
                    Dashboard
                   </Button>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem className="text-danger">
                 
                  <Button 
                  onClick={() => signout(() => Router.replace(`/signin`))} 
                  outline color="danger">
                  Signout
                  </Button>
                    
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              </>
           )}
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
    

    //  
     

    
    //    <React.Fragment>
    //    <Link href="/user">
    //    <ButtonGroup>
    //    <Button 
    //    size="sm" 
    //    outline color ="light"
    //    >
    //      
    //    </Button>
    //    <Button 
    //    
    //    color="danger">
    //    <b>Signout</b>
    //    </Button>              
    //    </ButtonGroup>
    //    </Link>
    //  </React.Fragment>

//     
//      <React.Fragment>
      
//        <Link href="">
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
//        
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