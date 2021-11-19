import React from "react";
import FilterUser from "../../FormComponents/filterUser";

const MediaCard = ({media, mediaPost, searchHandler, searchBrand }) => {

    return (<div>
        <div class='d-flex justify-content-between flex-wrap ms-5 mt-3 mb-3 me-5' style={{flexDirection:'row'}}>
            <FilterUser
                data={mediaPost}
                onFilter={searchHandler}
                filter={searchBrand}
                placeholder='Filtra por marca...'
            />
              
                {mediaPost.map((media, index) => (
                    <div key={index} class="card mb-3" style={{width: '22rem'}}>
                        <img src={media.image} class="card-img-top" style={{height: '22rem', width:'22rem'}} />
                        <div class="card-body">
                            <h5 class="card-title">{media.title}</h5>
                            <h6>{media.sectionTitle}</h6>
                            <a href={media.link} target='_blank' without rel="noreferrer" class="btn btn-primary">Ir al artículo</a>
                        </div>
                    </div>
                ))}
            </div>
    </div>)
}

export default MediaCard;