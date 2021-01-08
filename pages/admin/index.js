import Layout from "../../Components/Layout/Layout"
import {Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap"
import Link from "next/link"
import Admin from "../../../Components/auth/Admin"
const AdminIndex = () =>{
    return(
      <div>
        <Admin>
       <Layout>
        
        <div className="AdminDashboard">
            <h1>Admin Dashboard</h1>
        </div>
        <Container>
            <Row>
                <Col>
                <ListGroup>
                <ListGroupItem>
                    <Link href="/admin/crud/category-tag">
                        Create Category
                    </Link>
                </ListGroupItem>

                <ListGroupItem>
                    <Link href="/admin/crud/category-tag">
                        Create Tag
                    </Link>
                </ListGroupItem>

                <ListGroupItem>
                     <Link href="/admin/crud/blog">
                        Create Blog
                     </Link>
                </ListGroupItem>

                <ListGroupItem>
                     <Link href="/admin/crud/blogs">
                        Update / Delete Blogs
                     </Link>
                </ListGroupItem>

                </ListGroup>
                </Col>
                <Col>
                
                </Col>
                <Col>
                </Col>
            </Row>
        </Container>
      </Layout>  
      </Admin> 
      </div>
    )
}
export default AdminIndex