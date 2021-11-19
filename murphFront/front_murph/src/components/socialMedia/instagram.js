import React from "react";
import { Routes, Route} from "react-router-dom";
import MarketAnalysis from "./IntagramPages/marketAnalysis";
import ProfileAnalytics from "./IntagramPages/profileAnalytics";



const Instagram = () => {

    

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div >
                <Routes>
                    <Route 
                        path='instagram/*'
                        element={   
                            <MarketAnalysis
                            />
                        }>
                    </Route>
                        <Route 
                            path='/:id'
                            element={
                                <ProfileAnalytics />
                            }
                        />
                </Routes> 
            </div>
        </div>
    )
}

export default Instagram;