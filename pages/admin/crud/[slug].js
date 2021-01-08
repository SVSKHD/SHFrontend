import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import BlogUpdate from"../../../Components/crud/BlogUpdate"
import Admin from "../../../Components/auth/Admin"
const Blog = () =>{
    return(
        <div>
            <Layout>
                <Admin>
                <div>
                <h1>Create Post here</h1>
                </div>
                <div>
                    <BlogUpdate/>
                </div>
                </Admin>
            </Layout>
        </div>
    )
}
export default Blog