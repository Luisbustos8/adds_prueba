import {Route, Navigate} from 'react-router-dom';

const PrivateRoute = ({isLogged, ...props}) => {

    console.log('private', isLogged)
    return isLogged ? <Route {...props} /> : <Navigate to="/" />;
};

export default PrivateRoute;