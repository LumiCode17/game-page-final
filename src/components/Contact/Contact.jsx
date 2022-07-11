/* import Tail from "./Tail"; */
import './Contact.css'
import logo from "../../images/logo.png";
import castleBlack from "../../images/castleBlack.png"
import nagaBanking from "../../images/Naga.png"
import pcGames from "../../images/PC_Games_logo.png"

const Contact = () => {
  return (
    <div id="contact" className="sect5">
      <footer>
        <div className="content">
          <div className="top">
            <div className="logo-details">
              <img src={logo} alt="logo" className="footerIMG"></img>
              {/* <span className="logo_name span">Game-oveR</span> */}
              <h1 className="glitchContact">
                <span aria-hidden="true">Game-oveR</span>
                  Game-oveR
                  <span aria-hidden="true">Game-oveR</span>
              </h1>
            </div>
            <div className="media-icons">
              <a href="https://open.spotify.com/artist/3yqkjMHcqHPOqML0JH89mA" className="hook" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-spotify"></i>
              </a>
              <a href="https://www.twitter.com/LumiJones" className="hook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://www.instagram.com/tribe_of_jones/" className="hook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="https://www.linkedin.com/in/olumide-jones-ab2031215/" className="hook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://www.youtube.com/c/Lumigoodboi" className="hook" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-youtube"></i>
              </a>
              {/* <a href="https://github.com/Lumi4God" className="hook" target="_blank" rel="noopener noreferrer">
                <i class="fab fa-github-square"></i>
              </a> */}
            </div>
          </div>
          <div className="link-boxes">
            <ul className="boss">
              <li className="link_name li">Company</li>
              <li className="li">
                <a href="#main" className="hook">
                  Home
                </a>
              </li>
              <li className="li">
                <a href="#section2" className="hook">
                  About us
                </a>
              </li>
              <li className="li">
                <a href="#section3" className="hook">
                  Game
                </a>
              </li>
              <li className="li">
                <a href="#shop" className="hook">
                  Shop
                </a>
              </li>
            </ul>
            <ul className="boss">
              <li className="link_name li">Services</li>
              <li className="li">
                <a href="https://github.com/Lumi4God" className="hook" target="_blank" rel="noopener noreferrer">
                  App design
                </a>
              </li>
              <li className="li">
                <a href="https://github.com/Lumi4God" className="hook" target="_blank" rel="noopener noreferrer">
                  Web design
                </a>
              </li>
              <li className="li">
                <a href="https://github.com/Lumi4God" className="hook" target="_blank" rel="noopener noreferrer">
                  Logo design
                </a>
              </li>
              <li className="li">
                <a href="https://github.com/Lumi4God" className="hook" target="_blank" rel="noopener noreferrer">
                  Banner design
                </a>
              </li>
            </ul>

            <ul className="boss">
              <li className="link_name li">Affiliate</li>
              <li className="li">
                <a href="#" className="hook one" target="_blank" rel="noopener noreferrer">
                  <img src={castleBlack} alt={castleBlack} className="castleBlack" />
                  <div className="div1">CastleBlack</div>
                </a>
              </li>
              <li className="li two">
                <a href="#" className="hook two" target="_blank" rel="noopener noreferrer">
                  <img src={nagaBanking} alt={nagaBanking} className="nagaBanking" />
                  <div className="div2">Naga Banking</div>
                </a>
              </li>
              <li className="li">
                <a href="#shop" className="hook three">
                  <img src={pcGames} alt={pcGames} className="pcGames" />
                </a>
              </li>
              {/* <li className="li">
                <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                  Purchase
                </a>
              </li> */}
            </ul>
            <ul className="boss">
              <li className="link_name li">Courses</li>
              <li className="li">
                <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                  HTML & CSS
                </a>
              </li>
              <li className="li">
                <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                  JavaScript
                </a>
              </li>
              <li className="li">
                <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                  Photography
                </a>
              </li>
              <li className="li">
                <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                  Photoshop
                </a>
              </li>
            </ul>
            <ul className="boss input-box">
              <li className="link_name li">Subscribe</li>
              <li className="li">
                <input type="text" placeholder="Enter your email"></input>
              </li>
              <li className="li">
                <input type="button" value="Subscribe"></input>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottom-details">
          <div className="bottom_text">
            <span className="copyright_text span">
              Copyright © 2022{" "}
              <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                LumiCode.
              </a>
              All rights reserved
            </span>
            <span className="policy_terms span">
              <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                Privacy policy
              </a>
              <a href="#" className="hook" target="_blank" rel="noopener noreferrer">
                Terms & condition
              </a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
