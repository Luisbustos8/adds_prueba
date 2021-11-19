import React, { useRef } from "react";


const FilterUser = ({onFilter, filter, placeholder}) =>{

    const inputSearch = useRef('');
    
    const getUserName = () => {
        onFilter(inputSearch.current.value)
    };

    return (
        <div class='p-3 mb-3'>
            <input
                class='form-control'
                placeholder={placeholder}
                ref={inputSearch}
                type='text'
                value={filter}
                onChange={getUserName}
            />
        </div>
    )
} 

export default FilterUser;