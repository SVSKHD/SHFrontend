import {useState,useEffect} from "react"
import Link from "next/link"
import {withRouter} from "next/router"
import dynamic from "next/dynamic"
import {getCookie,isAuth} from "../../actions/auth"
import {getAllCategories} from "../../actions/category"
import {getTags} from "../../actions/tag"
import {createBlog} from "../../actions/blog"
import {
    Row,
    Col,
    Container, 
    Card, 
    CardBody ,
    Button,
    Toast,
    ToastBody
} from "reactstrap"
// editor
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../helpers/quill';
import {FaHeading,FaSortAlphaUp,FaAlignJustify,FaUpload,FaFileUpload, FaTimesCircle, FaCheckCircle} from "react-icons/fa"
const BlogCreate = ({router}) =>{

    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

    const [body, setBody] = useState(blogFromLS());
    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        keywords:[].concat(","),
        hidePublishButton: false
    });

    const { error, sizeError, success, formData, title,keywords, hidePublishButton } = values;
    const token = getCookie('token');

    useEffect(() => {
        setValues({ ...values, formData: new FormData() });
        initCategories();
        initTags();
    }, [router]);

    const initCategories = () => {
        getAllCategories().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setCategories(data);
            }
        });
    };

    const initTags = () => {
        getTags().then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setTags(data);
            }
        });
    };

    const publishBlog = e => {
        e.preventDefault();
        // console.log('ready to publishBlog');
        createBlog(formData, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error });
            } else {
                setValues({ ...values, title: '', error: '', success: `A new blog titled "${data.title}" is created` });
                setBody('');
                setCategories([]);
                setTags([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = e => {
        // console.log(e);
        setBody(e);
        formData.set('body', e);
        if (typeof window !== 'undefined') {
            localStorage.setItem('blog', JSON.stringify(e));
        }
    };

    const handleToggle = c => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        console.log(all);
        setChecked(all);
        formData.set('categories', all);
    };

    const handleTagsToggle = t => () => {
        setValues({ ...values, error: '' });
        // return the first index or -1
        const clickedTag = checked.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all);
        formData.set('tags', all);
    };

    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleTagsToggle(t._id)} type="checkbox" className="mr-2" />
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        );
    };

    const showError = () => {
    return(
        <div 
        className="p-3 bg-danger my-2 rounded" 
        style={{ display: error ? '' : 'none' }}
        >
        <Toast>
        <ToastBody>
        <FaTimesCircle size={25}/> <b>{error}</b>
        </ToastBody>
        </Toast>
        </div>
    );
    }

    const showSuccess = () => {
        return(
        <div 
        className="alert alert-success" 
        style={{ display: success ? '' : 'none' }}
        >
        <Toast>
        <ToastBody>
        <FaCheckCircle size={25}/>  <b>{success}</b>
        </ToastBody>
        </Toast>
        </div>
    );
    }

    const createBlogForm = () => {
        return (
            <div>
                <div>
                    <Row>
                    <Col xs="1" lg="4" md="4">
                    {showError()}
                    {showSuccess()}
                    </Col>
                    </Row>
                </div>
           
            <form onSubmit={publishBlog}>
                <div align="right">
                    <Button outline color="success" size="sm" type="submit">
                        <FaUpload size={20}/> <b>Publish</b>
                    </Button>
                    <hr/>
                </div>
                <Card>
                <CardBody>
                
                <div className="form-group">
                    <label><FaHeading size={20}/> <b>Title</b></label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={title} 
                    onChange={handleChange('title')} 
                    />
                </div>

                <div className="form-group">
                    <label><FaSortAlphaUp size={20}/> <b>Keywords</b></label>
                    <input 
                    type="text" 
                    className="form-control" 
                    value={keywords} 
                    onChange={handleChange('keywords')} 
                    />
                </div>

                <div className="mb-3">
                    
                    <label 
                    for="formFileMultiple" 
                    className="form-label"><FaUpload size={20}/> <b>Featured Image</b>
                    </label>
                    <br/>
                    <small className="text-muted">Max size: 1mb</small>
                    <input 
                    className="form-control" 
                    type="file" 
                    id="formFileMultiple" 
                    placeholder="Featured Image"
                    onChange={handleChange('photo')}
                    multiple
                    />
                </div>


                <div className="form-group">
                <label><FaAlignJustify size={20}/> <b>Content</b> </label>
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBody}
                    />
                </div>

                <div>
                    <Button outline color="success" size="sm" type="submit">
                        <FaUpload size={20}/> <b>publish</b>
                    </Button>
                </div>
            </CardBody>
            </Card>
            </form>
            
            </div>
        );
    };

    return (
        <Container fluid={true}>
        <Card>
        <CardBody >
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    {createBlogForm()}
                </div>

                <div className="col-md-4">
                    
                    
                    
                    <Card>
                    <CardBody>
                    <div>
                   
                        <h5><b>Categories</b></h5>
                        <hr />

                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showCategories()}</ul>
                    </div>
                    <div>
                        <h5><b>Tags</b></h5>
                        <hr />
                        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
                    
                    </div>
                    </CardBody>
                    </Card>



                </div>
            </div>
        </div>
    </CardBody>
    </Card>
    </Container>
    );
}

export default withRouter(BlogCreate)
