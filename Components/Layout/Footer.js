import React from 'react';
import { Jumbotron, Container, Row, Col} from 'reactstrap';
import {APP_NAME} from "../../config"
import FooterSearch from '../blog/footersearch';
import {Card , CardBody , Button} from "reactstrap"
import {listBlogsWithCategoriesAndTags} from "../../actions/blog"
import {withRouter} from "next/router"
import {FaInstagram , FaFacebookF , } from "react-icons/fa"
import ContactForm from '../form/contactform';


const Footer = ({blog}) => {

  const year = new Date().getFullYear()

  return (
    <div className="Footer">
      <Jumbotron className="Footer" fluid>
        <Container fluid>
          <Row>
          <Col xs="12" md="4">
          <div className="FT">
          <h1 className="display-4">{APP_NAME}</h1>
          <h4 className="display-7">Front Page of Tirupati & Tirumala</h4> 
          </div>
          </Col>
         
          <Col xs="12" md="4">
          <div align="center">
           <img height="200" width="200"
           className="rounded-circle img-thumbnail border-warning "
           align="center"
           src="../../static/images/SV.jpg"
           />
           </div>
          </Col>
         
          <Col xs="12" md="4">
          <FooterSearch/>
          </Col>
          </Row>
          <hr/>





          <Row>
          <Col xs="12" md="2">
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
             
          </Col>

           <Col xs="12" md="2">
            <h5>Services</h5>


           </Col>
             

           <Col xs="12" md="2">
            
            <Button
            href="/blogs"
            target="_blank" 
            outline color = "light"
            >Categories
            </Button>
         
           </Col>
           
           <Col xs="12" md="2">
           
           <Button 
            href="/blogs"
            outline color = "light"
            >Tags
            </Button>
           
           </Col>

           <Col xs="12" md="2">
           <Button 
            href="/blogs"
            outline color = "light"
            >Blogs
            </Button>

           </Col>

           <Col xs="12" md="2">
           <Button 
            href="/contact"
            outline color = "light"
            >Contact
            </Button>
           </Col>

           




          </Row>
          <hr/>
          <div align="center">
          
          <h5 className="display-6">All Rights reserved {year}</h5>
          <h5>Made with ❤️️</h5>
          <h6>by</h6>
          <img
          height="50"
          width="50"
          className="rounded-circle img-thumbnail border-warning "
          src="../../static/images/SVSK.png"
          />
          </div>
          
          <p className="lead"></p>
        </Container>
      </Jumbotron>
    </div>
  );
};




export default Footer;
