import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import videoBG from '/src/assets/pexels-pavel-danilyuk-5495890 (1080p).mp4';
import cv from '/src/assets/Staci Washington Resume [2024].docx.pdf';
import { NavLink } from 'react-router-dom'; 
import Footer from './Footer.jsx';
AOS.init()
function Projects(){
    // const [navbackground, setNavBackground] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false); 
  
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 80) {
    //     setNavBackground(true);
    //   } else {
    //     setNavBackground(false);
    //   }
    // });
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleback = () =>{
      setIsMenuOpen(true)
    }
    return(
      <>
        <header>
        <nav className='navactive'>
          <svg>
            <text  x="40%" y="50%" dy=".35em" text-anchor="middle" className="logo">
              DevMonarch    </text>
          </svg>
          <ul >
            <li><NavLink to="/" >Home</NavLink></li>
            <li><NavLink to="/projects">Projects</NavLink></li>
            <li className='Branddev'>DevMonarch</li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/recommendations">Recommendations</NavLink></li>
          </ul>
          <div className="btnholder">
            <a href="https://wa.link/92um3s">
              <i className="bi bi-whatsapp" ></i>WhatsAppme
            </a>
          </div>
          <span className="openbtn" onClick={toggleMenu}>
            ☰ 
          </span>
        </nav>
        <main>
          <div className="overlay"></div>
          <video src={videoBG} autoPlay loop muted></video>
          <div className="content content2" data-aos="fade-right">
            <h1>Get To See Projects Contributions And Work</h1>
            <a
            href={cv}
              download
              onClick={() => window.alert('Download Initiated')}
            >
              Get Resume <i className="bi bi-download"></i>
            </a>
            <a href="/">Back To Home</a>
          </div>
        </main>
        <div
          id="mySidenav"
          className={`Mobilenav ${isMenuOpen ? 'Mobilenavshow' : 'mobilenavhide'}`}
          onTouchStart={toggleMenu}
          onTouchEnd={toggleMenu}
          onTouchMove={toggleback}
        >
          <a  className="closebtn" onClick={toggleMenu}>
            ×
          </a>
          <ul>
          <li><NavLink to="/" >Home</NavLink></li>
          <li><NavLink to="/projects">Projects</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/blog">Blog</NavLink></li>
          <li><NavLink to="/recommendations">Recommendations</NavLink></li>
            <div className="btnholder">
            <a href="https://wa.link/92um3s">
              <span><i className="bi bi-whatsapp"></i>WhatsAppme</span>
            </a>
          </div>
          </ul>
        </div>
        <div className="linktree">
         <div>
              <a href="https://web.facebook.com/profile.php?id=100089818970037" className='bi-facebook'></a>
         </div>
         <div>
            <a href="https://www.linkedin.com/in/munachimso-covenant2-32a437278/" className='bi-linkedin'></a>
         </div>
         <div>
             <a href="https://github.com/MUNACHIW" className='bi-github'></a>
        </div>
         <div>
             <a href="https://www.instagram.com/codewithmuna/" className='bi-instagram'></a>
        </div>
        <div>
             <a href="https://x.com/codewithmuna?s=09" className='bi-twitter'></a>
        </div>
        </div>
      </header>
      <section className='Cardholder'>
        <div data-aos="fade-right">
            <iframe src="https://scrapemuna.onrender.com/" ></iframe>
            <h1>Scrapemuna</h1>
            <p>
              One of my side projects I thought of using to
              solve a problem for me while I was looking to 
              land a Job this websites Scrapes job from site like 
              linkedin indeed and glassdoor and location
            </p>
            <a href=" https://scrapemuna.onrender.com/">  <strong>Click to view</strong></a>
         </div>
    

        <div data-aos="fade-left">
        <iframe src="https://munachiw.github.io/MaxiAI/"></iframe>
            <h1>MaxiAI</h1>
            <p>
              This is one of my side hustles where I was set to build a
              a react web application that will advertise maxAI.me wheres i 
              get a 50% of a every referal that subscribes
            </p>
            <a href=" https://munachiw.github.io/MaxiAI/">  <strong>Click to view</strong></a>
         </div>
  
        <div data-aos="fade-right">
        <iframe src="https://munachiw.github.io"></iframe>
            <h1>Simplewebsite build</h1>
            <p>
              Just practicing my skill in html and css  with vanilla javascript building a website
            </p>
            <a href="https://munachiw.github.io/"> <strong>Click to view</strong></a>
         </div>

        <div data-aos="fade-left">
        <iframe src="https://www.chair-saver.com/"></iframe>
            <h1>ChairServer</h1>
            <p>
              I will build a website like this for any of your business
              click the view button to see more about it
            </p>
            <a href="https://www.chair-saver.com/"> <strong>Click to view</strong> </a>
         </div>

        <div data-aos="fade-right">
        <iframe src="https://www.applebees.com/en/"></iframe>
            <h1>AppleBees</h1>
            <p>
            I could build you a web app or site like this its just a contact away
            </p>
            <a href="https://www.applebees.com/en">    <strong>Click to view</strong>       </a>
         </div>


        <div data-aos="fade-left">
        <iframe src="http://pillars.com/"></iframe>
            <h1>Pillars</h1>
            <p>
            I could build you a web app or site like this its just a contact away
            </p>
            <a href="http://pillars.com/"> <strong>Click to view</strong></a>
         </div>


        <div data-aos="fade-right">
        <iframe src="https://applewaves.com/"></iframe>
            <h1>Applewaves</h1>
            <p>
            I could build you a web app or site like this its just a contact away
            </p>
            <a href=" https://applewaves.com/">   <strong>Click to view</strong></a>
         </div>
      
 
        <div data-aos="fade-left">
        <iframe src="https://www.apple.com/watch/"></iframe>
            <h1>Apple</h1>
            <p>
             I contributed in the frontend and Backend of this web App
            </p>
            <a href=" https://www.apple.com/watch/"> <strong>Click to view</strong>      </a>
         </div>

 
        <div data-aos="fade-right">
        <iframe src="https://play.google.com/store/apps/details?id=com.app.villafragrancesb"></iframe>
            <h1>Mobile App Development</h1>
            <p>
            I could build you a mobile app  like this its just a contact away
            </p>
            <a href="https://play.google.com/store/apps/details?id=com.app.villafragrancesb"> <strong>Click to view</strong></a>
         </div>
      
      </section>
      <Footer/>
      </>
    )
}
export default Projects;

