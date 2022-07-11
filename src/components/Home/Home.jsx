import React from "react";
import './Home.css'
import Tail from "../../Assets/Tail/Tail";

const Home = () => {

  
  return (
    <div  id="main">

      <section className="section1" id="">
        <div className="head">
          <h2>
            Lumi <span>Games</span>
          </h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
            facilis maxime autem consequuntur perferendis. Enim eligendi animi
            aliquid deleniti debitis?
          </p>
        </div>
      </section>

      <Tail />
    </div>
  );
};

export default Home;