import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Preloader from './Components/Preloader.jsx'
import Admin from './Components/Admin.jsx'
import Post from './Components/Post.jsx'
import App2 from './Components/App2.jsx'
import Signin from './Components/Signin.jsx'
import Projects from './Components/Projects.jsx'
import Blog from './Components/Blog.jsx'
import Recommendations from './Components/Recommendations.jsx'
import Header from './Components/Header.jsx'
import BlogDetails from './Components/Blogdetails.jsx'
import Blognotfound from './Components/Blognotfound.jsx'
function App() {
  return(
    <>
        <Preloader/>
        <Router>
         <Routes>
                       
             <Route path='/' element={<App2/>}></Route>
             <Route path='/admin' element={<Admin/>}></Route>
             <Route path='/post' element={<Post/>}></Route>
             <Route path='/signin' element={<Signin/>}></Route>
              <Route path="/projects" element={<Projects/>} />
             <Route path="/blog" element={<Blog/>} />
             <Route path="/recommendations" element={<Recommendations/>} />
             <Route path="/blog/:id" element={<BlogDetails/>} />
             <Route path='/blog/notfound' element={<Blognotfound/>} ></Route>

         </Routes>
       </Router>
    </>
  
  )
}

export default App
