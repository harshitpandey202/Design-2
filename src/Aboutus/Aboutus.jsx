import "./Aboutus.css"
import img31 from "./Images/left-mg.png"
import img32 from "./Images/right-img.jpg"

export default function Aboutus(){
    return(<>
    <div className="about">
        <div className="about-left">
            <p className="about-title">About us</p>
            <p className="about-subtitle">Best Agency For Your Pet</p>
            <p className="about-desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem asperiores error hic impedit corporis culpa, praesentium dolorem magni, animi sed debitis repellat sequi quia consectetur.</p>
            <img src={img31} alt="" className="about-leftimg" />
        </div>
        <div className="about-right">
            <img src={img32} alt="" className="about-rightimg" />
        </div>
    </div>
    </>)
}