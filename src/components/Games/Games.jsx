import React from "react";
import './Games.css'
import racer from "../../gameImg/stunt-park-racer.jpg";
import royale from "../../gameImg/shootingRoyale.jpg";
import reversi from "../../gameImg/reversi.jpg";
import draughts from "../../gameImg/draughts.jpg";
import drifting from "../../gameImg/car-drifting.jpg";
import acceleration from "../../gameImg/M-acceleration.jpg";
import chess from "../../gameImg/miniChess.jpeg";
import warfarearea2 from "../../gameImg/warfarearea2-200x200.jpg";
import tanks from "../../gameImg/world-of-tanks.jpg";
import demonKiller from "../../gameImg/demonkiller.jpg";
import poolMania from "../../gameImg/neonbilliards800450.jpg";
import tictactoe from "../../gameImg/tictactoe.png";
import psychoBiker from "../../gameImg/psychoBiker.jpg";
import zombieRoadDrive from "../../gameImg/zombieRoadDrive.jpg";
import quiz from "../../gameImg/quiz.jpg";
import xibalba from "../../gameImg/xibalba.jpg";
import trialsRide from "../../gameImg/trialsRide.jpg";
import warefare1 from "../../gameImg/warefare1.jpg";
import tetris from "../../gameImg/tetris.jpg";
import basketBall from "../../gameImg/basket-ball.jpg";
import boxing from "../../gameImg/boxing.jpg";
import collapseBlast from "../../gameImg/blast.png";
import ski from "../../gameImg/ski.jpeg";
import americanBall from "../../gameImg/americanBall.jpg";

import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";




const Games = () => {
  const [open, setOpen] = React.useState(false);
  const [gameModal, setGameModal] = React.useState("");


  let gamesList = [
    {
      name: "Stunt Park racer",
      url: "https://www.addictinggames.com/embed/html5-games/23687",
      image: racer,
    },
    {
      name: "Shooting Royale",
      url: "https://www.addictinggames.com/embed/html5-games/23683",
      image: royale,
    },
    {
      name: "Mini CHESS",
      url: "https://playpager.com/embed/chess/index.html",
      image: chess,
    },
    {
      name: "Mini REVERSI",
      url: "https://playpager.com/embed/reversi/index.html",
      image: reversi,
    },
    {
      name: "Warfare area 2",
      url: "https://1000webgames.com/games/warfarearea2/html5/",
      image: warfarearea2,
    },
    {
      name: "Mini DRAUGHTS",
      url: "https://playpager.com/embed/checkers/index.html",
      image: draughts,
    },
    {
      name: "Tanks",
      url: "https://www.addictinggames.com/embed/html5-games/20305",
      image: tanks,
    },
    {
      name: "Car drifting",
      url: "https://www.addictinggames.com/embed/html5-games/24742",
      image: drifting,
    },
    {
      name: "M-Acceleration",
      url: "https://1000webgames.com/games/m-acceleration/webgl/",
      image: acceleration,
    },
    {
      name: "demon-killer",
      url: "http://wanted5games.com/games/html5/demon-killer-en-s-iga-cloud/index.html?pub=10",
      image: demonKiller,
    },
    {
      name: "poolMania",
      url: "http://wanted5games.com/games/html5/pool-mania-en-s-iga-cloud/index.html?pub=10",
      image: poolMania,
    },
    {
      name: "Tic Tac Toe",
      url: "http://wanted5games.com/games/html5/tic-tac-toe-mania-new-en-s-iga-cloud/index.html?pub=10",
      image: tictactoe,
    },
    {
      name: "Psycho Biker",
      url: "https://www.addictinggames.com/embed/html5-games/23712",
      image: psychoBiker,
    },
    {
      name: "Zombie Road Drive",
      url: "https://www.addictinggames.com/embed/html5-games/23872",
      image: zombieRoadDrive,
    },
    {
      name: "Millionaire Quiz",
      url: "https://www.addictinggames.com/embed/html5-games/19275",
      image: quiz,
    },
    {
      name: "Xibalba Shootings",
      url: "https://www.addictinggames.com/embed/html5-games/16709",
      image: xibalba,
    },
    {
      name: "Warefare area 1",
      url: "https://1000webgames.com/games/warfarearea/html5/",
      image: warefare1,
    },
    {
      name: "Trials Ride",
      url: "https://1000webgames.com/games/trialsride/html5/",
      image: trialsRide,
    },
    {
      name: "Tetris",
      url: "http://wanted5games.com/games/html5/tetrix-en-s-iga-cloud/index.html?pub=10",
      image: tetris,
    },
    {
      name: "Basket Ball",
      url: "http://wanted5games.com/games/html5/ultimate-swish-en-s-iga-cloud/index.html?pub=10",
      image: basketBall,
    },
    {
      name: "Boxing",
      url: "http://wanted5games.com/games/html5/ultimate-boxing-en-s-iga-cloud/index.html?pub=10",
      image: boxing,
    },
    {
      name: "Collapse Blast",
      url: "http://wanted5games.com/games/html5/collapse-blast-en-s-iga-cloud/index.html?pub=10",
      image: collapseBlast,
    },
    {
      name: "Ski Rush",
      url: "http://wanted5games.com/games/html5/ski-rush-en-s-iga-cloud/index.html?pub=10",
      image: ski,
    },
    {
      name: "American Football",
      url: "http://wanted5games.com/games/html5/american-football-kicks-new-en-s-iga-cloud/index.html?pub=10",
      image: americanBall,
    },
  ];
  const chooseGame = (url) => {
    setGameModal(url);
    setOpen(true);
    console.log();
  };

  return (
    <div id="game" /* className="section3" */>
      <section className="section3" id="section3">
        <h3 id="head4">Games</h3>

        <div className="games">
          {gamesList.map((game, index) => (
            <>
              <div
                onClick={() => chooseGame(game.url)}
                className="container"
                key={index}
              >
                <img src={game.image} alt={game.name} />
                <h5 className="header5">{game.name}</h5>
              </div>
            </>
          ))}
        </div>
        
        <Modal className="modal" open={open} onClose={() => setOpen(false)}>
          <iframe src={gameModal} scrolling="no" title="myFrame"></iframe>
        </Modal>
       
      </section>
    </div>
  );
};

export default Games;
