import {
  Container,
  Row,
  Col, 
  Button, 
  Card,
  CardBody,
  Jumbotron, 
  ButtonGroup
} from "reactstrap"
import Layout from "../Components/Layout/Layout"
import {APP_NAME,DOMAIN} from "../config"
import {
  FaFacebookF,
  FaInstagram , 
  FaBook,
  FaCompass,
  FaYoutube,
  FaUserAlt,
  FaBlog,
  FaSpinner,
  FaGopuram
} from "react-icons/fa"
import IndexCard from "../Components/IndexCard"
import DesiredCarousel from "../Components/Carousel"
import Seo from "../Components/seo"
import Type from "../Components/indexTyped"
import Link from "next/link"
import Carousel2 from "../Components/Carousel2"
import {isAuth, signout} from "../actions/auth"
import  Router  from "next/router"
import Footer from "../Components/Layout/Footer"
import Inav from "../Components/Layout/Inav"


export default function Home() {
  return (
  <div className="indexbackground">
  <Seo
  title={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  mtitle={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  dcontent={`Stay tuned to regular news of the Tirupati and Tirumala , 
  The best services and information are here`}
  canurl={`https://sevenhillstirupati.com`}
  keywords={`SevenHills Tirupati , SevenHillsTirupati, Tirumala Tirupati Balaji , Govinda`}
  ogcontent={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  ogdesc={`Stay tuned to regular news of the Tirupati and Tirumala , 
  The best services and information are here`}
  ogimg={"https://sevenhillstirupati.com/static/images/SV.jpg"}
  ogurl={"https://sevenhillstirupati.com"}
  />
  <Container fluid={true}>
  
  <Row>
    <Col>
    <div className="IN">
    <br/>
    <Inav/>
    <div align="center">
    <div className="INH">
    <h1 className="IHT">SevenHills Tirupati</h1>
    <br/>
    <div className="IHSUB">
    <h2>Front page of Tirupati and Tirumala</h2>
    </div>
    </div>
    </div>
    </div>
    {/* cards */}
    
    <div align="center" className="IN">
      <Button href="/blogs" outline color="dark">
        <b>Explore</b> 
        <FaCompass className="load" size={30} />
      </Button>
    </div>
    <hr/>
    <Row>
    
    
    <div>
    
    <Row>
      
    <Card>
    <CardBody>
    <Row>
    <Col xs="12" sm="12" lg="6" md="6">
    <div align="center">
        <ButtonGroup className="ISH">
          <Button href="https://www.instagram.com/sevenhillstirupati/" outline color="dark"><FaInstagram size={20}/></Button>
          <Button href="https://www.facebook.com/sevenhillstirupati7" outline color="primary"><FaFacebookF size={20}/></Button>
          <Button outline color="danger"><FaYoutube size={20}/></Button>
        </ButtonGroup>
    </div>
    </Col>

    <Col xs="12" sm="12" lg="6" md="6">
    <div align="center">
    <ButtonGroup className="ISH"> 
        <Button outline color="dark"><b>Services</b></Button>
        <Button href="/contact" outline color="dark"><b>Contact</b></Button>
    </ButtonGroup>
    </div>
    </Col>
    </Row>
    </CardBody>
    </Card>
  
    
    
    
    
   </Row>
    
   
    
   
   
   
    </div>
  

   </Row>
    </Col>
    {/* carousel */}
    <Col>
    <Card>
    <CardBody>
    <DesiredCarousel/>
    </CardBody>
    </Card>
    </Col>
  </Row>

  </Container>

  

  
  </div>
  
  )
}
