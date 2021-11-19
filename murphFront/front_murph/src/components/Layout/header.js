import React from "react";
import { logout } from "../../api/auth";


const Header = ({isLogged, onLogout}) => {

  const handleLogout = () => {
    logout().then(onLogout).then()
  };

  return (
    <nav class="navbar navbar-light bg-black">
      <div class="container-fluid">
        <h1 style={{display:'flex', alignItems:'center', color:'white'}}>
          UILL
        </h1>
        <button 
          type="button" 
          class="btn btn-light"
          onClick={handleLogout}
        >
          Logout
        </button> 
      </div>
    </nav>
  )
}

export default Header;
