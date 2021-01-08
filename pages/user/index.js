import Layout from "../../Components/Layout/Layout"
import {Container, Row, Col, Card, CardBody } from "reactstrap"
import Link from "next/link"
import Private from "../../Components/auth/Private"
const UserIndex = () =>{
    return(
      <React.Fragment>
      <div>
       <Layout>
         <Private>
        <div className="UserDashboard">
            <Container>
            <h1>User Dashboard</h1>
            <hr/>
            </Container>
            <Container>
             <Row>
               <Col>
                 <Card>
                   <ul className="list-group">
                   <li className="list-group-item">
                   <Link href="/user/crud/blog">
                   <a className="lead">Create Blog</a>
                   </Link>
                   </li>

                   <li className="list-group-item">
                   <Link  href="/user/crud/blogs">
                   <a className="lead">Update / Delete Blogs</a>
                   </Link>
                   </li>
                 
                   <li className="list-group-item">                
                   <Link href="/user/update">
                   <a className="lead">Update Profile</a>
                   </Link>
                   </li>

                   
                  </ul>
                 </Card>
               </Col>
               <Col>

               </Col>
             </Row>
            </Container>
      </div>
      </Private>
      </Layout>   
      </div>
      </React.Fragment>
    )
}
export default UserIndex