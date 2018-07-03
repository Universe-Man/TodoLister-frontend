import React from 'react';
import '../assets/Header.css'

const Header = (props) => {
    return(
      <div className="Header">
        {props.loggedIn ? (<button className="Header-button" onClick={props.logOut}>Logout</button>) : (<button className="Header-button" onClick={props.logIn}>Login</button>)}

        <h2 className="Main-title">Todo-Lister</h2>
      </div>
    )

}

export default Header;
