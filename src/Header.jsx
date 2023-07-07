import React from "react";
import Logo from "./Images/Logo.png"
const Header=() =>{
return (
  <>
    <div className="header">
       <img src={Logo} height="105px"alt="logo"></img>
       <h1>KEEP NOTES</h1>
    </div>
  </>
)
}
export default Header;