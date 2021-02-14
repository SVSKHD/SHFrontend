import {useEffect,useState} from "react"
import {Container,Row,Col} from "reactstrap"
import Layout from "../../../Components/Layout/Layout"
import Private from "../../../Components/auth/Private"
import BlogCreate from "../../../Components/crud/BlogCreate"

const create = () =>{
    return(
        <div>
            <React.Fragment>
            <Layout>
                <Private>
                <Container>
                <h1>Create New Blog</h1>
                </Container>
                <hr/>
                
                <div>
                    <BlogCreate/>
                </div>

                
                </Private>
            </Layout>
         </React.Fragment>
        </div>
    )
}
export default create