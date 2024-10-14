import React, { useState } from 'react'
import Button from './Button.jsx';
import "./Navbar.css";


const Navbar = () => {
  const [signedUpPopUp,setSignedUpPopUp] = useState(false);
  const [loginUpPopUp,setLoginUpPopUp] = useState(false);


  return (
    <div className = "navbarContainer">
      <div className="navcontainerleft navcontainer">
        <a href="#">
          <img src="your-image-url" alt="Description" />
        </a>
      </div>
      <div className="navcontainercenter navcontainer">
        <div className="navLinks">Home</div>
        <div className="navLinks">Courses</div>
        <div className="navLinks">Explore</div>
        <div className="navLinks">Contact</div>
        <div className="navLinks">Article</div>
        <div className="navLinks">Tutorials</div>
      </div>
      <div className="navcontainerright navcontainer">
      <Button buttonText="Login"/>
        <Button buttonText="Signup"/>
      </div>
    </div>
  )
}

export default Navbar;