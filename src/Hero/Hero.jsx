import "./Hero.css"
import img11 from "./Images/model.png"
import img12 from "./Images/text-img.png"
import img13 from "./Images/heart.png"
import img14 from "./Images/pet.png"
import img15 from "./Images/vacci.png"
import img16 from "./Images/button.jpg"

export default function Hero(){
    return(
        <>
        <div className="hero">
            <div className="hero-left">
                <p className="hero-tilte">We're Here <br></br>to care <img src={img12} className="img12"></img><br></br>of Little Pets</p>
                <p className="hero-descrption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nam volas reiciendis odioexpedita.ls reiciendis odioexpedit</p>
                <div className="hero-btn">
                <button className="book">Book A Quote</button>
                <button className="call">Schedule a call</button>  
                </div>
            </div>
            <div className="hero-right">
                <div className="model-div">
                <img className="model"src={img11}/>
                </div>
               
                <div className="heart">
                    <div className="heart-left"> 
                        <div><img src={img13}/></div>
                    </div>
                   <div className="heart-right">
                       <p> <b>Health check</b></p>
                       <p> Cat & Dog</p>
                    </div>
                </div>
                <div className="pet">
                <div className="heart-left"> 
                <div><img src={img14}/></div>
                    </div>
                   <div className="heart-right">
                       <p> <b>Pet Training</b> </p>
                       <p> Cat & Dog</p>
                    </div>
                </div>
                <div className="vacci">
                <div className="heart-left"> 
                <div> <img src={img15}/></div>
                    </div>
                   <div className="heart-right">
                       <p><b> Vaccination</b> </p>
                       <p> Cat & Dog</p>
                    </div>
                </div>
                <button className="play"><img src={img16}></img></button>
            </div>
        </div>
        </>
    )
}