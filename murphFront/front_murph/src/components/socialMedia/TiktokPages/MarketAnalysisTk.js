import React, { useEffect, useState, useMemo } from "react";
import { getAccountTK } from "../../../api/socialMedia";
import Loader from "../../Loader/loader";
import TkTable from "./tkTable";



const MarketAnalysisTK = () => {
    const [ tikUserData, setTikUserData ] = useState([]);
    const [ error, setError ] = useState([]);
    const [ loading, setLoading ] = useState(false);
    

    const columns = useMemo(
        () => [
                {
                    Header: '#',
                    accessor: 'id',       
                },
                {
                    Header: 'Name',
                    accessor: 'nameTk'  
                },
                {
                    Header: 'Username',
                    accessor: 'usernameTK'  
                },
                {
                    Header: 'Following',
                    accessor: 'followingCount'  
                },
                {
                    Header: 'Followers',
                    accessor: 'followerCountTK'  
                },
            ]);
    
    useEffect(() => {
        setLoading(true)
        const handleProfileTK = async () => {
            try {
                const tikData = await getAccountTK();
                setTikUserData(tikData)
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            } 
        }
       
        handleProfileTK();
    }, [])   
    
    console.log(tikUserData)

    return (
        <>
        {loading ? 
            <Loader /> 
                :
            <TkTable columns={columns} data={tikUserData} />
        }
        </>
    )
}

export default MarketAnalysisTK;