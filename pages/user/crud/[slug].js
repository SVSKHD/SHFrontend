import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import BlogUpdate from"../../../Components/crud/BlogUpdate"
import Private from "../../../Components/auth/Private"
const Blog = () =>{
    return(
        <div>
            <Layout>
                <Private>
                <div>
                <h1>Create Post here</h1>
                </div>
                <div>
                    <BlogUpdate/>
                </div>
                </Private>
            </Layout>
        </div>
    )
}
export default Blog