import Layout from '../../../Components/Layout/Layout';
import {Container,Row,Col,CardBody} from "reactstrap"
import Category from '../../../Components/crud/Category';
import Tags from "../../../Components/crud/Tag"
import Admin from "../../../Components/auth/Admin"


const CategoryTag = () => {
    return (
        <div className="BlogIndexT">
        <Layout>
            <Admin>
            <div className="categorytag">
            <h1>Manage Categories & Tags</h1>
            </div>
            <Container>
                <Row>
                    <Col xs="12" md="6" lg="6">
                    <CardBody>
                     <h3>Create Categories</h3>
                     <Category/>
                     <br/>
                    </CardBody>
                    </Col>

                    <Col xs="12" md="6" lg="6">
                    <CardBody>
                     <h3>Create Tags</h3>
                     <Tags/>
                     <br/>
                    </CardBody>
                    </Col>
                </Row>
            </Container>
           </Admin>
        </Layout>
    </div>
    );
};

export default CategoryTag;
