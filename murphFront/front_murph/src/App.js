
import { useState } from 'react';
import './App.css';
import LoginPage from './components/Login/loginPage';
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './components/Home/home';
import MarketAnalysis from './components/socialMedia/IntagramPages/marketAnalysis';
import { refreshToken } from './api/client';
import { logout } from './api/auth';


function App({isInitiallyLogged}) {

  const [isLogged, setIsLogged] = useState(isInitiallyLogged);
  const handleLogin = () => setIsLogged(true);
  const handleLogout = () => setIsLogged(false);
  const [acc, setAcc] = useState(0);

  if(isLogged){
    setInterval(function refresh(){
      refreshToken();
    },  60000 * 29);
    setInterval(function bye() {
      logout()
    }, 60000 * 600)
  };

 

  return (
    <div className='App' > 
      <Routes >
          <Route 
            path="/"
            element={ 
              <LoginPage onLogin={handleLogin}/> 
            }/> 
          <Route 
            path="home/*" 
            isLogged={isLogged}
            element={ isLogged ?
                <Home isLogged={isLogged} onLogout={handleLogout} /> 
                :
                <Navigate to='/' />
          }>
            <Route 
                path='instagram/*'
                    element={   
                        <MarketAnalysis
                   
                        />
                    }>
                </Route>
          </Route>
         
      </Routes>
    </div>

    
  );
};
  
export default App;
