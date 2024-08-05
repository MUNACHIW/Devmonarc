import React, { useEffect, useState } from 'react';
import { useParams} from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import videoBG from '/src/assets/pexels-pavel-danilyuk-5495890 (1080p).mp4';
import { NavLink } from 'react-router-dom'; 
import image  from '/src/assets/monarch.jpg';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer.jsx';
import image2 from '/src/assets/muna.jpg'

const BlogDetails = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuToggled, setIsMenuToggled] = useState(false); 

  const [blog , setblog] = useState([])
  const [search, setSEARCH] = useState([])
  const {id} = useParams();
  const fetchBlog =async () =>{
   try{

    const response = await fetch(`https://backendportfolio-0tqd.onrender.com/api/blogload/${id}`);
    if (!response.ok){
         throw new Error('Network response was not ok');
    }
    
    const data = await response.json();
    setblog(data.blogs);

    if (data.blogs.length === 0){
      window.location.href = '/blog/notfound';
    }
    const matchedBlog = data.blogs.find(blog => blog.id === id);
    const navigate = useNavigate();
    // Redirect based on whether a matching blog was found
    if (matchedBlog) {
      navigate(`/blog/${matchedBlog.id}`);
    } else {
      navigate('/blog/notfound');
    }
    if (window.location.href !== `/blog/${data.blogs.id}` ){
      navigate('/blog/notfound');
    }else{
      navigate(`/blog/${data.blogs.id}` )
    }
    
   }catch(error){
      console.log('Error fetching item:', error);
   };

 };
 const navigate = useNavigate();
 const fetchBlog2 = async () =>{
  try{
    const response = await fetch('https://backendportfolio-0tqd.onrender.com/api/blogload')
    if (!response.ok){
      throw new Error('Network response was not ok')
    }
    const data = await response.json();
     setSEARCH(data.blogs)

  }catch(error){
    console.log('Error fetching blog', error)
  }
 }

 useEffect(()=>{
  if (isNaN(id)) {
    // Redirect to 'notfound' page
  
    navigate('/blog/notfound');
  } else {
   fetchBlog()
  }
  
 }, [id, navigate]);


 useEffect(()=>{
 
 
 
  fetchBlog2().then(
    ()=>{
      const loadingSpinner = document.getElementById('loadingSpinner');
          if (loadingSpinner) {
              loadingSpinner.style.display = 'none';
          }
    }
  );
 }, [search]);
 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
};



const toggleback = () =>{
  setIsMenuOpen(true)
}

const handleSearchSubmit = (event) => {
  event.preventDefault();
  const selectedTitle = event.target.elements.blogSearch.value;
  const searchResult = search.find((item) => item.title === selectedTitle);
  if (searchResult) {
    // Redirect to the specific blog post page
    window.location.href = `/blog/${searchResult.id}`;
  }else {
      window.location.href = '/blog/notfound';
  }
};



 
 
 if (!blog){
  return <div>loading...</div>
 }

 return (
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
    {
            blog.map((blog) =>(
              <h1 key={blog.id}>{blog.title}</h1>
            ))
           }
      <a
     href="tel:+2349035943173"
        onClick={() => window.alert('Download Initiated')}
      >
      <i className='bi bi-telephone-fill'></i>+2349035943173
      </a>
      <a href="/blog">Back To Blog</a>
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
 
  <article className='blogdetails'>
    <section>
    <strong id="loadingSpinner">
           <div className="loading-spinner" id="loadingSpinner">
        </div>
        <p>Loading...</p>
        </strong>
          {blog.map((blog) => (

              <div className="blog" >
                <div className="adminit">

                <strong className='imageholder2'> <img src={image2} alt="" /> </strong>    <p key={blog.id}>By Admin(Mr Covenant) {blog.created_at}  </p>
                </div>            
                <h1 key={blog.id}>{blog.title}</h1>
                <img key={blog.id} src={image} alt="Network error or browser not compatible" />
                <p key={blog.id}>{blog.post}</p>
              </div>
             
          ))}
      </section> 
  <section>
  <form onSubmit={handleSearchSubmit}>
   <h2>Search The page</h2>
 <span>
  <input name="blogSearch" placeholder='Search blogs...'  list="blog" />
  <datalist id="blog">
    {search.map((searchItem) => (
      <option key={searchItem.id} value={searchItem.title} ></option>
    ))}
  </datalist>
  <button type="submit" className='bi bi-search'></button>
  </span>
</form>
</section>

        
</article>
<Footer/>
</>
 )

};

export default BlogDetails;

