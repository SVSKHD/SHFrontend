import {
    Card, 
    CardImg, 
    CardText, 
    CardBody,
    CardTitle, 
    CardSubtitle,
    CardFooter, 
    Button} from "reactstrap"

import {FaShareSquare} from "react-icons/fa"
import {API} from "../../config"
import moment from "moment"
import Link from "next/link"

const BlogCard = ({blog}) =>{


const showBlogCategories = () =>
    blog.categories.map((c, i) => (
        <Link key={i} href={`/categories/${c.slug}`}>
           <Button 
           className="ISH" 
           size="sm" 
           outline color="success">
               <strong>
               {c.name}
               </strong>
            </Button>
        </Link>
    ));


const showBlogTags = () =>
    blog.tags.map((t, i) => (
        
            <Button 
            className="ISH" 
            size="sm" 
            outline color="info">
                <Link key={i} href={`/tags/${t.slug}`}>
                <strong>
                    {t.name}
                </strong>
                </Link>
            </Button>
        
    ));



return(
<div className="BlogCard">
<Card>
    <CardImg 
    top width="100%" 
    src={`${API}/blog/photo/${blog.slug}`} 
    alt={blog.title} />
    <CardBody>
    <CardTitle tag="h5"><b>{blog.title}</b></CardTitle>
    <hr/>
    <Link href={`/profile/${blog.postedBy.username}`}>
    <CardText className="lead">
         <Button size="sm" outline color="info">
         <b> Written by  {blog.postedBy.name}</b>
         </Button>
         <br/>
         Published {moment(blog.updatedAt).fromNow()}
         
    </CardText>
    </Link>
    <Button size="sm" outline color="dark"> 
    <Link href={`/blogs/${blog.slug}`}>
    <FaShareSquare size={28}/>
    </Link>
    </Button>
    </CardBody>
    <CardFooter>
        {showBlogCategories()}
        {showBlogTags()}
    </CardFooter>
</Card>
</div>
)
}
export default BlogCard