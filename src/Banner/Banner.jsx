import "./banner.css"
import img51 from "./Images/character.png"
export default function Banner(){
    return(
        
        <div className="banner">

         <div className="banner-left">
            <img src={img51} alt="" className="banner-leftimg" />
         </div>
         <div className="banner-right">
            
            <p className="banner-desc">Let's Starts Grooming <br />Your Little Ones....</p>
            <button className="banner-btn">Book A Appointment</button>
         </div>


        </div>
        
    )

}