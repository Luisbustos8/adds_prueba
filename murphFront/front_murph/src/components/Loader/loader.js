import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

const Loader = () => {

    return (
        <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
        </div>
    )
};

export default Loader;