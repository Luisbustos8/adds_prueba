import React, {useState} from 'react';
import Checkbox from '../FormComponents/checkbox';


const LoginForm = ({ onSubmit, error }) => {

    const [credentials, setCredentials] = useState({
        username : '',
        password : ''
    });
    const [rememberMe, setRememberMe] = useState(false);

    const handleChangeLogin = event => {
        setCredentials(oldCredentials => {
            const newCredentials = {
                ...oldCredentials,
                [event.target.name] : event.target.value
            };
            return newCredentials
        });
    };
      const handleChecked = event => {
        setRememberMe(event.target.checked)
    };
    
    const handleSubmit = event => {
        event.preventDefault();
        onSubmit(credentials, rememberMe);
    };
    
    const {username, password} = credentials;

    return (
        <div style={{display:'flex', flexDirection:'row'}}>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor:'black', width:'120vh' }}><h1 style={{color:'white'}}>UILL</h1></div> 
            <div class='container' style={{ display:'flex', backgroundColor:'white', width:'50vh', alignItems:'center', marginLeft:'20px'}}>
                <div class="col-12">
                    <div>
                        <div class="card-body">
                            <form class='' onSubmit={handleSubmit}>
                                <label htmlFor="exampleFormControlInput1" class="form-label text-left d-flex">Usuario</label>
                                <input
                                    class="form-control mb-3"
                                    type='text'
                                    name='username'
                                    label='Nombre de usuario'
                                    value={username}
                                    placeholder='Usuario'
                                    onChange={handleChangeLogin}
                                />
                                <label class="form-label text-left d-flex">Contraseña</label>
                                <input 
                                    class="form-control mb-3"
                                    type='password'
                                    name='password'
                                    label='Contraseña'
                                    value={password}
                                    placeholder='Contraseña'
                                    onChange={handleChangeLogin}
                                />
                                <div class="col-12 text-center">
                                    <button
                                        type='submit' 
                                        class="btn btn-dark col-12"
                                        // disabled = { !username || !password }
                                    >
                                        Entrar
                                    </button>
                                </div>
                                <div class="form-check mt-2" >
                                    <label class="form-check-label">Recuérdame</label>
                                    <input 
                                        class="form-check-input"
                                        type='checkbox'
                                        onChange={handleChecked}
                                    />
                                </div>
                                {error ?
                    <div class="alert alert-danger" role="alert">
                        {error.message}
                    </div>
                    : 
                null}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default LoginForm;