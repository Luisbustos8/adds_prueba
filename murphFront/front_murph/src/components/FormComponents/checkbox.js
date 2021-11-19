import React from 'react';

function Checkbox({label, className, handleChange, name}){

    return (
            <label className={className}>
                <input 
                name={name}
                className={className}
                type='checkbox'
                onChange = { (event) => handleChange(event) }
                />
                {label}
            </label>
    )
}

export default Checkbox;
