import React from 'react';
import Header from './header';

function Layout({ children, isLogged, onLogout, ...props}) {

  return (
    <div style={{width:'100%'}} >
      <Header
        style={{width:'100vh'}}
        isLogged={isLogged}
        onLogout={onLogout}
        {...props}
      />
      <main className="layout-main bordered">
        <section className="layout-content">{children}</section>
      </main>
      <footer className="layout-footer bordered"> UILL © Todos los derechos reservados </footer>
    </div>
  );
}

export default Layout;

