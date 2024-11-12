import "./Header.css"
import img1 from "./Images/logo.png"
import img2 from "./Images/search-icon.png"
import img3 from "./Images/shop-icon.png"
export default function Header(){
    return(
        <>
        <header>
            <div className="left">
                <img src={img1}></img>
                <nav>
                    <a href="" className="nav-link">Home</a>
                    <a href="" className="nav-link">Services</a>
                    <a href="" className="nav-link">Training</a>
                    <a href="" className="nav-link">Medi-Care</a>
                    <a href="" className="nav-link">Blogs</a>
                    <a href="" className="nav-link">Contact</a>
                </nav>

            </div>
            <div className="right">
                <img src={img2}  className="nav-image-1"/>
                <img src={img3}  className="nav-image-1"/>
                <button className="header-btn-1">Log In</button>
                <button className="header-btn-2">Sign Up</button>
            </div>
        </header>
        </>
    )
};