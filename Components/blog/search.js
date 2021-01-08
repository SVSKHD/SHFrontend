import Link from "next/link"
import renderHTML from "react-render-html"
import moment from "moment"
import {API} from "../../config"
import {useState,useEffect} from "react"
import {listSearch} from "../../actions/blog"
import {Form,Input,
    InputGroup, 
    InputGroupAddon ,
    Button,Container
    ,Card,CardBody,CardImg,CardImgOverlay,
    CardTitle,Row,Col} from "reactstrap"
import {FaSearch,FaShareSquare} from "react-icons/fa"


const Search = () =>{
const [values,setvalues] = useState({
    search:undefined,
    results:[],
    searched:false,
    message:""
}) 
const {search,results,searched,message}=values

const searchSubmit = e =>{
e.preventDefault()
listSearch({search}).then((data=>{
   setvalues({ 
    ...values,
    results:data,
    searched:true,
    message:`${data.length} blogs found`
   })
}))
}

const searchedBlogs = (results = []) =>{
return(
    <div className="jumbotron bg-white">
      {message && <p className="pt-4 text-muted font-italic">{message}</p>}
      <Row>
      {results.map((blog,i)=>{
         return (
         <React.Fragment>
         <Col>
         <Card className="ISH" key={i}>
         <a href={`/blogs/${blog.slug}`}>
         <Card className="zoom" inverse>
         <CardImg width="100%" src={`${API}/blog/photo/${blog.slug}`}  alt="Card image cap" />
         <Row>
         <Col>
         <Container>
         <h6 style={{
             color:" #004d7a",
             "&:hover": {
                background: "#efefef"
              },
             }}>
         <b>{blog.title}</b>
         </h6>
         </Container>
         </Col>
         </Row>
         </Card>
         </a>
         </Card>
         </Col>
         </React.Fragment>
           )
      })}
      </Row>
    </div>
)
}

const handleChange = e =>{
    setvalues({...values,search:e.target.value,searched:false,results:[]})
}



const SearchForm = () =>{
    return(
        <div>
           <Form onSubmit={searchSubmit}>
            
            <InputGroup>
            <Input
            type="search"
            className="form-control"
            onChange={handleChange}
            placeholder="Search Your Favourites"
            />
            <InputGroupAddon addonType="append">
            <Button
            type="submit"
            size="sm"
            outline color="dark"
            >
            <FaSearch size={25}/>
            </Button>
            </InputGroupAddon>

            </InputGroup>
           </Form>
        </div>
    )
}
return(
<div>
    <br/>
    <Container>
    {SearchForm()}
    {searched && searchedBlogs(results)}
    </Container>
</div>
)
}
export default Search