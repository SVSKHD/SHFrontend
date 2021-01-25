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
  <div >
  <Seo
  title={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  dcontent={`Stay tuned to regular news of the Tirupati and Tirumala , 
  The best services and information are here`}
  keywords={`SevenHills Tirupati , SevenHillsTirupati, Tirumala Tirupati Balaji , Govinda`}
  />
  <Container fluid={true}>
  
  <Row>
    <Col>
    <div className="IN">
    <Inav/>
    <div className="INH">
    <h1 className="IHT">SevenHills Tirupati</h1>
    <div className="IHSUB">
    <h2>Front page of Tirupati and Tirumala</h2>
    </div>
    </div>
    </div>
    {/* cards */}
    
    <div align="center" className="IN">
      <Button href="/blogs" outline color="dark">
        Explore <FaCompass className="load" size={30} />
      </Button>
    </div>
   
    </Col>

    <Col>
    <DesiredCarousel/>
    </Col>
  </Row>

  </Container>

  

  
  </div>
  
  )
}
