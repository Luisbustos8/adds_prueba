import React from 'react';

// creamos una funcion que recibe un componente
function withApi( WrappedComponent ) {
    // creamos un nuevo componente
    const WithApi = (props) => {
        const [error, setError] = React.useState(null);
        const [isLoading, setIsLoading] = React.useState(false);

        return ( 
            <WrappedComponent 
                error={error} 
                isLoading={isLoading} 
                setError={setError} 
                setIsLoading={setIsLoading} 
                {...props} 
            />
        );
    };
    
    return WithApi;
};

export default withApi;