import Document, { Html, Head, Main, NextScript } from 'next/document';
import getConfig from "next/config"
const {publicRuntimeConfig} = getConfig()
class MyDocument extends Document {
  
  setGoogleTags(){
    if(publicRuntimeConfig.PRODUCTION){
      return{
        __html:`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

       gtag('config', 'UA-174931186-1');
       
       `
      }
    }
  }
  
  
  
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link 
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" 
          rel="stylesheet" 
          integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" 
          crossOrigin="anonymous"
          />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174931186-1"></script>
          <link rel="shortcut icon" href="../../static/images/SV.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/> 
          <script dangerouslySetInnerHTML={this.setGoogleTags()}></script>
        </Head>
        <body>
          <Main />
          <script 
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/js/bootstrap.bundle.min.js" 
          integrity="sha384-ygbV9kiqUc6oa4msXn9868pTtWMgiQaeYH7/t7LECLbyPA2x65Kgf80OJFdroafW" 
          crossOrigin="anonymous">
          </script>
          
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
