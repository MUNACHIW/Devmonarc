import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import videoBG from '/src/assets/pexels-pavel-danilyuk-5495890 (1080p).mp4';
import { NavLink } from 'react-router-dom'; 
import Client from './Client.jsx';
import Footer from './Footer.jsx';
function Recommendations(){
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
          <div className="content content2">
            <h1>Client Recommendations</h1>
           
    
            <a
           href="tel:+2349035943173"
              onClick={() => window.alert('Call Initiated')}
            >
            <i className='bi bi-telephone-fill'></i>+2349035943173
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
      <Client/>
      <Footer/>
      </>
    )
}
export default Recommendations;