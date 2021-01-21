import {useState,useEffect} from "react"
import Link from "next/link"
import Router from "next/router"
import {getCookie,isAuth} from "../../actions/auth"
import {list,removeBlog} from "../../actions/blog"
import moment from "moment"
import {Row,Col,Container, Button,ButtonGroup, Card , CardBody , Toast , ToastHeader , ToastBody} from "reactstrap"
import {API} from "../../config"
import {FaTrashAlt,FaEdit} from "react-icons/fa"

const Blogread = ({username}) =>{
    const [blogs, setBlogs] = useState([]);
    const [message, setMessage] = useState('');
    const token = getCookie('token');

    useEffect(() => {
        loadBlogs();
    }, []);

    const loadBlogs = () => {
        list().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setBlogs(data);
            }
        });
    };

    const deleteBlog = slug => {
        removeBlog(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setMessage(data.message);
                loadBlogs();
            }
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete your blog?');
        if (answer) {
            deleteBlog(slug);
        }
    };

    const showUpdateButton = blog => {
        if (isAuth() && isAuth().role === 0) {
            return (
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="btn btn-sm btn-warning">Update</a>
                </Link>
            );
        } else if (isAuth() && isAuth().role === 1) {
            return (
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            );
        }
    };

const ShowAllBlogs = () =>{
    return blogs.map((blog,i)=>{
        return(
            <React.Fragment>
            <div className="ISH">
            <Container>
            <Row>
            <Col xs="12" md="12" lg="12">
            <Card>
                <CardBody>
                <Row>
                <Col>
                <div>
                <img className="card-img" src={`${API}/blog/photo/${blog.slug}`}/>
                </div> 
                </Col>
                <Col>   
                    <h2>{blog.title}</h2>
                    <h5>{`Written by ${blog.postedBy.name}`}</h5>
                    <h6>published {moment(blog.updatedAt).fromNow()}</h6>
                    
                <ButtonGroup>
                <Button size="sm" onClick={()=>deleteConfirm(blog.slug)}  outline color="danger"><FaTrashAlt size={25}/></Button>
                {showUpdateButton(blog)}
                </ButtonGroup>
                
                </Col>
                </Row>
                </CardBody>
            </Card>
            
            </Col>
            </Row>
            </Container>
            </div>
                   
            </React.Fragment>
        )
    })
}
    return(
    <div>
      {message && (<div className="p-3 my-2 rounded">
        <Container>
        <Toast>
          <ToastHeader>
            Notification
          </ToastHeader>
          <ToastBody className="bg-success">
            <b className="text-white">Blog succesfully deleted</b>
          </ToastBody>
        </Toast>
        </Container>
      </div>) }
      {ShowAllBlogs()}
    </div>
    )
}
export default Blogread