import Head from "next/head"
import {APP_NAME, FBID} from "../config"

const Seo = ({title , mtitle ,  keywords , canurl , dcontent , ogcontent , ogdesc , ogurl , ogimg}) =>{
    return(
        <div>
            <Head>
                <title>{title}</title>
                <meta name="title" content={mtitle}/>
                <meta name ="description" content = {dcontent}/>
                <meta name ="keywords" content={keywords}/>
                <meta name = "robots" content = "index , follow"/>
                <meta name ="image" content={ogimg}/>
                <meta name = "googlebot" content = "index , follow"/>
                {/* link */}
                <link rel = "canonical" href = {canurl}/>
                
                {/* og */}
                <meta property ="og:title" content = {ogcontent}/>
                <meta property ="og:description" content = {ogdesc}/>
                <meta property ="og:type" content = "website"/>
                <meta property ="og:url" content = {ogurl}/>
                <meta property ="og:image" content = {ogimg}/>
                <meta property ="og:image:secure_url" content ={ogurl} />
                <meta property = "og:site_name" content={`${APP_NAME} | FrontPage of Tirupati and Tirumala`}/>

                {/* twitter */}

                <meta name = "twitter : site" content ="da" />
                <meta name = "twitter : card" content ="summary_large_image" />
                <meta name = "twitter : title" content ={mtitle} />
                <meta name = "twitter : description" content ={dcontent} />
                <meta name = "twitter : image" content = {ogimg} />

                {/* analytics and id */}
                <meta name = "fb:app_id" content={FBID}/>
            </Head>
        </div>
    )

}
export default Seo