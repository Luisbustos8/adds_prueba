import React, {useState, useEffect} from "react";
import { useParams } from "react-router";
import { getAccountIgDetail } from "../../../api/socialMedia";
import check from '../../../assets/images/check-circle.svg';
import noCheck from '../../../assets/images/x-lg.svg';
import user from '../../../assets/images/people-fill.svg';
import stats from '../../../assets/images/stats.png';
import instagram from '../../../assets/images/instagram.png';
import Loader from "../../Loader/loader";
import profileImage from '../../../assets/images/user.png';
import { Link } from "react-router-dom";


const foto = 'https://scontent-mad1-1.cdninstagram.com/v/t51.2885-19/s150x150/209067720_332366435102246_8802930654463324331_n.jpg?_nc_ht=scontent-mad1-1.cdninstagram.com&_nc_cat=1&_nc_ohc=RsTLqU35j7UAX8JoeTa&edm=ALCvFkgBAAAA&ccb=7-4&oh=87f49ddfadab71a275eb501c15d3ec1e&oe=619D73F4&_nc_sid=643ae9'


const ProfileAnalytics = ({history, ...props}) => {

    const {id} = useParams();
    const param = id.split('instagram:')

    console.log(param[1])

    const [profile, setProfile] = useState([])
    const [error, setError] = useState([])
    const [loading, setLoading] = useState([])

    useEffect(() => {

        setLoading(true)
        const handleProfile = async () => {
            try {
                const instaUserProfile = await getAccountIgDetail(param[1]);
                setProfile(instaUserProfile)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }  
        }
        handleProfile();
        }, [])

    console.log(profile)

    
    return (
        <div>
             <div>
            <Link to='/home/instagram'>
                <p>Volver</p> 
            </Link>
        </div>
            { loading ? <Loader /> :
            <div class="card mt-4">
                <div class="card-body" style={{boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)',  backgroundColor: '#092540'}}>
                    <img src={ profileImage} class="img-rounded float-start rounded-circle m-2" alt="profile-image" style={{height:'230px', width: '230px', color:'white'}}/>
                    <div class='d-flex justify-content-between' style={{ flexDirection: 'row', border: '3px solid #092540', boxShadow: '10px',  backgroundColor: 'white'}}>
                        <div class='d-flex justify-content-start' style={{ flexDirection: 'column'}}>
                            <p class='card-text d-flex justify-content-start p-1' style={{fontSize: '18px'}}>Name: &nbsp;<b>{profile.nameIG}</b></p> 
                            <p class='card-text d-flex justify-content-start p-1' style={{ background: 'radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%) box-shadow: 0px 3px 10px rgba(0,0,0,.25)'}}><img src={instagram} style={{width:'20px', height:'20px'}}/> &nbsp;@{profile.usernameIG}</p>
                            <p class='card-text d-flex justify-content-start p-1'>Bio:{profile.bioIG}</p>
                            <p class='card-text d-flex justify-content-start p-1'>Business Category: {profile.businessCategoryNameIG}</p>
                            <p class='card-text d-flex justify-content-start p-1'>Business Email: {profile.businessEmailIG}</p>
                            <p class='card-text d-flex justify-content-start p-1'>Email: {profile.emailIG}</p>
                        </div>
                        <div class='d-flex justify-content-start'style={{ flexDirection: 'column', alignItems:'flex-start', marginRight:'15px', paddingTop:'5px'}}>
                            <p class='card-text'><img src={user} /> &nbsp; Followers: &nbsp; {profile.followerCountIG}</p>
                            <p class='card-text'><img src={user} /> &nbsp; Following:&nbsp;  {String(profile.followingCountIG).replace(/(.)(?=(\d{3})+$)/g,'$1,')}</p>
                            <p class='card-text' style={{fontSize:'19px'}}><img src={null} style={{width:'18px'}} /> &nbsp; Followers Quality: <b>{profile.fq}</b></p>
                            <p class='card-text'>Business Intagram: {profile.isBussinessIG === true ? 'true' : 'false'}</p>
                            <p class='card-text'> <img src={null} style={{width:'18px'}} /> &nbsp; Private Account: {profile.isPrivateIG === true ? 'true' : 'false'}</p>
                            <p class='card-text'> Verified Account: {profile.isVerifiedIG === true ? <img src={check} /> : <img src={noCheck}/>} </p>
                            <p class='card-text'>Num Post: {profile.postCountIG}</p>
                        </div>
                    </div>
                    <div class='d-flex justify-content-start mt-3' style={{flexDirection:'column' , border:'3px solid #092540', padding: '20px' ,  backgroundColor: 'white'}}>
                        <div class='d-flex justify-content-between mb-1' style={{flexDirection:'row',  justifyContent:'space-around'}}>
                            <p class='card-text' style={{fontSize: '20px', border:'3px solid #092540', borderRadius:'10px', padding: '20px', boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}>Engagement Rate: <b>{profile.er}</b></p>
                            <p class='card-text' style={{fontSize: '20px', border:'3px solid #092540', borderRadius:'10px', padding: '20px', paddingBottom:'15px', boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}>Average followers of followers: <b>{profile.fafgIG}</b></p>
                            <p class='card-text' style={{fontSize: '18px', border:'3px solid #092540', borderRadius:'10px', paddingTop:'20px', paddingLeft:'15px', paddingRight:'15px', boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}>Average followers of the followed:<b> {profile.fafrIG}</b></p>
                        </div>
                        <div class='d-flex justify-content-between mb-1'  style={{flexDirection:'row', border:'3px solid #092540',borderRadius:'10px', padding: '20px',  backgroundColor: 'white',boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}>
                            <p class='card-text' style={{fontSize: '20px',}}>Num FG Scanned: {profile.numFgScannedIG}</p>
                            <p class='card-text' style={{fontSize: '20px',}}>Num FR Scanned: {profile.numFrScannedIG}</p>
                            <p class='card-text' style={{fontSize: '20px',}}>Num Scrapped: {profile.numScrapped}</p>
                        </div>
                        <div class='d-flex justify-content-between'  style={{flexDirection:'row',  backgroundColor: 'white', marginTop:'10px'}}>
                            <p class='card-text' style={{border: '3px solid #092540', borderRadius:'10px', padding: '15px', fontSize: '20px', boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}><b><img src={stats} style={{width:'50px'}} /> &nbsp;Potential:{profile.potential}</b></p>
                            <p class='card-text' style={{border: '3px solid #092540', borderRadius:'10px', padding: '15px', fontSize: '20px', boxShadow: '5px 5px 5px 3px rgba(9, 37, 64, 0.4)'}}><b>Relevance: {profile.relevance}</b></p>  
                        </div>
                    </div>
                </div>
            </div>
            }   
        </div>
    )
};

export default ProfileAnalytics;