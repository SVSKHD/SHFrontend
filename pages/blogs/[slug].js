import { Button, Container , Card , CardBody , Row , Col } from "reactstrap"
import Layout from "../../Components/Layout/Layout"

import moment from "moment"
import { useEffect, useState } from "react"
import { listRelated , singleBlog } from "../../actions/blog"
import Link from "next/link"
import {API , APP_NAME , DOMAIN} from "../../config"
import renderHTML from 'react-render-html';
import Collapsible from "../../Components/Collapsible"
import BlogCard from "../../Components/blog/Blogcard"
import RelatedCard from "../../Components/blog/relatedCard"
import SmallCard from "../../Components/blog/SmallCard"
import { FaAddressCard } from "react-icons/fa"
import Seo from "../../Components/seo"
import DisqusThread from "../../Components/DisqusThread"

const SingleBlog = ({blog,query}) =>{
    const [related, setRelated] = useState([]);

    const loadRelated = () => {
        listRelated({ blog }).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setRelated(data);
            }
        });
    };

    useEffect(() => {
        loadRelated();
    }, []);

    const showRelatedBlog = () => {
        return related.map((blog, i) => (
            <div className="col-md-4" key={i}>
                    <SmallCard blog={blog} />  
            </div>
            
        ));
    };
    

const showComments = () =>{
        return(
            <div>
                <DisqusThread id={blog.id} title={blog.title} path={`/blog/${blog.slug}`}/>
            </div>
        )
    }


    
    const showBlogCategories = blog =>
    blog.categories.map((c, i) => (
        <Link key={i} href={`/categories/${c.slug}`}>
            <a className="btn btn-primary mr-1 ml-1 mt-3">{c.name}</a>
        </Link>
    ));

    const showBlogTags = blog =>
    blog.tags.map((t, i) => (
        <Link key={i} href={`/tags/${t.slug}`}>
            <a className="btn btn-outline-primary mr-1 ml-1 mt-3">{t.name}</a>
        </Link>
    ));

return(
    <React.Fragment>
        <div>
            <Seo
            title={`${blog.title} | ${APP_NAME}`}
            mtitle={`${blog.title} | ${APP_NAME}`}
            dcontent={blog.mdesc}
            keywords={blog.keywords}
            canurl={`${DOMAIN}/blogs/${query.slug}`}
            // og
            ogcontent={`${blog.title} | ${APP_NAME}`}
            ogdesc={blog.mdesc}
            ogurl={`${DOMAIN}/blogs/${query.slug}`}
            ogimg={`${API}/blog/photo/${blog.slug}`}
            />
            <Layout>
            <div >
            <img className="blogimage" src={`${API}/blog/photo/${blog.slug}`} alt={blog.title}/>
            </div>
            <br/>
            <Container>
            <h1 className="display-3">{blog.title}</h1>
            <br/>
            <Row>
            <Col xs="12" md="10" lg="10">
            <Card>
            <CardBody>
            {renderHTML(blog.body)}
            </CardBody>
            </Card>
            </Col>
            
            <Col xs="12" md="2" lg="2">
            <br/>
            <Collapsible/>
            <br/>
            <Card>
            <CardBody>
            <h5>Categories</h5>
            {showBlogCategories(blog)}
            </CardBody>
            </Card>
            <hr/>
            <Card>
            <CardBody>
            <h5>Tags</h5>
            {showBlogTags(blog)}
            </CardBody>
            </Card>
            <br/>
            <h5>Author details</h5>        
            <hr/>
            <RelatedCard
            author={blog.postedBy.name}
            link={`/profile/${blog.postedBy.username}`}
            />

          
            </Col>
            </Row>
            
            </Container>

             <br/>
             <Container>
             <h2>Related Feed</h2>
             <hr/>
             <div className="row">
             {showRelatedBlog()}
             </div>
             </Container>
             <br/>
             
             
             <Container>
             <h3>Comment Here</h3>
             <hr/>
             {showComments()}
             </Container>
             
            </Layout>
        </div>
    </React.Fragment>
    )
}
SingleBlog.getInitialProps = ({query})=>{
    return singleBlog(query.slug).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            return{blog:data,query}
        }
    })
}

export default SingleBlog

