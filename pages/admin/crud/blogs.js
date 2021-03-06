import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import Admin from "../../../Components/auth/Admin"
import Blogread from "../../../Components/crud/BlogRead"
const Blog = () =>{
    return(
        <div>
            <Layout>
                <Admin>
                <div>
                <Container>
                <h1>Manage Blogs</h1>
                <hr/>
                </Container>
                </div>
                <div>
                   <Blogread/>
                </div>
                </Admin>
            </Layout>
        </div>
    )
}
export default Blog