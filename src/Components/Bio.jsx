import image from '/src/assets/muna.jpg'
import cv from '/public/Resume.pdf';
// import 'bootstrap-icons/font/bootstrap-icons.css';
import AOS from 'aos';
import image2 from '/src/assets/muna.jpg'
AOS.init()
function Bio(){
  return(
   <main className="bio"> 
         <div className="subsec1"  data-aos="zoom-in-up">
           <h1>Full-Stack developer</h1>
           <p>Proficient with Frontend and backend Technologies with 4 years of experience 
            Dedicated to provide you with quality web applications, websites,backend integrations  and mobile Apps
           </p>
           <a
          href={cv}
            download
            onClick={() => window.alert('Download Initiated')}
          >
            Get Resume <i className="bi bi-download"></i>
          </a>
          <a href="tel:+2349035943173"><i className='bi bi-telephone-fill'></i>+2349035943173</a>

        </div>
   
    
   
     <div className="cube" data-aos="fade-right">
         <img src={image} alt="network error or incompatible" />
     </div>
     <section className='subsec2' data-aos="zoom-out-up">
      <div className='imgholder'>
      <img src={image} alt="network error or incompatible" />
      </div>
         <h1>Full-Stack developer</h1>
           <p>Proficient with Frontend and backend Technologies with 4 years of experience </p>
           <p>
            Dedicated to provide you with quality web applications, websites,<br></br> backend integrations  and mobile Apps
           </p>
           <div className='linkholder'>
             <div>
                      <a
                      href={cv}
                        download
                        onClick={() => window.alert('Download Initiated')}
                      >
                        Get Resume <i className="bi bi-download"></i>
                      </a>
           </div>
            <div>
                         <a href="tel:+2349035943173"><i className='bi bi-telephone-fill'></i>+2349035943173</a>
            </div>
          </div>
     </section>
  </main>
  )
}
export default Bio;