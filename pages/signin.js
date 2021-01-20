import Layout from "../Components/Layout/Layout" 
import {withRouter} from "next/router"
import {Container,Row,Col,Card} from "reactstrap"
import SigninComponent from "../Components/auth/SigninComponent"
import Slider from "../Components/Carousel"



const Signup = ({router}) =>{

     
    const showRedirectMessage = () =>{
        if(router.query.message){
            return <div className="alert alert-dangeer">{router.query.message}</div>
        }else{
            return
        }
    }

    return(
    <Layout>
        <Row>
        <Col>
        <Container>
        <Row>
        <Col>
        </Col>
        <Col xs="12" sm="12" md="6" lg="6">
        <div className="signin">
        <h1 className="display-5">Singin here</h1>
        {showRedirectMessage()}
        <hr/>
        <SigninComponent/>
       
        </div>
        </Col>
       
        </Row>
        </Container>
        </Col>

        <Col xs="12" sm="12" md="6" lg="6" >
        <div className="authslider">
        <Slider/>
        </div>
        </Col>

        </Row>
    </Layout>
)
}
export default withRouter(Signup)