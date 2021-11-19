import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getAccountTkDetail } from "../../../api/socialMedia";
import Loader from "../../Loader/loader";
import tiktok from '../../../assets/images/tik-tok.png';
import check from '../../../assets/images/check-circle.svg';
import noCheck from '../../../assets/images/x-lg.svg';
import user from '../../../assets/images/people-fill.svg';

const ProfileAnalyticsTk = ({ ...props}) => {

    const [tikUserProfile, setTikUserProfile ] = useState([]);
    const [error, setError] = useState([]);
    const [loading, setLoading] = useState([]);

    const {id} = useParams();
    const param = id.split('tik-tok:')

    useEffect(() => {
        setLoading(true)
        const handleProfile = async () => {
            try {
                const tikTokData = await getAccountTkDetail(param[1]);
                setTikUserProfile(tikTokData)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }  
        }
        handleProfile();
        }, [])

    console.log(tikUserProfile)

    return (
        <>
        <div>
            <Link to='/home/tiktok'>
                <p>Volver</p>
            </Link> 
        </div>
        <div>
            {loading ? 
                <Loader /> 
                    :
            <div>
                <div class="card mt-4">
                    <div class="card-body" style={{boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)',  backgroundColor: '#092540', width:'900px'}}>
                        <img src={'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/d5bfe555ac0b4ffb0b46a19286fc6415~c5_720x720.jpeg?x-expires=1637222400&x-signature=oWeHVdXN7ynLNbkw7MjTggvZmYc%3D'} class="img-rounded float-start rounded-circle m-2" alt="profile-image" style={{height:'230px', width: '230px', color:'white'}}/>
                        <div class='d-flex justify-content-between' style={{ flexDirection: 'row', border: '3px solid #092540', boxShadow: '10px',  backgroundColor: 'white'}}>
                            <div class='d-flex justify-content-start' style={{ flexDirection: 'column'}}>
                                <h1 class='card-text d-flex justify-content-start p-1' style={{fontSize: '18px'}}><b>{tikUserProfile.nameTk}</b></h1>
                                <p class='card-text d-flex justify-content-start p-1' style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%) box-shadow: 0px 3px 10px rgba(0,0,0,.25)'}}><img src={tiktok} style={{width:'20px', height:'20px'}}/> &nbsp;@{tikUserProfile.usernameTK}</p>
                                <p class='card-text d-flex justify-content-start p-1'>{tikUserProfile.bioTK}</p>
                                {console.log(tikUserProfile.nameTK)}
                            </div>  
                        </div>
                        <div class="d-flex justify-content-between mt-3" style={{flexDirection:'row', backgroundColor: 'white', boxShadow: '10px'}}>
                            <p class='card-text'> Private Account:{ <img src={tikUserProfile.isVerifiedTK === true ? check : noCheck} style={{width:'18px'}} />} </p>
                            &nbsp;&nbsp;
                            <p class='card-text'><img src={user} />Following:&nbsp; &nbsp;  {String(tikUserProfile.followingCount).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
                            &nbsp;&nbsp;
                            <p class='card-text'><img src={user} /> Followers:&nbsp; &nbsp; {String(tikUserProfile.followerCountTK).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
                        </div>
                        <div class="d-flex justify-content-between mt-3" style={{flexDirection:'column', backgroundColor: 'white', boxShadow: '10px'}}>
                            <p class='card-text d-flex justify-content-start p-1'>Video Count:{tikUserProfile.videoCountTK}</p>
                            <a href={tikUserProfile.linkBioTK} target="_blank" without rel="noreferrer" class='card-text d-flex justify-content-start p-1'>Ir a enlace</a>
                        </div>
                    </div>
                </div>
            
            </div>
            }
        </div>

       </>
            
    )


}

export default ProfileAnalyticsTk;