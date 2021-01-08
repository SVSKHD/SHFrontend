import NavBar from "./NavBar"
import Footer from "./Footer"
import Search from "../blog/search"
const Layout=(props)=>{
    return(
     <div>
      <div className="Layoutnav">
      <NavBar/>
      <Search/>
      </div>
      {props.children}
      <div className="layoutFot">
      <Footer/>
      </div>
     </div>
    )
}
export default Layout