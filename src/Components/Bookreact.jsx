import image from '/src/assets/ui.jpg'
import AOS from 'aos';
AOS.init()
function Bookreact(){


    return(
        <footer  data-aos='fade-up' >
            <h1>Book Your One-On-One<br></br>Design Experience</h1>
            <p  data-aos='fade-up'>
                Transform  Your Mobile Apps with a personalised touch.
                my one-on-one design session and consultation offers access to exclusive User Experience and design 
                whether  you are looking to add a feature or redesign entire interface or just need a new app   
            </p>
            

            <div className="btnholder"  data-aos='fade-up'>
          <a href="https://wa.link/92um3s">
            <i className="bi bi-whatsapp"></i>WhatsAppme
          </a>
        </div>

        <div className="imgholder"  data-aos='fade-up'>
            <img src={image} alt="" />
        </div>

        </footer>
    )

}
export default  Bookreact