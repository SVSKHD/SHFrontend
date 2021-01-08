import {Card,CardTitle,Button,Container,Row,Col} from "reactstrap"

const IndexCard = ({title,icon1,icon2,link1,link2}) =>{
    return(
       <div>
        <Card body>
          <CardTitle tag="h5">{title}</CardTitle>
          <Container>
          <Row>
          <Col>
          <Button className="ISH" href={link1} outline color="dark">{icon1}</Button>
          </Col>
          <Col>
          <Button className="ISH" href={link2} outline color="dark">{icon2}</Button>
          </Col>
          </Row>
          </Container>
        </Card>
       </div>
    )
}
export default IndexCard