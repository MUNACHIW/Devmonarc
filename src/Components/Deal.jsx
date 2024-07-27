import image from '/src/assets/314a3b2c2b88baf1de14621a9525e340.png'
import AOS from 'aos';
AOS.init()
function Deal(){
    return(
        < >
        
         <h1 data-aos="fade-right" className='dealh1'>🎉  DEAL OF THE SEASON  🎉    </h1>   
        <section className='deal'>
            <div data-aos='fade-up'>
                 <h3>Website 20% OFF</h3>
                 <p>
                    Get an Astonishing Eyecatching Website.Now available at an unbeatable price.This beautiful
                    website features a sleek , aesthetic ,modern pattern that compliments any business just Dm 
                    at your own service
                 </p>
                 <strong>PRICE - <span className='pricecancel'> $145 </span>- 70$ per hour</strong>
                
                  <a href="tel:+2349035943173"><i className='bi bi-telephone-fill'></i>+2349035943173</a>
            
             </div>
             <div  data-aos='fade-up'>
                <img  id="myImg"  class="userimages" src={image} alt="" />
             </div>
            


        </section>
        
        </>
    )
}
export default Deal;