import Link from 'next/link';
import renderHTML from 'react-render-html';
import moment from 'moment';
import { API } from '../../config';
import {Card,CardBody,CardTitle, CardSubtitle , CardImg,Button,Container,Row,Col} from "reactstrap"
import {FaExternalLinkAlt} from "react-icons/fa"

const SmallCard = ({ blog }) => {
    const author = blog.postedBy.name
    return (
        <div className="ISH">
              <Card>
              <CardImg 
              top width="100%" 
              src={`${API}/blog/photo/${blog.slug}`} 
              alt={blog.title} />
              <CardBody>
              <CardTitle>
              <h5 className="card-title">
                <Link href={`/blogs/${blog.slug}`} >
                {blog.title}
                </Link>
              </h5>
              </CardTitle>

              <CardSubtitle>
              <b>
              Posted {moment(blog.updatedAt).fromNow()} by {author}
              </b>
              </CardSubtitle>
              <br/>
              <Button 
              href={`/blogs/${blog.slug}`} 
              size="sm" 
              outline color="dark">
                  <FaExternalLinkAlt size={28}/>
             </Button>

              </CardBody>
              </Card>
            
            
        </div>
    );
};

export default SmallCard;
