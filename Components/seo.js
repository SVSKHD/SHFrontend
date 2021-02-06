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
                {/* seo verification */}
                <meta name = "googlebot" content = "index , follow"/>
                <meta name="yandex-verification" content="0143e918faae2a3d" />
                {/* link */}
                <link rel = "canonical" href = {canurl}/>
                {/* favicon */}
                <link rel="icon" href="../../static/images/SV.ico" />
                
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
                {/* verification */}
                <meta name="google-site-verification" content="3i45BskIaPwVJUqTqZZWPUPq5Vdysf1SSuUn4Fy0A0A" />
                <meta name="yandex-verification" content="7f3625bf938da52c" />
            </Head>
        </div>
    )

}
export default Seo