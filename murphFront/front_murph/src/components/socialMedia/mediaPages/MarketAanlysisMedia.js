import React, { useEffect, useState, useMemo } from "react";
import { getMedia, getMediaPost } from "../../../api/socialMedia";
import Loader from "../../Loader/loader";
import MediaCard from "./mediaCard";


const MarketAnalysisMedia = ({}) => {

    const [media, setMedia ] = useState([]);
    const [mediaPost, setMediaPost ] = useState([]);
    const [ error, setError ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [ searchBrand, setSearchBrand ] = useState("");
    const [ brandResult, setBrandResult ] = useState([]);

   

    useEffect(() => {
        setLoading(true)
        const handleProfileMedia = async () => {
            try {
                const mediaData = await getMedia();
                const mediaPostData = await getMediaPost();
                setMedia(mediaData)
                setMediaPost(mediaPostData)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
        }
       
        handleProfileMedia();
    }, [])
    
    const searchHandler = (searchBrand) => {
        setSearchBrand(searchBrand);
        if (searchBrand !== "") {
            const newBrandList = mediaPost.filter((media) => {
             return Object.values(media)
                .join(" ")
                .toLowerCase()
                .includes(searchBrand.toLowerCase());
        });
            setBrandResult(newBrandList);
        } else {
            setBrandResult(media);
        }
    };

    return (
        <>
        <div style={{display:'flex', flexDirection:'row'}}> 
       <div> 
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Domain</th>
                    </tr>
                </thead>
                <tbody>
                   {media !== undefined ? media.map((med, index) => 
                    <tr key={med.id}>
                        <th scope="row" key={med.id}>{index + 1 }</th>
                            <td>{med.name}</td>
                            <td><a href={`https://${med.domain}`} target='_blank' without rel="noreferrer">{med.domain}</a></td>       
                    </tr>
                    ) :
                     <Loader />}
                </tbody>
            </table>

            
                      
        </div>
            <MediaCard 
                mediaPost={searchBrand < 1 ? mediaPost : brandResult} 
                searchHandler={searchHandler} 
                searchBrand={searchBrand}
            />
        </div>
        
        </>
    )
    };

export default MarketAnalysisMedia;