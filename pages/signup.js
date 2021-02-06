import Layout from "../Components/Layout/Layout" 
import {Container,Row,Col,Card,CardBody} from "reactstrap"
import SigninComponent from "../Components/auth/SigninComponent"
import SignupComponent from "../Components/auth/SignupComponents"
import DesiredCarousel from "../Components/Carousel"
import { Button } from "reactstrap"
import Seo from "../Components/seo"

const Signup = () =>{
return(
    <Layout>
        
        <Seo
        title={"Signup in To the Top Blog of Tirupati & Tirumala | SevenHillsTirupati"}
        dcontent={`SevenHills Tirupati Signup page open source to many bloggers from
         tirupati and Tirumala and also a feature to upload their showcase in the powerful web platform`}
        keywords={`SevenHillsTirupati , Signup , Tirupati Top Blogs, SevenHillsTirupati Signup page `}
        />

        <Container>
        <div align="center">
        <div className="INH">
        <h1 className="IHT">SevenHills Tirupati</h1>
        <div className="SPG">
        <h2>Front page of Tirupati and Tirumala</h2>
        </div>
        </div>
        </div>
        <Row>
        
        <Col xs="12" lg="6" md="6" sm="12">
        <div className="signin">
        <h1 className="display-5">Signup here</h1>
        <Card>
        <CardBody>
        <p>Already have an account</p>
        <Button href="/signin" color="success">Signin</Button>
        </CardBody>
        </Card>

        <hr/>
        <SignupComponent/>
        </div>
        </Col>
        
        <Col xs="12" lg="6" md="6" sm="12">
        <div className="authslider">
        <DesiredCarousel/>
        </div>
        </Col>
       
        
      
        </Row>
        </Container>
    </Layout>
)
}
export default Signup