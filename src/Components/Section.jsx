import image from '/src/assets/network-secure-purchase-online-on-laptop.png'
import AOS from 'aos';
AOS.init()

function Section(){
    return(
    <section className="gateway">
        <div data-aos="fade-right">
           <h1>Secure Payment Gateways</h1>
           <p>
             With the Knowledge of backend development and data manipulation
             I could build you secure payment Gateways for your business to get 
             quick online automated payments
           </p>
           <a
           href='https://wa.link/92um3s'
          >
          <i className="bi bi-whatsapp"></i>  WhatsappMe
          </a>
        </div>
        <div data-aos="fade-up">
           <img src={image} alt="" />
        </div>
    </section>
    )
}
export default Section