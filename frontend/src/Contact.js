import React from "react";
import "./FrontPage.css"
import NavBar from "./NavBar";
export default function Contact(){

    return(
        <div>
            <div>
        <ul class="navbaar">
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
   


        </div>

    );
}