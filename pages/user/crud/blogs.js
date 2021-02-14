import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import Private from "../../../Components/auth/Private"
import {isAuth} from "../../../actions/auth"
import Blogread from "../../../Components/crud/BlogRead"

const Blog = () =>{
    const username = isAuth() && isAuth().username
    return(
        <Layout>
            <Private>
            <div>
            <Container>
            <h2>Manage Blogs</h2>
            <hr/>
            </Container>
            </div>
            <div>
                <Blogread username={username}/>
            </div>
            </Private>
        </Layout>
    ) 
}
export default Blog