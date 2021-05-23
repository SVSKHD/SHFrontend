import React from 'react';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import {APP_NAME} from "../../config"
import FooterSearch from '../blog/footersearch';
import {Card , CardBody , Button , ButtonGroup} from "reactstrap"
import {listBlogsWithCategoriesAndTags} from "../../actions/blog"
import {withRouter} from "next/router"
import {FaInstagram , FaFacebookF , } from "react-icons/fa"
import ContactForm from '../form/contactform';


const Footer = ({blog}) => {

  const year = new Date().getFullYear()

  return (
    <div>
    <div className="FooterText">
      
      <Jumbotron className="Footer" fluid>
      
          <Row>
          <Col xs="12" md="6">
          <div align="center">
          <img height="150" width="150"
           className="rounded-circle img-thumbnail border-warning "
           align="center"
           src="../../static/images/SV.jpg"
           />
           <br/>
           <FooterSearch/>
          <div className="FT">
          <h1 className="display-4">{APP_NAME}</h1>
          <h4 className="display-7">Front Page of Tirupati & Tirumala</h4> 
          </div>
          </div>
         
          </Col>
         

          <Col xs="12" md="6">
          <h5>Our Social handle</h5>
          
             <Button 
             className="ISH" 
             target="_blank" 
             href="https://www.facebook.com/sevenhillstirupati7"
             outline color="light">
               <FaFacebookF size={30}/>
             </Button>


             <Button 
             className="ISH" 
             target="_blank" 
             href="https://www.instagram.com/sevenhillstirupati/"
            outline color="light">
               <FaInstagram size={30}/>
            </Button>

          <hr/>
          <div>
          <ButtonGroup>
            <Button href="/blogs" color="light">Blogs</Button>
            <Button color="light">Contact us</Button>
            <Button color="light">Categories</Button>
            <Button color="light">Tags</Button>
          </ButtonGroup>
         
             
          <br className="mb-5"/>
          <div>
          <h5 className="display-6">All Rights reserved {year}</h5>
          <h5>Made with ❤️️</h5>
          <h6>by</h6>
          <br/>
          <img
          height="50"
          width="50"
          className="rounded-circle img-thumbnail border-warning "
          src="../../static/images/SVSK.png"
          />
          </div>
          </div>
          </Col>


        
          
         
         
          </Row>
         





         

           




        
    
         
          
          <p className="lead"></p>
      
      </Jumbotron>

    </div>
  </div>
  );
};




export default Footer;
