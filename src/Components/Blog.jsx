import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import videoBG from '/src/assets/pexels-pavel-danilyuk-5495890 (1080p).mp4';
import { NavLink } from 'react-router-dom'; 
import image  from '/src/assets/monarch.jpg';
import Footer from './Footer.jsx';
import image2 from '/src/assets/muna.jpg'
import { useParams } from 'react-router-dom';

AOS.init()
function Blog(){
    // const [navbackground, setNavBackground] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMenuToggled, setIsMenuToggled] = useState(false); 
    const [blogs , setBlogs] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
  
    // window.addEventListener('scroll', () => {
    //   if (window.scrollY > 80) {
    //     setNavBackground(true);
    //   } else {
    //     setNavBackground(false);
    //   }
    // });
    const itemsPerPage = 3;
    const {page} = useParams();
    const fetchAPI = async (currentPage) =>{
      const response = await fetch(`https://backendportfolio-0tqd.onrender.com/api/blogload?page=${currentPage}`)
      const data = await response.json();
      setBlogs(data.blogs)
    }   
  
    useEffect(()=>{
      fetchAPI(page || currentPage); 
    } , [page, currentPage])
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const toggleback = () =>{
      setIsMenuOpen(true)
    }
    const  decrement = () => {
      setCurrentPage(currentPage - 1)
      var pageactiveprev = document.getElementById("pageactiveprev");
      var pageactive = document.getElementById("pageactive");
      pageactiveprev.classList.add("pageactive")
      pageactive.classList.remove("pageactive")

      
  };
  const increment = () =>{
      setCurrentPage(currentPage + 1)
      var pageactive = document.getElementById("pageactive");
      var pageactiveprev = document.getElementById("pageactiveprev");
      pageactive.classList.add("pageactive")
      pageactiveprev.classList.remove("pageactive")
  }



  // Calculate total pages (you can get this from the backend too)
  const totalPages = Math.ceil(blogs.length / itemsPerPage);
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

           
             <h1>Blog Page</h1>

            <a
           href="tel:+2349035943173"
              onClick={() => window.alert('Call  Initiated')} 
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
          <li className='Branddev'>DevMonarch</li>
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
      <main className="blogload">
                {blogs.map((blog) => (
          
                    <div className="">
                    
                      <img src={image} alt="Network error or browser not compatible" />
                      <h1>{blog.title}</h1>
                      <span><img className='imgprof' src={image2} />Posted at: {blog.created_at}<br></br>By Admin(Mr Covenant)</span>
                      <a href={`/blog/${blog.id}`} key={blog.id}>ReadBlog <i className='bi bi-eye'></i></a>
                    </div>
                ))} 
       {/* Pagination links */}
       <div className="pagination">
                {currentPage > 1 && (
                    <a   onClick={decrement} id='pageactiveprev'>Previous</a>
                )}

                {Array.from({ length: totalPages }, (_, index) => (
                    <a
                        key={index}
                        // className={currentPage === index + 1 ? 'active' : ''}
                        id='pageactive'
                        onClick={increment}
                    >
                        {/* {index + 1} */} Next
                    </a>
                ))}

                {currentPage < totalPages && (
                    <a onClick={increment} >Forward</a>
                )}
                   {/* <a   onClick={decrement}>Previous</a>
                   <a onClick={increment} >Next</a> */}
            </div>
       </main>
      <Footer/>
    </>
    )
}
export default Blog;
 