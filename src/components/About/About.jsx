import React from "react";
import './About.css'
import author from "../../images/pic9.png";

const About = () => {
  return (
    <div id="about">
      <section className="section2" id="section2">
        <h3 id="head3">About</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          reprehenderit perspiciatis quod velit ea corporis doloremque maxime
          doloribus provident sit! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ea fugiat, nostrum commodi, tempore qui tempora
          officia earum quidem animi nemo dolor aliquid assumenda recusandae
          quae nisi possimus? Praesentium hic eaque corrupti! Voluptatum, id
          molestias. Quibusdam laborum saepe unde ea in sapiente non aspernatur
          corporis, laboriosam magni cum eos voluptates dolores, rem nobis
          tempore quae dicta! Laudantium praesentium a laborum velit vitae cum
          architecto possimus nemo ad tenetur temporibus at ut commodi, ea
          adipisci autem, maiores impedit dolorem in! Modi laudantium, nobis
          quam laboriosam aspernatur nostrum cumque, quidem doloremque numquam
          illo rem? Quidem similique sint molestias.
          <strong> NOTE: None mobile version!</strong>
        </p>
        <span className="strong"><strong>To Play:</strong> please click below the game image of your choice in game section.</span>
        

        <div className="contained">
          <div className="box">
            <img src={author} alt="author" className="aut" />
            <h1 className="glitch aboutGlitch">Game-oveR</h1>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;