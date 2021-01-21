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
  FaUserAlt
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

export default function Home() {
  return (
  <div >
  <Seo
  title={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  dcontent={`Stay tuned to regular news of the Tirupati and Tirumala , 
  The best services and information are here`}
  keywords={`SevenHills Tirupati , SevenHillsTirupati, Tirumala Tirupati Balaji , Govinda`}
  />
  <DesiredCarousel/>
  <hr/>
  <div align="center">
  <Jumbotron className="indexj" fluid>
  <h1 className="display-2" >SevenHills Tirupati</h1>
  <h2 className="display-6">FrontPage of Tirupati & Tirumala</h2>
  </Jumbotron>
  </div>
  
  <div align="center">
    <Button href="/blogs" outline color="dark" size="sm"><b>Explore</b> <FaCompass className="load" size={30}/></Button>
  </div>

  <Container>
  <hr/>
  </Container>

  <Container>
  <Row>
  {/* social Profile */}
  <Col xs="12" lg="3">
  
  <IndexCard
  link1={"https://www.facebook.com/sevenhillstirupati7"}
  link2={"https://www.instagram.com/sevenhillstirupati/"}
  icon1={<FaFacebookF size={25}/>}
  icon2={<FaInstagram size={25}/>}
  icon3={<FaYoutube size={25}/>}
  />
  </Col>

  <Col xs="12" lg="5">
  <Card>
  <CardBody className="ISH">

  {!isAuth() &&(
  <ButtonGroup size="lg">
  <Button href="/signup"  target="_blank" outline color="warning">Signup</Button>
  <Button href="/signin"  target="_blank" outline color="success">Signin</Button>
  </ButtonGroup>
  )}
 
  <ButtonGroup className="ISH" size="lg">
  <Button href="/contact" target="_blank" outline color="dark">Contact</Button>
  <Button href="/youtube" target="_blank" outline color="danger"><FaYoutube size={20}/></Button>
  </ButtonGroup>
  </CardBody>
  </Card>
  </Col>
  
  <Col xs="12" lg="4">
  <Card>
    <CardBody>
      <h5>Signin and share your experinces in the way of Blogs</h5>
    </CardBody>
  </Card>
  </Col>
  

  
  
  </Row>
  <hr/>
  <Row>
    <Col>
    <Card>
    <CardBody>
      <Button className="ISH" size="sm" outline color="dark"><FaUserAlt size={25}/></Button>
     
      <ButtonGroup>
      {isAuth() && isAuth().role===0 && (
        <Link href="/user">
        <Button outline color="dark">{`${isAuth().name}'s Dashboard`}</Button>
        </Link>
      )}
      

      {isAuth() && isAuth().role===1 && (
    
        <Link href="/admin">
        <Button outline color="success">{`${isAuth().name}'s Dashboard`}</Button>
        </Link>
     
      )}
     

      {isAuth() && (
      <Button color="danger" onClick={() => signout(() => Router.replace(`/signin`))}>
       Signout
      </Button>  
      )}
      </ButtonGroup>
      
    </CardBody>
    </Card>
    </Col>
    <Col>
    </Col>
  </Row>
  <hr/>
  </Container>
  

  <div>
  <Container>
  <Row>
  
  <Col>
  <Type/>
  </Col>

  <Col>
  <Card>
    <CardBody>
      <div align="center">
      <img height="150" width="150"
      src="../../static/images/SV.png"
      />
      </div>
    </CardBody>
  </Card>
  </Col>

  </Row>
  </Container>
  </div>
  <hr/>
  <Footer/>
  </div>
  )
}
