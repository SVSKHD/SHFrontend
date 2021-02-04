import Layout from "../Components/Layout/Layout" 
import {withRouter} from "next/router"
import {Container,Row,Col,Card,Button,CardBody } from "reactstrap"
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
        <Col xs="12" sm="12" md="6" lg="6">
        <div className="signin">
        <h1 className="display-5">Singin here</h1>
        <Card>
        <CardBody>
        <p>Don't have an account..?</p>
        <Button href="/signup" color="danger">Signup</Button>
        </CardBody>
        </Card>
        {showRedirectMessage()}
        <hr/>
        <SigninComponent/>
       
        </div>
        </Col>
       
       
       
       

        <Col xs="12" sm="12" md="6" lg="6" >
        <div className="authslider">
        <Slider/>
        </div>
        </Col>

        </Row>
        </Container>
    </Layout>
)
}
export default withRouter(Signup)