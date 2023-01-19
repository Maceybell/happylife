import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";


const Header = () => {
  const dispatch = useDispatch()
  const email = useSelector(state => state.email)
  const logout = () => {
    dispatch({type: 'LOGOUT'})
  }


  return (
    <header>
      <Link to ="/"><div className="hl">HL</div></Link>
      
      <div className="header-menu">
        
        <div className="profile">{email !== ""? <Link to ="/product">My Profile</Link>: <div><div className="dropdown">
          <button className="dropbtn" a href="#">
            How It Works
          </button>
          <div className="dropdown-content">
            <button className="nav-btn">The Process</button>
            <button className="nav-btn">Plans</button>
          </div>
        </div>
        <div className="dropdown">
          <button className="dropbtn">About</button>
          <div className="dropdown-content">
            <button className="nav-btn">FAQ</button>
            <button className="nav-btn">Why HappyLife</button>
          </div>
        </div>
        <button className="contact">Contact</button>
        </div>}</div>
      </div>
      

      {email !== "" ? <Link to= "/auth"><button className="sign-out" onClick={logout}>Sign Out</button></Link> : <button className="sign-out"> <Link to= "/auth">Sign Up</Link></button>}

      
      
     
    </header>
  );
};

export default Header