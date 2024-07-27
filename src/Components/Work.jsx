import image from '/src/assets/1719656982585.jpg'
import AOS from 'aos';
AOS.init()
function Work(){
    return(
        <section className="work" data-aos="fade-up" >
               <div>
                <h1>
                    Research and creativity leading to better product and digital presence
                </h1>
               </div>
               <div>
                   <img src={image} alt="" />
               </div>
        </section>
    )
}
export default Work;