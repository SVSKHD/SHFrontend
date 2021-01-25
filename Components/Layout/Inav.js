import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
  Card,
  ButtonGroup,
} from 'reactstrap';
import {isAuth, signout} from "../../actions/auth"
import Link from "next/link"
import  Router  from 'next/router';

const Inav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="Navbar">
      <Navbar light expand="md">
        
        <NavbarBrand href="/"><img height="100" width="100"
           className="rounded-circle img-thumbnail border-warning "
           align="center"
           src="../../static/images/SV.png"
           />
        </NavbarBrand>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/Blogs">Blogs</NavLink>
            </NavItem>
            
            


           

           
          </Nav>
           
          <Nav className="mr-auto" navbar>
          {!isAuth() && (
            <React.Fragment>
            <Card>
            <ButtonGroup>
            <Button color="warning">
              <NavLink href="/signup"><b>Signup</b></NavLink>
            </Button>

            <Button color="success">
              <NavLink href="/signin"><b>Signin</b></NavLink>
            </Button>
            </ButtonGroup>
            </Card>
            </React.Fragment>
            )}

            {isAuth() && isAuth().role === 0 && (
                    
                    <React.Fragment>
                      <Link href="/user">
                      <Button color ="light"><b>{`${isAuth().name}'s Dashboard`}</b></Button>
                      </Link>
                    </React.Fragment>
            )}

            {isAuth() && isAuth().role === 1 && (
                    
                    <React.Fragment>
                      <Link href="/user">
                      <Button color ="light"><b>{`${isAuth().name}'s Dashboard`}</b></Button>
                      </Link>
                    </React.Fragment>
            )}
            
            {isAuth() && (
                    
                    <React.Fragment>
                      <Button 
                      style={{ cursor: 'pointer' }}
                      onClick={()=>signout(()=>Router.replace(`/`))} 
                      className="ISH" 
                      color ="danger">
                          <b>Signout</b>
                    </Button>
                    </React.Fragment>
            )}

          </Nav>

        </Collapse>
      </Navbar>
    </div>
  );
}

export default Inav;
