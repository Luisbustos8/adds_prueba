import React from "react";
import { Routes, Route } from "react-router-dom";
import MarketAnalysisTK from "./TiktokPages/MarketAnalysisTk";
import ProfileAnalyticsTk from "./TiktokPages/profileAnalyticsTk";



const TikTok = () => {

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div >
                <Routes>
                    <Route 
                        path='tiktok/*'
                        element={   
                            <MarketAnalysisTK
                            />
                        }>
                    </Route>
                        <Route 
                            path='/:id'
                            element={
                                <ProfileAnalyticsTk  />
                            }
                        />
                </Routes> 
            </div>
        </div>
    )
}

export default TikTok;