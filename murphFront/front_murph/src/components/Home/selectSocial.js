import React from "react";
import instagram from '../../assets/images/instagram.png';
import tiktok from '../../assets/images/tik-tok.png';
import news from '../../assets/images/news.png';
import { Link } from "react-router-dom";


const SelectSocial = ({onChange, callGeneral}) => {

    const handleChange = event => {
        onChange(event.target.name);
    };

    return (
        <> 
            <div style={{display:'flex', flexDirection:'column', padding:'5px', height:'100vh', width:'100px'}}>
                <Link to='/home/instagram'><button style={{margin:'20px', width:'50px', height:'50px', border:'none', borderRadius:'20px'}} name='instagram' onClick={handleChange} ><img name='instagram' style={{width:'30px', height:'30px'}}src={instagram}/></button></Link>
                <Link to='/home/tiktok'><button style={{margin:'20px', width:'50px', height:'50px', border:'none', borderRadius:'20px'}} name='tiktok' onClick={handleChange} ><img name='tiktok' style={{width:'30px', height:'30px'}}src={tiktok}/></button></Link>
                <Link to='/home/media-news'><button style={{margin:'20px', width:'50px', height:'50px', border:'none', borderRadius:'20px'}} name='media' onClick={handleChange} ><img name='media' style={{width:'30px', height:'30px'}}src={news}/></button></Link>
            </div>

        </> 
    )
}

export default SelectSocial;