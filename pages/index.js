import {Container,Row,Col, Button} from "reactstrap"
import Layout from "../Components/Layout/Layout"
import {APP_NAME,DOMAIN} from "../config"
import {FaFacebookF,FaInstagram} from "react-icons/fa"
import IndexCard from "../Components/IndexCard"
import DesiredCarousel from "../Components/Carousel"
import Seo from "../Components/seo"


export default function Home() {
  return (
  <div >
  <Seo
  title={"SevenHills Tirupati | FrontPage of Tirupati and Tirumala"}
  dcontent={`Stay tuned to regular news of the Tirupati and Tirumala , 
  The best services and information are here`}
  keywords={`SevenHills Tirupati , SevenHillsTirupati, Tirumala Tirupati Balaji , Govinda`}
  
  />
  <div className="slider">
  <hr/>
  <DesiredCarousel/>
  </div>
  <Container>
  <div className="indexlayout">
    <h1 className="display-2">{APP_NAME}</h1>
    <h3>FrontPage of Tirupati and Tirumala</h3>
    <div>
    <IndexCard
    title={<h5>Social Handle</h5>}
    icon1={<FaFacebookF size={25}/>}
    icon2={ <FaInstagram size={25}/>}
    />
    <hr/>
    <h1>Our Youtube Channel</h1>
    <hr/>
    <Row>
      <Col>
      <div className="embed-responsive embed-responsive-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XKXzkdateHk" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      
      </Col>
      <Col>
      <div className="embed-responsive embed-responsive-16by9">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9shxMMQZWoU" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      </Col>
    </Row>
    <hr/>
  </div>
  </div>
  
  </Container>
  <div>
    
  </div>
  <Layout>
   <h1>Hello</h1>
  </Layout>
  </div>
  )
}
