import React from "react";
import { Routes, Route} from "react-router-dom";
import MarketAnalysisMedia from "./mediaPages/MarketAanlysisMedia";
import MediaCard from "./mediaPages/mediaCard";
import TableMedia from "./mediaPages/tableMedia";

const MediaNews = () => {

    return (
        <div style={{display:'flex', flexDirection:'column'}}>
            <div >
                <Routes>
                    <Route 
                        path='media-news/*'
                        element={   
                            <MarketAnalysisMedia
                            />
                        }>
                    </Route>
                        <Route 
                            path='/mediacard'
                            element={
                               <MediaCard  />
                            }
                        />
                </Routes> 
            </div>
        </div>
    )
}

export default MediaNews;