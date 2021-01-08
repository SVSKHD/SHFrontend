const { defaultFormat } = require("moment")

import {useState,useEffect} from "react"
import { getCookie } from "../../actions/auth"
import {create,getTags,removeTag} from "../../actions/tag"
// styling
import {Input,InputGroup,Form,Button,InputGroupAddon,Label,Toast,ToastBody} from "reactstrap"
import {FaPlusSquare,FaTimes} from "react-icons/fa"

const Tags = () =>{
    const [values, setValues] = useState({
        name: '',
        error: false,
        success: false,
        tags: [],
        removed: false,
        reload: false
    });

    const { name, error, success, tags, removed, reload } = values;
    const token = getCookie('token');

    useEffect(() => {
        loadTags();
    }, [reload]);

    const loadTags = () => {
        getTags().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, tags: data });
            }
        });
    };

    const showTags = () => {
        return tags.map((t, i) => {
            return (
                <Button
                className="ISH"
                onDoubleClick={()=>deleteConfirm(t.slug)}
                title="Double click to delete" 
                size="sm" 
                key={i}
                outline color="dark">
                 {t.name} <FaTimes size={25}/>
                </Button>
            );
        });
    };

    const deleteConfirm = slug => {
        let answer = window.confirm('Are you sure you want to delete this tag?');
        if (answer) {
            deleteTag(slug);
        }
    };

    const deleteTag = slug => {
        // console.log('delete', slug);
        removeTag(slug, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const clickSubmit = e => {
        e.preventDefault();
        // console.log('create category', name);
        create({ name }, token).then(data => {
            if (data.error) {
                setValues({ ...values, error: data.error, success: false });
            } else {
                setValues({ ...values, error: false, success: false, name: '', removed: !removed, reload: !reload });
            }
        });
    };

    const handleChange = e => {
        setValues({ ...values, name: e.target.value, error: false, success: false, removed: '' });
    };

    const showSuccess = () =>{
        if(success){
            return( 
            <div className="p-3 bg-success my-2 rounded">
                <Toast>
                <ToastBody>
                  Successfully created Tag
                </ToastBody>
                </Toast>
             </div>
        )
        }
    }
 
    const showError = () =>{
        if(error){
            return( 
            <div className="p-3 bg-warning my-2 rounded">
                <Toast>
                <ToastBody>
                  Category Already Exist
                </ToastBody>
                </Toast>
             </div>
        )
        }
    }


    const showRemoved = () =>{
        if(removed){
            return( 
            <div className="p-3 bg-danger my-2 rounded">
                <Toast>
                <ToastBody>
                  Category is removed
                </ToastBody>
                </Toast>
             </div>
        )
        }
    }
    

    const mouseMoveHandler = e => {
        setValues({ ...values, error: false, success: false, removed: '' });
    };
    
    const TagForm = () =>{
        return(
            <div>
            <Form onSubmit={clickSubmit}>
                <Label>Tag name</Label>
                 <InputGroup>
                 <Input 
                 value={name}
                 onChange={handleChange}
                 type="text"  
                 placeholder="Tag Name"
                 />
                 <InputGroupAddon addonType="append">
                 <Button size="sm" outline color="success">
                     <FaPlusSquare size={26}/>
                 </Button>
                 </InputGroupAddon>
                 </InputGroup>
            </Form>
            </div>
        )
    }
    
    return(
        <React.Fragment>
        <div>
        <div>
        {showSuccess()}
        {showError()}
        {showRemoved()}
        </div>
        
        <div onMouseMove={mouseMoveHandler}>
        {TagForm()}
        <hr/>
        {showTags()}
        </div>
    </div>
    </React.Fragment>
    )
}
export default Tags