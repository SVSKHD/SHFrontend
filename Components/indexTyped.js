import Typed from "react-typed"
const Type = () =>{
return(
    <div className="typed">
               <b><Typed
         
                className="display-6 text-warning"       
                strings={["Here you can find Stories", 
                           "Here you can find Services", 
                           "Here you can find Tirupati",
                           "Here you can find Tirumala",
                        ]}
                typeSpeed={80}
                backSpeed={80}
                backDelay={1}
                loop
                smartBackspace
                >
        </Typed>
        </b>
    </div>
)
}
export default Type