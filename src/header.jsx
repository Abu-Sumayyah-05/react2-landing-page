import React from "react"
 import Group1 from './Group 12.svg';
 import Group2 from './Group 3.1.png';


  export default function Header() {
    return (
      <>
      <header>
    <nav className="nav1">
      <img src={Group1} alt="" className="nav_img" />
      <a href="#">
        <img src={Group2} alt="" className="nav2_img" />
        
    </a>
    <hr className="first_line" />
    </nav>
    </header>
    
    </>
    );
    
}