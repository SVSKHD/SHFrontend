import {useState,useEffect} from "react"
import Router,{withRouter} from "next/router"
import dynamic from "next/dynamic"
import {getCookie,isAuth} from "../../actions/auth"
import {getAllCategories} from "../../actions/category"
import {getTags} from "../../actions/tag"
import {singleBlog,updateBlog} from "../../actions/blog"
import {Form,FormGroup,Input,Label,Row,Col,Container, Button,Toast,ToastBody} from "reactstrap"
// editor
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
import '../../node_modules/react-quill/dist/quill.snow.css';
import { QuillModules, QuillFormats } from '../helpers/quill';
import {FaHeading,FaSortAlphaUp,FaAlignJustify,FaUpload,FaFileUpload, FaTimesCircle, FaCheckCircle} from "react-icons/fa"
import {API, DOMAIN} from "../../config"


const BlogUpdate = ({router}) =>{

const [body, setBody] = useState('');

const [categories, setCategories] = useState([]);
const [tags, setTags] = useState([]);

const [checked, setChecked] = useState([]); // categories
const [checkedTag, setCheckedTag] = useState([]); // tags

const [values, setValues] = useState({
    title: '',
    error: '',
    success: '',
    formData: '',
    keywords: ",",
    title: '',
    body: ''
});


const { error, success, formData, keywords , title } = values;
const token = getCookie('token');

useEffect(()=>{
    setValues({...values,formData:new FormData()})
    initBlog()
    initCategories()
    initTags()
},[router])

const initBlog = () =>{
if(router.query.slug){
    singleBlog(router.query.slug).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            setValues({...values,title:data.title , keywords:data.keywords})
            setBody(data.body)  
            setCategoriesArray(data.categories)
            setTagsArray(data.tags) 
        }
    })
}
}

const setCategoriesArray = blogCategories => {
let ca = [];
blogCategories.map((c,i)=>{
    ca.push(c._id)
})
setChecked(ca)
}

const setTagsArray = blogTags => {
    let ta = [];
    blogTags.map((t,i)=>{
        ta.push(t._id)
    })
    setCheckedTag(ta)
}


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

 const findOutCategory = c => {
        const result = checked.indexOf(c);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };

    const findOutTag = t => {
        const result = checkedTag.indexOf(t);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    };

const showCategories = () => {
    return (
        categories &&
        categories.map((c, i) => (
            <li key={i} className="list-unstyled">
                <input onChange={handleToggle(c._id)} 
                checked = {findOutCategory(c._id)} 
                type="checkbox" className="mr-2" />
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
                <input 
                onChange= {handleTagsToggle(t._id)} 
                checked= {findOutTag(t._id)}
                type="checkbox" className="mr-2" />
                <label className="form-check-label">{t.name}</label>
            </li>
        ))
    );
};

const handleBody = e => {
    setBody(e);
    formData.set('body', e);
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
    const clickedTag = checkedTag.indexOf(t);
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



const handleChange = name => e => {
    // console.log(e.target.value);
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value );
    setValues({ ...values, [name]: value, formData,error: '' });
    
};

const editBlog = e =>{
    e.preventDefault()
    updateBlog(formData,token,router.query.slug).then(data=>{
        if(data.error){
            setValues({...values,error:data.error})
        }else{
            setValues({...values,title:"",keywords:"," ,success : `Blog titled "${data.title}"is succesfully updated`})
            if(isAuth() && isAuth().role === 1){
                Router.replace(`/admin`)
            }
            else if(isAuth() && isAuth().role === 0){
                Router.replace(`/user`)
            }
    }
    console.log('update blog')
})

}


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


const UpdateBlogForm = () => {
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
        <form onSubmit={editBlog}>
            <div className="form-group">
                <label><FaHeading size={35}/></label>
                <input 
                type="text" 
                className="form-control" 
                value={title} 
                onChange={handleChange('title')} 
                />
            </div>

            <div className="form-group">
                <label><FaSortAlphaUp size={35}/></label>
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
                className="form-label"><FaUpload size={35}/> <h5> Featured Image</h5>
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
                <br/>
                
                <img className="img-fluid" src={`${API}/blog/photo/${router.query.slug}`} alt={title}/>


            </div>


            <div className="form-group">
            <label><FaAlignJustify size={35}/></label>
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
                    <FaUpload size={35}/>
                </Button>
            </div>
        </form>
        </div>
    );
};

return(
    <div>
        <Row>
        <Col xs="12" md="8" lg="8">
        <Container fluid={true}>
        {UpdateBlogForm()}
        </Container>
        </Col>

        <Col>
        <h5>Categories</h5>
        <hr />
        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>
        {showCategories()}
        </ul>
        
        <div>
        <h5>Tags</h5>
        <hr />
        <ul style={{ maxHeight: '200px', overflowY: 'scroll' }}>{showTags()}</ul>
        </div>

        </Col>
        </Row>
    </div>

)
}
export default withRouter(BlogUpdate)