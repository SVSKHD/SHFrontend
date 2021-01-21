import {Card,CardTitle,Button,Container,Row,Col} from "reactstrap"

const IndexCard = ({title,icon1,icon2,link1,link2,link3,icon3}) =>{
    return(
       <div>
        <Card body>
          <CardTitle tag="h5">{title}</CardTitle>
          <Container>
          
          <Button 
          className="ISH" 
          target="_blank" 
          href={link1} 
          outline color="dark">
            {icon1}
          </Button>
         
         
          <Button 
          className="ISH" 
          target="_blank" 
          href={link2} 
          outline color="dark">
            {icon2}
          </Button>

          <Button 
          className="ISH" 
          target="_blank" 
          href={link3} 
          outline color="dark">
            {icon3}
          </Button>
          
         
          </Container>
        </Card>
       </div>
    )
}
export default IndexCard