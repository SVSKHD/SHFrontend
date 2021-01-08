import Layout from '../../../Components/Layout/Layout';
import {Container,Row,Col,CardBody} from "reactstrap"
import Category from '../../../Components/crud/Category';
import Tags from "../../../Components/crud/Tag"
import Admin from "../../../Components/auth/Admin"


const CategoryTag = () => {
    return (
        <Layout>
            <Admin>
            <div className="categorytag">
            <h1>Manage Categories & Tags</h1>
            </div>
            <Container>
                <Row>
                    <CardBody>
                    <Col xs="12" md="6" lg="6">
                     <h3>Create Categories</h3>
                     <Category/>
                     <hr/>
                    </Col>
                    </CardBody>
                   
                    <CardBody>
                    <Col xs="12" md="6" lg="6">
                     <h3>Create Tags</h3>
                     <Tags/>
                     <hr/>
                    </Col>
                    </CardBody>
                </Row>
            </Container>
           </Admin>
        </Layout>
    );
};

export default CategoryTag;
