import { Container , Card , CardBody , Row , Col , Button , ButtonGroup} from "reactstrap"
import {FaAddressCard} from "react-icons/fa"
import Layout from "../../Components/Layout/Layout"
import moment from "moment"
import { userPublicProfile } from "../../actions/user"
import Link from "next/link"
import {API , APP_NAME} from "../../config"
import renderHTML from 'react-render-html';
import Collapsible from "../../Components/Collapsible"
import BlogCard from "../../Components/blog/Blogcard"
import RelatedCard from "../../Components/blog/relatedCard"
import SmallCard from "../../Components/blog/SmallCard"
import { singleBlog } from "../../actions/blog"
import ContactForm from "../../Components/form/contactform"
import Seo from "../../Components/seo"

const UserProfile = ({user,blogs,query}) =>{
    
    const showUserBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div className="mt-4 mb-4" key={i}>
                    <Card>
                        <CardBody>
                        <Link href={`/blogs/${blog.slug}`}>
                        <a className="lead">{blog.title}</a>
                        </Link>
                        <hr/>
                        <Button href="/admin/crud/blogs" outline color="dark">Update Blogs</Button>
                        </CardBody>
                    </Card>
                    
                </div>
            );
        });
    };
    
    return(
     <div>
         <Seo
         title={`${user.name} | ${APP_NAME}`}
         mtitle={`${user.name} | ${APP_NAME}`}
         canurl={`https://sevenhillstirupati.com/${user.username}`}
         ogimg={`${API}/user/photo/${user.username}`}
        //  canurl={}
         />
         <Layout>
            
             <Container>
             <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <h5>{user.name}</h5>
                                            <p className="text-muted">Joined {moment(user.createdAt).fromNow()}</p>
                                            <Button href="/user/update" outline color="dark">Update Profile</Button>
                                        </div>
                                        <div className="col-md-4">
                                            <img
                                                src={`${API}/user/photo/${user.username}`}
                                                className="img img-fluid img-thumbnail mb-3"
                                                style={{ maxHeight: '100px', maxWidth: '100%' }}
                                                alt="user profile"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                 <hr/>

                 <Row>
                     <Col xs="12" sm="12" lg="6" md="6">
                     <Card body inverse color="info">
                     <CardBody>
                     <h5>Recent Blogs by  {user.name}</h5>
                     {showUserBlogs()}
                     
                     </CardBody>
                     
                     </Card>
                      </Col>

                      <Col>
                     <Card body inverse color="warning">
                     <CardBody>
                    
                     <h5 className="display-5">Message {user.name}</h5>
                     <hr/>
                     <ContactForm/>

                     </CardBody>
                     
                     </Card>
                      </Col>
                 </Row>
             </Container>
         </Layout>
     </div>
    )
}

UserProfile.getInitialProps = ({ query }) => {
    // console.log(query);
    return userPublicProfile(query.username).then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            // console.log(data);
            return { user: data.user, blogs: data.blogs, query };
        }
    });
};

export default UserProfile