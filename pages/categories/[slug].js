import { Button, Container , Card , CardBody , Row , Col } from "reactstrap"
import Layout from "../../Components/Layout/Layout"

import moment from "moment"
import {useEffect} from "react"
import { getSingleCategory } from "../../actions/category"
import Link from "next/link"
import {API , APP_NAME , DOMAIN } from "../../config"
import renderHTML from 'react-render-html';
import Collapsible from "../../Components/Collapsible"
import BlogCard from "../../Components/blog/Blogcard"
import RelatedCard from "../../Components/blog/relatedCard"
import SmallCard from "../../Components/blog/SmallCard"
import Seo from "../../Components/seo"

const Category = ({category, blogs , query}) =>{
    return(
        <div>
            <Seo
            title={`${category.name} | ${APP_NAME}`}
            mtitle={`${category.name} | ${APP_NAME}`}
            dcontent={"Best Categories are here"}
            keywords={`categories`}
            canurl={`${DOMAIN}/categories/${query.slug}`}
            // og
            ogcontent={`${category.name} | ${APP_NAME}`}
            ogdesc={"Best categories are here"}
            ogurl={`${DOMAIN}/categories/${query.slug}`}
            />
           
           <Layout>
            <Container>
                <h1 className="display-3">Category : {category.name}</h1>
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
Category.getInitialProps = ({ query }) => {
    return getSingleCategory(query.slug).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return { category: data.category, blogs: data.blogs, query };
        }
    });
};
export default Category

