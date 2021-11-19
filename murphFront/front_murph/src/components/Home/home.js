import React, { useState } from "react";
import SelectSocial from "./selectSocial";
import Instagram from '../socialMedia/instagram';
import TikTok from '../socialMedia/tikTok';
import MediaNews from '../socialMedia/mediaNews';
import Layout from "../Layout/layout";


const Home = ({isLogged, handleLogout}) => {

    const [social, setSocial] = useState();

    const handelSocialMedia = (social) => {
        switch(social){
            case 'instagram':
                return (
                    <Instagram path='/instagram' /> 
                );
            case 'tiktok':
                return  (  
                    <TikTok path='/tik-tok' />
                );
            case 'media':
                return (
                    <MediaNews path='/media-news' />
                )
            default: 
                return (
                    
                        <h1>Selecciona una Red Social</h1>
                    
                )
        };
    };

    console.log('hola')
    


    return (
        <>
        <Layout isLogged={isLogged} onLogout={handleLogout}>
        <div class="d-flex flex-row">
            <div class="d-flex justify-content-center">
                 <SelectSocial onChange={setSocial} />
            </div>
            <div class="d-flex justify-content-center">
                {handelSocialMedia(social)}
            </div>
        </div>
        </Layout>
        </>
    )
};
export default Home;