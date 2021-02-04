import Layout from "../../Components/Layout/Layout"
import {Container, Row, Col, ListGroup,ListGroupItem } from "reactstrap"
import Link from "next/link"
import Admin from "../../Components/auth/Admin"
import { Button } from "reactstrap"
const AdminIndex = () =>{
    return(
      <div>
        <Admin>
       <Layout>
        
        <div className="AdminDashboard">
        <h1>Admin Dashboard</h1>
        
        </div>
        <Container>
        <hr/>
            <Row>
                <Col xs="12" sm="12" lg="3" md="3">

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


                <ListGroupItem>
                     <Link href="/user/update">
                        Update Profile
                     </Link>
                </ListGroupItem>

                </ListGroup>
                </Col>

                <Col>
                <Button href="">Profile</Button>
                </Col>
            </Row>
        </Container>
      </Layout>  
      </Admin> 
      </div>
    )
}
export default AdminIndex