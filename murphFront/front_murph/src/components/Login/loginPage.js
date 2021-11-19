import React, {useState} from 'react';
import { login } from '../../api/auth';
import LoginForm from './loginForm';
import Loader from '../Loader/loader';

const LoginPage = ({onLogin}) => {

    const [ error, setError ] = useState();
    const [ loading, setLoading ] = useState(false);
    const resetError = () => setError(null);

    const handleSubmit = async (credentials, rememberMe) => {
        setLoading(true);
       try {
            await login(credentials, rememberMe);
            onLogin()
       } catch (error) {
           console.log(error)
           setError(error)
           console.log(error)
       } finally {
            setLoading(false);
            if(!error){
                window.location.replace('/home')
            };
       }
      
    };

    console.log(error ? 'true' : 'false')
    return (    
        <div style={{display:'flex', flexDirection:'row', width:'50%', backgroundColor:'white'}}>  
                <LoginForm onSubmit={handleSubmit} error={error}/>
        </div>  
    )
};

export default LoginPage;