import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import BlogCreate from"../../../Components/crud/BlogCreate"
import Admin from "../../../Components/auth/Admin"

const Blog = () =>{
    return(
        <div>
            <Layout>
                <Admin>
                <div>
                <Container>
                <h1>Create Post here</h1>
                
                </Container>
                <hr/>
                </div>
                <div>
                    <BlogCreate/>
                </div>
                </Admin>
            </Layout>
        </div>
    )
}
export default Blog