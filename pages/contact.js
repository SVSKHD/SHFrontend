import Layout from "../Components/Layout/Layout" 
import {Container,Row,Col} from "reactstrap"
import SigninComponent from "../Components/auth/SigninComponent"
import SignupComponent from "../Components/auth/SignupComponents"
import Slider from "../Components/Carousel"
import ContactForm from "../Components/form/contactform"


const Contact = () =>{
return(
    <Layout>
         <Seo
            title={"Contact us here | Sevenhills Tirupati  "}
            dcontent={`We will reply you within a day and we will see clear your requests if they are in our reach.`}
            keywords={`Tirupati , Contact us 
            FrontFace of Tirupati and Tirmula , 
            Tirumala Tirupati Balaji , 
            Govinda , Srinivas , Venkatesawara Swamy`}
            />
        <Row>
        
        <Container>
            <h2 className="display-3">ContactForm</h2>
            <hr/>
            <ContactForm/>
        </Container>
        </Row>
    </Layout>
)
}
export default Contact