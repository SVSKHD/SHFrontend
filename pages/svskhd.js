import Layout from "../Components/Layout/Layout"
import {Container , Row , Col , ButtonGroup , Button} from "reactstrap"
import ContactForm from "../Components/form/contactform"
import Seo from "../Components/seo"
import {FaWhatsapp , FaFacebookF , FaLink} from "react-icons/fa"


const SVSKHD = () =>{
    return(
    <div>
        <Seo
            title={"SVSKHD : Tech Inside | Sevenhills Tirupati  "}
            mtitle={`We are here to see your need on web development and also on new idea implementations`}
            dcontent={`Contact the page for contributions on content and write ups and you can get featured within the targetted Audience with our help`}
            keywords={`SVSKHD Tech Inside , Tech page from Tirupati , 
            Govinda , Srinivas , Venkatesawara Swamy , Best Allrounder blog from Tirupati`}
            canurl={`https://sevenhillstirupati.com/svskhd`}
            />
        <Layout>
            <Container fluid={true}>
               <Row>
                   
                   <Col xs="12" sm="12" lg="6" md="6">
                   <div align="center">
                    <img height="300" width="300"
                    className="rounded-circle img-thumbnail border-warning "
                    align="center"
                    src="https://www.bsgamer.in/static/media/SVSK.4bdae478.png"
                    />
                    <div align="center">
                    <div className="INH">
                    <h1 className="IHT">SVSKHD | Tech Inside</h1>
                    <div className="IHSUB">
                    <h2>Web Product Development Team</h2>
                    <br/>
                    <ButtonGroup>
                        <Button outline color="success">
                            <a 
                            href="https://api.whatsapp.com/send/?phone=9553419654&text&app_absent=0"
                            target="_blank"
                            >
                            <FaWhatsapp className="text-dark" size={25}/>
                            </a> 
                        </Button>

                        <Button 
                        outline color="dark">
                            <a 
                            href="https://www.facebook.com/SVSKHD"
                            target="_blank"
                            >
                            <FaFacebookF size={25}/>
                            </a>
                        </Button>

                        <Button 
                        outline color="dark">
                            <a 
                            href="https://svskhd.net"
                            target="_blank"
                            >
                            <FaLink className="text-danger" size={25}/>
                            </a>
                        </Button>


                    </ButtonGroup>
                    </div>
                    </div>
                    </div>
                    </div>
                   </Col>

                   <Col xs="12" sm="12" lg="6" md="6">
                   <h1>Contact us</h1>
                   <hr/>
                   <ContactForm/>
                   </Col>
               
               </Row>
            </Container>
        </Layout>
    </div>
    )
}
export default SVSKHD