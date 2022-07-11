import React from "react";
import "./Shop.css"
import pic1 from "../../shopImages/pic1.jpeg";
import pic2 from "../../shopImages/pic2.jpg";
import pic3 from "../../shopImages/pic3.jpg";
import pic4 from "../../shopImages/pic4.jpg";
import pic5 from "../../shopImages/pic5.jpg";
import pic6 from "../../shopImages/pic6.jpg";
import pic7 from "../../shopImages/pic7.jpg";
import pic8 from "../../shopImages/pic8.webp";
import pic9 from "../../shopImages/pic9.webp";
import pic10 from "../../shopImages/pic10.webp";

const Shop = () => {


  return (
    <div id="shop">
      <div className="section4">
        <h3 id="head5">Shop</h3>
        <p className="head6">Shop your best games through our affiliate partners</p>
        <div className="wrapper">
          <div>
            <img src={pic1} alt="product" />
            <strong className="sales">Game: A plague tale</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic2} alt="product" />
            <strong className="sales">Game: Octopath traveler</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic3} alt="product" />
            <strong className="sales">Game: Three kingdoms</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic4} alt="product" />
            <strong className="sales">Game: Free weekend</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic5} alt="product" />
            <strong className="sales">Game: Modern war</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic6} alt="product" />
            <strong className="sales">Game: Witcher</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic7} alt="product" />
            <strong className="sales">Game: Rocket</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic8} alt="product" />
            <strong className="sales">Game: Horizon</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic9} alt="product" />
            <strong className="sales">Game: Street racing</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
          <div>
            <img src={pic10} alt="product" />
            <strong className="sales">Game: The crew</strong>
            <button className="salesBtn"><a href="https://www.pcgames.de/Cosplay-Thema-232935/News/Deadpool-Cosplay-1397167/" target="_blank" rel="noopener noreferrer">Buy</a></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;