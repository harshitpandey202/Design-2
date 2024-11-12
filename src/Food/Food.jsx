import "./Food.css"
import img41 from "./Images/pedigree.png"
import img42 from "./Images/shopping-icon.png"


export default function Food(){

 return(<>
    <div className="Food">
      <div className="food-title">
        <p>Our Products</p>
      </div>
      <div className="food-subtitle">Reliable Healthy Food<br></br>For Your Pet</div>
      <div className="food-btns1">
            <button className="food-btn1">All Products</button>
            <button className="food-btn1">Cat Food</button>
            <button className="food-btn1">Dog Food</button>
            <button className="food-btn1">Bird Food</button>
            <button className="food-btn1">Pet Accessories</button>
      </div>
      <div className="food-items">
        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>


        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>




        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>

        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>



      </div>




      <div className="food-items">
        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>


        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>




        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>

        <div className="food-item">
            <div className="item-upper">
                <img src={img41} alt="" className="item-upperimg" />
            </div>
            <div className="item-down">
                <div className="item-downleft">
                    <p>Pedigree</p>
                    <p><b>&#36; 120</b></p>
                </div>
                <div className="item-downright">
                   <img src={img42} alt="" className="item-downrightimg" />
                </div>
            </div>
        </div>



      </div>




      
        <div className="food-btn2"> <button className="food-button">View More Products </button> </div>
    </div>

 </>);

}