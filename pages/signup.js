import Layout from "../Components/Layout/Layout" 
import {Container,Row,Col} from "reactstrap"
import SigninComponent from "../Components/auth/SigninComponent"
import SignupComponent from "../Components/auth/SignupComponents"
import DesiredCarousel from "../Components/Carousel"
const Signup = () =>{
return(
    <Layout>
        <Container>
        <Row>
        
        <Col xs="12" lg="6" md="6" sm="12">
        <div className="signin">
        <h1 className="display-5">Signup here</h1>
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