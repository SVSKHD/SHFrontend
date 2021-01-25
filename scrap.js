<DesiredCarousel/>
  <hr/>
  <div align="center">
  <Jumbotron className="indexj" fluid>
  <h1 className="display-2" >SevenHills Tirupati</h1>
  <h2 className="display-6">FrontPage of Tirupati & Tirumala</h2>
  </Jumbotron>
  </div>
  
  <div align="center">
    <Button href="/blogs" outline color="dark" size="sm"><b>Explore</b> <FaCompass className="load" size={30}/></Button>
  </div>

  <Container>
  <hr/>
  </Container>

  <Container>
  <Row>
  {/* social Profile */}
  <Col xs="12" lg="3">
  
  <IndexCard
  link1={"https://www.facebook.com/sevenhillstirupati7"}
  link2={"https://www.instagram.com/sevenhillstirupati/"}
  icon1={<FaFacebookF size={25}/>}
  icon2={<FaInstagram size={25}/>}
  icon3={<FaYoutube size={25}/>}
  />
  </Col>

  <Col xs="12" lg="5">
  <Card>
  <CardBody className="ISH">

  {!isAuth() &&(
  <ButtonGroup size="lg">
  <Button href="/signup"  target="_blank" outline color="warning">Signup</Button>
  <Button href="/signin"  target="_blank" outline color="success">Signin</Button>
  </ButtonGroup>
  )}
 
  <ButtonGroup className="ISH" size="lg">
  <Button href="/contact" target="_blank" outline color="dark">Contact</Button>
  <Button href="/youtube" target="_blank" outline color="danger"><FaYoutube size={20}/></Button>
  </ButtonGroup>
  </CardBody>
  </Card>
  </Col>
  
  <Col xs="12" lg="4">
  <Card>
    <CardBody>
      <h5>Signin and share your experinces in the way of Blogs</h5>
    </CardBody>
  </Card>
  </Col>
  

  
  
  </Row>
  <hr/>
  <Row>
    <Col>
    <Card>
    <CardBody>
      <Button className="ISH" size="sm" outline color="dark"><FaUserAlt size={25}/></Button>
     
      <ButtonGroup>
      {isAuth() && isAuth().role===0 && (
        <Link href="/user">
        <Button outline color="dark">{`${isAuth().name}'s Dashboard`}</Button>
        </Link>
      )}
      

      {isAuth() && isAuth().role===1 && (
    
        <Link href="/admin">
        <Button outline color="success">{`${isAuth().name}'s Dashboard`}</Button>
        </Link>
     
      )}
     

      {isAuth() && (
      <Button color="danger" onClick={() => signout(() => Router.replace(`/signin`))}>
       Signout
      </Button>  
      )}
      </ButtonGroup>
      
    </CardBody>
    </Card>
    </Col>


    <Col>
    <Card>
      <CardBody>
        <ButtonGroup size="lg">
          <Button href="/blogs" outline color="dark"><FaCompass size={30} className="load"/></Button>
          <Button href="/blogs" outline color="dark"><FaSpinner className="load" size={30}/></Button>
          <Button href="/blogs" outline color="dark"><FaGopuram  size={30}/></Button>
        </ButtonGroup>
      </CardBody>
    </Card>
    </Col>
  </Row>
  <hr/>
  </Container>
  

  <div>
  <Container>
  <Row>
  
  <Col>
  <Type/>
  </Col>

  <Col>
  <Card>
    <CardBody>
      <div align="center">
      <img height="150" width="150"
      src="../../static/images/SV.png"
      />
      </div>
    </CardBody>
  </Card>
  </Col>

  </Row>
  </Container>
  </div>
  <hr/>
  <Footer/>
  </div>



  import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

class MyDocument extends Document {
  setGoogleTags() {
    if (publicRuntimeConfig.PRODUCTION) {
      return {
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-174931186-1');
        `
      };
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css"
          />
          <link rel="stylesheet" href="/static/css/styles.css" />
          <React.Fragment>
            <script dangerouslySetInnerHTML={this.setGoogleTags()} />
          </React.Fragment>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
