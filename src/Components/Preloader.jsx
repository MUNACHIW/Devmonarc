import image from '/src/assets/preloader.gif'
import React, {useEffect, useState} from 'react'
const Preloader = () =>{
 const [display , setdisplay] = useState(true)


 
 window.addEventListener('load', function(){
    setTimeout(()=>{
       setdisplay(false)
    }, 1000)
 })

return(
    <section className={display ? 'preloader' : 'preloadernone'}>
          <img src={image} alt="" />
    </section>
)

}
export default Preloader;