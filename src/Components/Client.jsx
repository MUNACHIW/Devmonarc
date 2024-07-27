import image1 from '/src/assets/3.png'
import image2 from '/src/assets/formimg.png'
import image3 from '/src/assets/magic.jpg'

function Client(){

  return (<section className="recommendations">
         <div>
            <img src={image1} alt="browser not compatible" />
            <p>
                I am John I and Devmonarch had a seamless business discussion
                and it  went well his a very reliable and trust worthy full-stack
                developer.
             </p>
             <h6>john@yahoomail.com</h6>
           
         </div>
         <div>  
            <img src={image2} alt="browser not compatible" />
            <p>
                 I am Katherine and I think his a person of great 
                 tenacity and shows alot of pride in his work he always 
                 delivers beautiful websites and mobile apps for my 
                 restaurant business.
             </p>
             <h6>Katherine@gmail.com</h6>
         </div>
         <div> 
             <img src={image3} alt="browser not compatible" />
             <p>
                  
                  I have been pushing my pet service and breeding
                  business all alone but with DevMonarch I have a 
                  better online presence and a perfect website for me
                  now  I  can get seamless online payment via payment gateways.
             </p>
             <h6>pets@gmail.com</h6>
             </div>
    </section>
  )
}
export default Client;