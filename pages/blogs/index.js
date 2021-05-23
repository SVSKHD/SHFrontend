import React , {useState} from "react"
import {Container,Row,Col,Collapse, Button, CardBody, Card} from "reactstrap"
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
const [isOpen, setIsOpen] = useState(false);


const toggle = () => setIsOpen(!isOpen);


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
    return(
        <div>
        <Button  
        className="shadow-lg"
        color="light" 
        onClick={toggle} 
        style={{ marginBottom: '1rem'}}>
        <h4 className="BlogFamilyT">
            Categories <FaCircleNotch className="load" size={25}/>
        </h4>
        </Button>

        <Collapse isOpen={isOpen}>
        <Card className="BlogCategory">
          <CardBody >
        {categories.map((c,i)=>(
            <Link href={`/categories/${c.slug}`} key={i}>
           <Button 
           className="shadow-lg ISH" 
           size="sm" 
           color = "light">
               <strong>
                   {c.name}
                </strong>
            </Button>
           </Link>
        ))}
        
          </CardBody>
        </Card>
       
      </Collapse>
     </div> 
       
    )
}

const showAllTags = () =>{
return(        
<div>
<Button 
className="shadow-lg"
onClick={toggle} 
color="light"
style={{ marginBottom: '1rem'}}
>
<h4 className="BlogFamilyT">
Tags  <FaCircleNotch className="load" size={25}/></h4>
</Button>

<Collapse isOpen={isOpen}>
<Card className="BlogCategory">
  <CardBody >
{tags.map((t,i)=>(
    <Link href={`/tags/${t.slug}`} key={i}>
   <Button 
   className="shadow-lg ISH" 
   size="sm" 
   color = "light">
       <strong>
           {t.name}
        </strong>
    </Button>
   </Link>
))}

  </CardBody>
</Card>

</Collapse>
</div> 

)
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
            <Container fluid>
            <h1 className="BlogIndexT">All about SevenHills Tirupati</h1>
            <br className="mb-5"/>

            <Container>
             <Row>

            <Col sm="12" md="6">
            <div className="text-center">
            {showAllCategories()}
            </div>
            </Col>


            <Col sm="12" md="6">
            <div className="text-center">
            {showAllTags()}
            </div>
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