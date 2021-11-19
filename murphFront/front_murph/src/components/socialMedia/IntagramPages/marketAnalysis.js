
import React, { useEffect, useMemo, useState } from "react";
import { getAccountIG } from "../../../api/socialMedia";
import Loader from "../../Loader/loader";
import InstaTable from "./instaTable";

const MarketAnalysis = ({ handleId }) => {

    const [ instaUserData, setInstaUserData ] = useState([]);
    const [ error, setError ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    const [id, setId] = useState()

    const columns = useMemo(
        () => [
                {
                    Header: '#',
                    accessor: 'id',
                        
                },
                {
                    Header: 'Name',
                    accessor: 'nameIG'  
                },
                {
                    Header: 'Username',
                    accessor: 'usernameIG'  
                },
                {
                    Header: 'Following',
                    accessor: 'followingCountIG'  
                },
                {
                    Header: 'Followers',
                    accessor: 'followerCountIG'  
                },
                {
                    Header: 'Followers Quality',
                    accessor: 'fq'  
                },
                {
                    Header: 'Engagement Rate',
                    accessor: 'er'  
                },
                {
                    Header: 'Potencial Reach',
                    accessor: 'potential'  
                },
                {
                    Header: 'Relevance',
                    accessor: 'relevance'  
                }, 
            ])
                   

    useEffect(() => {
        setLoading(true)
        const handleProfile = async () => {
            try {
                const instaUserData = await getAccountIG();
                setInstaUserData(instaUserData)
                setId(instaUserData.id)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
        }
       
        handleProfile();
        }, [])





    return (
        <>
        {loading ? <Loader /> :
            
        <InstaTable columns={columns} data={instaUserData} loading={loading}  />
        
        }

        </>  
    )
};

export default MarketAnalysis;