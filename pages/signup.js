import Layout from "../Components/Layout/Layout" 
import {Container,Row,Col} from "reactstrap"
import SigninComponent from "../Components/auth/SigninComponent"
import SignupComponent from "../Components/auth/SignupComponents"
import Slider from "../Components/Carousel"
const Signup = () =>{
return(
    <Layout>
        <Row>
        
        <Container>
        <Col xs="12" lg="6" md="6" sm="12">
        <div className="authslider">
        <Slider/>
        </div>
        </Col>
        </Container>

        <Col>
        <Container>
        <Row>
        <Col xs="12" lg="6" md="6" sm="12">
        <div className="signin">
        <h1 className="display-5">Signup here</h1>
        <SignupComponent/>
        </div>
        </Col>
        
        </Row>
        </Container>
        </Col>
        </Row>
    </Layout>
)
}
export default Signup