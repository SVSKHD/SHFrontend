import React from 'react';
import { Card, Button, CardTitle, CardText, Container } from 'reactstrap';
import {FaUser} from "react-icons/fa"
import Link from "next/link"


const RelatedCard = ({title,author,link}) =>{ 
return(
<div>
<Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
<Button size="sm" outline color="light">
<Link href={link}>
    <FaUser size={30}/>
</Link>
</Button>
<br/>
<CardTitle tag="h5"><b>{author}</b></CardTitle>
<CardText></CardText>
</Card>
</div>
)
}
export default RelatedCard