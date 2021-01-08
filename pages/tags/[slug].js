import { Button, Container , Card , CardBody , Row , Col } from "reactstrap"
import Layout from "../../Components/Layout/Layout"

import moment from "moment"
import {useEffect} from "react"
import { SingleTag } from "../../actions/tag"
import Link from "next/link"
import {API , APP_NAME , DOMAIN} from "../../config"
import renderHTML from 'react-render-html';
import Collapsible from "../../Components/Collapsible"
import BlogCard from "../../Components/blog/Blogcard"
import RelatedCard from "../../Components/blog/relatedCard"
import SmallCard from "../../Components/blog/SmallCard"
import { singleBlog } from "../../actions/blog"
import Seo from "../../Components/seo"


const Tag = ({tag,blogs,query}) =>{
    return(
        <div>
            
            <Seo
            title={`${tag.name} | ${APP_NAME}`}
            mtitle={`${tag.name} | ${APP_NAME}`}
            dcontent={"Best Categories are here"}
            keywords={`categories`}
            canurl={`${DOMAIN}/tags/${query.slug}`}
            // og
            ogcontent={`${tag.name} | ${APP_NAME}`}
            ogdesc={"Best tags are here"}
            ogurl={`${DOMAIN}/tags/${query.slug}`}
            />

            <Layout>
            <Container>
                <h1 className="display-3">Tag:{tag.name}</h1>
                <hr/>
                <Row>
                {blogs.map((b,i)=>
                <Col xs="12" sm="12" lg="4" md="4">
                <BlogCard
                key={i} blog={b}
                />
                </Col>
                )}
                </Row>
            </Container>
            </Layout>
        </div>
    )
}

Tag.getInitialProps = ({ query }) => {
    return SingleTag(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { tag: data.tag, blogs: data.blogs, query };
        }
    });
};
export default Tag