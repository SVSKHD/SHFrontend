import Layout from "../Components/Layout/Layout"
import {Container , Row , Col} from "reactstrap"
import ContactForm from "../Components/form/contactform"
import Seo from "../Components/seo"
const Contact = () =>{
    return(
    <div>
        <Seo
            title={"Contact us here | Sevenhills Tirupati  "}
            mtitle={`Feel Free to contact us | We will Respond in 24 Hours | Sevenhills Tirupati`}
            dcontent={`We will reply you within a day and we will see clear your requests if they are in our reach.`}
            keywords={`Tirupati , Contact us 
            FrontFace of Tirupati and Tirmula , 
            Tirumala Tirupati Balaji , 
            Govinda , Srinivas , Venkatesawara Swamy`}
            canurl={`https://sevenhillstirupati.com/contact`}
            />
        <Layout>
            <Container fluid={true}>
               <Row>
                   
                   <Col xs="12" sm="12" lg="6" md="6">
                   <div align="center">
                    <img height="300" width="300"
                    className="rounded-circle img-thumbnail border-warning "
                    align="center"
                    src="../../static/images/SV.jpg"
                    />
                    <div align="center">
                    <div className="INH">
                    <h1 className="IHT">SevenHills Tirupati</h1>
                    <div className="IHSUB">
                    <h2>Front page of Tirupati and Tirumala</h2>
                    </div>
                    </div>
                    </div>
                    </div>
                   </Col>

                   <Col xs="12" sm="12" lg="6" md="6">
                   <h1>Contact Form</h1>
                   <hr/>
                   <ContactForm/>
                   </Col>
               
               </Row>
            </Container>
        </Layout>
    </div>
    )
}
export default Contact