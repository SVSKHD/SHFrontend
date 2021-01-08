import {useState,useEffect} from "react"
import { getCookie } from "../../actions/auth"
import {create,getAllCategories,removeCategory} from "../../actions/category"
// styling
import {Input,InputGroup,Form,Button,InputGroupAddon,Label,Toast,ToastBody} from "reactstrap"
import {FaPlusSquare,FaTimes} from "react-icons/fa"
import { set } from "js-cookie"
const Category = () =>{
    const [values,setValues] = useState({
        name:"",
        error:false,
        success:false,
        categories:[],
        removed:false,
        reload:false,
    })
    const {name,error,success,categories,removed,reload} = values
    const token = getCookie('token')

    useEffect(()=>{
        loadCategories()
    },[reload])

    const loadCategories = () =>{
    getAllCategories().then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            setValues({...values,categories:data});
        }
    })       
    }

    const showCategories = () =>{
        return categories.map((c,i)=>{
            return(
                <Button
                className="ISH"
                onDoubleClick={()=>deleteConfirm(c.slug)}
                title="Double click to delete" 
                size="sm" 
                key={i}
                outline color="dark">
                 {c.name} <FaTimes size={25}/>
                </Button>
            )
        })
    }


    const deleteConfirm=slug=>{
        let answer = window.confirm("do you want to delete this category")
        if(answer){
            deleteCategory(slug)
        }
    } 
    
    const deleteCategory = slug =>{
        removeCategory(slug,token).then(data=>{
            if(data.error){
                console.log(data.error)
            }else{
                setValues({...values,error:false,success:false,name:"",removed:!removed,reload:!reload})
            }
        })
    }   
    
    const clickSubmit = e => {
        e.preventDefault();
       
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
                     Successfully created Category
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
    const CategoryForm = () =>{
        return(
            <div>
            <Form onSubmit={clickSubmit} >
                <Label>Category name</Label>
                 <InputGroup>
                 <Input 
                 type="text"  
                 value={name}
                 onChange={handleChange}
                 placeholder="Category Name"
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
    <div>
    <div>
    
    {showSuccess()}
    {showError()}
    {showRemoved()}
    {CategoryForm()}
    </div>
    <hr/>
    <div onMouseMove={mouseMoveHandler}>
     {showCategories()}
    </div>
    </div>
    )
}
export default Category