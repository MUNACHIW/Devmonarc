import image from '/src/assets/icons8-friends-60.png'
const Tutorship = ()=>{

    return(
        <>
              <h1 data-aos="fade-right" className='dealh1 dealfont'>🎉 ONLINE TUTORSHIP PROGRAM 🎉    </h1>   
        <section className=" deal">
            <div>
              <img src={image} alt="" />
            </div>
            <div>
            <h3>Tutorship 20% OFF</h3>
                 <p>
                    Here as your tech instructor i will help 
                    you set yourself up as a developer   from the fundamentals 
                    to intermediate and Advance also guiding you on the process of landing a Job
                 </p>
                 <strong>PRICE - 145$ for registeration</strong>
                
                  <a href="tel:+2349035943173"><i className='bi bi-telephone-fill'></i>+2349035943173</a>
            
            </div>
        </section>
    </>
    )

}
export default Tutorship;