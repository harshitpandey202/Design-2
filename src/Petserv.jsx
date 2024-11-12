import "./Petserv.css"
import img21 from "./Service/Images/pet-care.png"
import img22 from "./Service/Images/pet-groom.png"
import img23 from "./Service/Images/vaccine.png"
import img24 from "./Service/Images/vetary.png"
import img25 from "./Service/Images/down-arrow-removebg-preview.png"


export default function Petserv(){
    return(
        <>
        <div className="service">
           <div className="service-title">We World's Best Team For<br></br>Pet Services</div>
           <div className="service-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit doloribus minus <br></br>numquam maiores nemo ratione quidem delectus veritatis autem ea?</div>
          
           <div className="service-btns">
            
            <button className="service-btn">Our Services</button>
           </div>
           <div className="down-arrow"><img src={img25}></img></div>
           <div className="service-cards">
            <div className="service-card">
                <div className="carddiv-img1"><img src={img22} className="Card-img1"></img></div>
                <p className="card-title">Pet Grooming</p>
                <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, doloribus.</p>
            </div>
            <div className="service-card">
            <div className="carddiv-img2"> <img src={img21} className="Card-img2"></img></div>
                <p className="card-title">Pet Care</p>
                <p className="card-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, dolorum.</p>
            </div>
            <div className="service-card">
            <div className="carddiv-img3"> <img src={img24} className="Card-img3"></img></div>
                <p className="card-title">Veterinary</p>
                <p className="card-desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, libero.</p>
            </div>
            <div className="service-card">
            <div className="carddiv-img4">  <img src={img23} className="Card-img4"></img></div>
                <p className="card-title">Vaccination</p>
                <p className="card-desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, tempora.</p>
            </div>
           </div>


        </div>
        </>
    )
}