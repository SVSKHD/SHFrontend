import React , {useState} from "react"
import {Container,Row,Col,Button} from "reactstrap"
import {} from "react-icons/fa"
import {listBlogsWithCategoriesAndTags} from "../../actions/blog"
import Layout from "../../Components/Layout/Layout"
import {APP_NAME} from "../../config"
import Link from "next/link"
import {withRouter} from "next/router"
import BlogCard from "../../Components/blog/Blogcard"
import {FaCircleNotch} from "react-icons/fa"
import Seo from "../../Components/seo"




const Blogs = ({blogs, categories, tags, totalBlogs, blogsLimit, blogSkip, router}) =>{
    
const [limit, setLimit] = useState(blogsLimit)
const [skip,setSkip] = useState(0)
const [size,setSize] = useState(totalBlogs)
const [loadedBlogs,setLoadedBlogs] = useState([])

const loadMore = () => {
    let toSkip = skip + limit;
    listBlogsWithCategoriesAndTags(toSkip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            setLoadedBlogs([...loadedBlogs, ...data.blogs]);
            setSize(data.size);
            setSkip(toSkip);
        }
    });
};

const loadMoreButton = () => {
    return (
        size > 0 &&
        size >= limit && (
            <Button size="sm" outline color="dark"  onClick={loadMore}>
                <strong>Load More </strong> <FaCircleNotch className="load" size={25}/>
            </Button>
        )
    );
};



const  showAllBlogs = () =>{
            return(
                <Row>
                {blogs.map((blog,i)=>(
                <Col xs="12" lg="4" md="6">
                <BlogCard key={i} blog={blog}/>
                </Col>
                ))}
                </Row>
            )
        }

const showAllCategories = () =>{
    return categories.map((c,i)=>(
        <Link href={`/categories/${c.slug}`} key={i}>
           <Button 
           className="ISH" 
           size="sm" 
           outline color = "info">
               <strong>
                   {c.name}
                </strong>
            </Button>
        </Link>
    ))
}

const showAllTags = () =>{
    return tags.map((t,i)=>(
        <Link href={`/tags/${t.slug}`} key={i}>
           <Button className="ISH" size="sm" outline color = "info"><strong>{t.name}</strong></Button>
        </Link>
    ))
}

const showLoadedBlogs = () => {
    return(
        <Row>
        {loadedBlogs.map((blog,i)=>(
        <Col xs="12" md="6" lg="4">
        <BlogCard key={i} blog={blog}/>
        </Col>
        ))}
        </Row>
    )
};
    
    
    return(
       <div>
           <Seo
            title={"SevenHills Tirupati Blog is here | All about Tirupati and Tirumala "}
            dcontent={`SevenHills Tirupati is Blog for every one and it is a great opensource from Tirrpati and tirumala, 
            only genuine stories of history is here.`}
            keywords={`Tirupati , 
            FrontFace of Tirupati and Tirmula , 
            Tirumala Tirupati Balaji , 
            Govinda , Srinivas , Venkatesawara Swamy`}
            />
        <Layout>
            <h1>Blogs and Stories List</h1>
            <hr/>
            <Container>
             <Row>
            <Col>
            <h4>Categories</h4>
            <hr/>
            {showAllCategories()}
            </Col>
            <Col>
            <h4>Tags</h4>
            <hr/>
            {showAllTags()}
            </Col>
             </Row>
             <hr/>
             <div>
             <Row>
             <Col>
             {showAllBlogs()}
             {showLoadedBlogs()}
             {loadMoreButton()}
             </Col>
             </Row>
             </div>
            </Container>
        </Layout>
       </div>
    )
}
Blogs.getInitialProps = () =>{
    let skip = 0;
    let limit = 3;
    return listBlogsWithCategoriesAndTags(skip, limit).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                totalBlogs: data.size,
                blogsLimit: limit,
                blogSkip: skip
            };
        }
    });  
}
export default withRouter(Blogs)