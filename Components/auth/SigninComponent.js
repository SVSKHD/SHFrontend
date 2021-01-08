import {useState,useEffect} from "react"
import {Form,FormGroup,Input,InputGroup,InputGroupAddon,Label,Container,Button,Card} from "reactstrap"
import {FaSignInAlt} from "react-icons/fa"
import Router from "next/router"
import { authenticate, isAuth, signin } from "../../actions/auth";

const SigninComponent =()=>{
const [values,setValues]=useState({
    email:"",
    password:"",
    error:"",
    loading:false,
    message:"",
    showForm:true
});
const {email,password,error,loading,message,showForm}=values

useEffect(()=>{
    isAuth() && Router.push("/")
})

const handleSubmit = e =>{
    e.preventDefault()
    setValues({...values,loading:true,error:false});
    const user= {email,password}

    signin(user).then(data=>{
        if(data.error){
            setValues({...values,error:data.error,loading:false})
        }else{
            authenticate(data,()=>{
                if(isAuth() && isAuth().role === 1){
                    Router.push(`/admin`)
                }else{
                    Router.push(`/user`)
                }
            })
        }
    })
}

const handleChange = name => e => {
    setValues({ ...values, error: false, [name]: e.target.value });
};

const ShowLoading = () =>(loading ? <div className="alert alert-info">Loading...</div>:"")
const ShowError = () =>(error ? <div className="alert alert-danger">{error}</div>:"")
const ShowMessage = () => (message ? <div className="alert alert-success">{message}</div>:"")

const SigninForm = ()=>{
    return(
    <div>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
         <Card>
         <Container>
         
         <Label>UserName</Label>
         <Input 
         type="text" 
         name="username" 
         onChange={handleChange('email')}
         value={email}
         placeholder="Email" 
         />
         <Label>Password</Label>
         <Input 
         onChange={handleChange('password')}
         type="password" 
         name="password"
         value={password} 
         placeholder="password" 
         />
        <Button className="SH" outline color="dark">
        <FaSignInAlt size={25}/>  
        </Button>
        
        </Container>
        </Card>
        </FormGroup>
        </Form>
        </div>
    )
}

return(
<div>
{ShowError()}
{ShowLoading()}
{ShowMessage()}
{SigninForm()}
</div>
)
}
export default SigninComponent