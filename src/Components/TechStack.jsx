import image1 from '/src/assets/react.svg'
import node from '/src/assets/node tech.png'
import flask from '/src/assets/flask.png'
import AOS from 'aos';
AOS.init()


function Techstack(){

    return(
   
        <>
         <h1 id='services' className='tech'>Technological Skills</h1>
        <section className="containertech">
         <div data-aos="fade-right">
            <span>
            <img src={image1} alt="" />
            </span>
            <h4>Frontend</h4>
            <p>
               React UI library used in building single page application 
               that dose hot Reload and renders page as an already built component.
               With my skill in Javascript and Frontend development
               i can build user interface with react and get you a perfect webApp .
               Also ready to get your mobile app set for you  
            </p>

         </div>
         <div data-aos="fade-left">
            <span>
              <img src={node} alt="" />
           </span>
           <h4>node.js Backend</h4>
           <p>
            Software that compile and interprets javascript code used in writing serverside and Database code.
            with my skill in javascript I can build you scalable Backend and API for Backend
           </p>
         </div>
         <div data-aos="fade-right">
            <span>
             
              <img src={flask}/>
            </span>
            <h4>Flask</h4>
            <p>
               A python framework for web development and small Backend projects
               , I am proficent in python development and with 
               the knowledge of this frame I can build you a scalable full stack webApp or website
            </p>

         </div>
         <div data-aos="fade-left">
            <h2>Django</h2>
            <h4>Django</h4>
            <p>
               A python framework for building both large and small scale web application
               could also be accompanied with rest framework basically it can be backend specific or
               fullstack 
            </p>
         </div>
         
        </section>
        </>
    )
}
export default Techstack;