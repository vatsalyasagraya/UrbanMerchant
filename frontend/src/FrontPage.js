import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./NavBar";

import Contact from "./Contact";

import "./FrontPage.css";
export default function FrontPage() {
  return (
    <div>
      <NavBar />
     
      <section class="about section " id="about">
        <h2 class="section-title">About</h2>

        <div class="about__container bd-grid">
          <div class="about__img"> <img src="https://miro.medium.com/max/1200/1*sh1rOIDGJQBNhSunobPszw.jpeg"/>
            <p class="about__text">
            <h4 class="imp1">A marketplace to showcase innovative products across various categories
curated by local talent!
</h4>
            </p></div>
          <div>
    <img  src="https://img.freepik.com/free-vector/support-local-business-concept_23-2148593677.jpg?w=740&t=st=1650729896~exp=1650730496~hmac=c58b0c857f0b822927a02219f6f0077ad7658a56c460715db231cebc56d73325"/>
</div>
          
        </div>
      </section>
      <div><h1> <a class="imp" href="https://www.juscorpus.com/vocal-for-local-government-initiatives-and-outcomes/" class="btn">Govt Info

</a></h1>

      </div>

      <section class="skills section" id="skills">
                

                <div class="skills__container bd-grid">          
                    <div>
                        <h2 class="skills__subtitle">Benefits For You!!</h2>
                        <p class="skills__text"></p>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-html5 skills__icon'></i>
                                <span class="skills__name"><h3 class="ap">Recognition</h3></span> 
                               
    
                               
                            </div>
                            <div class="skills__bar skills__html">

                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-css3 skills__icon'></i>
                                <span class="skills__name"><h3 class="ap">Convenience</h3></span>
                                
                            </div>
                            <div class="skills__bar skills__css">
                            
                                
                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxl-javascript skills__icon' ></i>
                                <span class="skills__name"><h3 class="ap">Marketing</h3></span>
                            </div>
                            <div class="skills__bar skills__js">
                                
                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                        </div>
                        <div class="skills__data">
                            <div class="skills__names">
                                <i class='bx bxs-paint skills__icon'></i>
                                <span class="skills__name"><h3 class="ap">Transparency</h3></span>
                            </div>
                            <div class="skills__bar skills__ux">
                                
                            </div>
                            <div>
                                <span class="skills__percentage"></span>
                            </div>
                           
                        </div>
                    </div>
                    <div>              
                        <img src="https://img.freepik.com/free-vector/vocal-local-campaign-india-independence-day-poster-vector-modern-banner-illustration_460848-1940.jpg?w=1060"/>
                   </div>
                    
                </div>
            </section>
            <div class="skills">
           < h2 class="skills__subtitle"> ABOUT THE DEVELOPERS </h2>
                        <p class="skills__text">This website is developed by the students of Malaviya National Institute of Technology</p>
    <div class="skill-row1">
      <img class="ab" src="https://i.ibb.co/2YCRsQC/1650754307128.jpg"  alt="Aditya"/>
      <h3>Aditya Gupta</h3>
      <p class="dev">Hey I am a sophomore at MNIT Jaipur Specializing in electronic and communication engineering Current and emerging technology is something I am passionate aboutPassionate about android App and Web Development ,   Apart from it, I also have knack for graphic and UI/UX design .	</p>
    </div>
    <div class="skill-row2">
    <img class="bb" src="https://i.ibb.co/h8fVCKD/1650755487120.jpg" alt="Sahil"/>
      <h3>Sahil Jagwani</h3>
      <p class="dev" >Heya! I am a tech enthusiast, a guy who is passionate about his goals and is always ready to push his limits to achieve them. I am interested in the domain of web development and has intermediate level knowledge of the MERN stack. I aim to work as a software development Engineer in a renowned firm.
.</p>
      
    </div>
    <div class="skill-row1">
      <img class="ab" src="https://i.ibb.co/ZNRxRBG/1650756908789.jpggi" alt="Romil"/>
      <h3>Romil Modi</h3>
      <p class="dev" >A resolute Undergrad right now studying in MNIT , Jaipur who is keen in knowing and learning about new technologies and software advancements having high enthusiasm and zeal to work in Tech indutry along the lines of fervent approach to multitask and handle pressure..</p>
    </div>
    <div class="skill-row2">
    <img class="bb" src="https://i.ibb.co/wysV07d/1650755428346.jpg"  alt="Vatsalya"/>
      <h3>Vatsalya Sagraya</h3>
      <p class="dev">Hello! I am Vatsalya, a student at MNIT Jaipur pursuing Bachelor of Technology in Electronics and Communication Engineering. I am a Coding Enthusiast, a Web Developer and I am looking forward to build some more interesting and cool stuff in this field.</p>
      
    </div>
  </div>
  <footer id="footer_section" class="footer">
        <p class="footer__title">UrbanMerchant</p>
        <div class="footer__social">
           
            <a href="#" class="footer__icon"><i class='bx bxl-instagram' ></i></a>
            <a href="#" class="footer__icon"><i class='bx bxl-twitter' ></i></a> 
            <a class="footbtn" href="https://contactus.tiiny.site">Contact Us</a>
            <a class="footbtn" href="romilmodi2014@gmail.com">About Us</a>

            
        </div>
        <p class="copy">© Copyright all right reserved</p>
    </footer>
  
    </div>
    
  );
}
