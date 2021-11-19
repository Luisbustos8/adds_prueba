import React from "react";
import Loader from "../../Loader/loader";
const TableMedia = ({columns, data}) =>{

    

    return (
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
                   {data !== undefined ? data.map((med, index) => 
                    <tr key={med.id}>
                        <th scope="row" key={med.id}>{index + 1 }</th>
                            <td>{med.name}</td>
                            <td>{med.domain}</td>       
                    </tr>
                    ) :
                     <Loader />}
                </tbody>
            </table>
                      
        </div>)

}

export default TableMedia;