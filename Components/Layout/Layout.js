import NavBar from "./NavBar"
import Footer from "./Footer"
import Search from "../blog/search"
import {Container} from "reactstrap"

const Layout=(props)=>{
    return(
     <div>
      <Container fluid>
      <div className="Layoutnav">
      <br/>
      <NavBar/>
      <Search/>
      </div>
      {props.children}
      <div className="layoutFot">
      <Footer/>
      </div>
      </Container>
     </div>
    )
}
export default Layout