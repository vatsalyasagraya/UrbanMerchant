import React from "react";
import "./FrontPage.css"


export default function NavBar(){
return (
  <header class="l-header">
    <div class="navbaar">
      <ul>
        <li>
          <a href="#home" class="navbrand">
            <span class="um">U</span>rban<span class="um">M</span>erchant
          </a>
        </li>
        <li>
          <a href="/login" class="navitem">
            Login
          </a>
        </li>
        <li>
          <a href="/register" class="navitem">
            Register
          </a>
        </li>
      </ul>
    </div>
    <div class="alert success">
      <span class="closebtn"></span>
      <strong>Welcome !!</strong> Promote Your Local Bussiness With Us.
    </div>
  </header>
);
}
