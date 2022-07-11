import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Games from "./components/Games/Games";
import Shop from "./components/Shop/Shop";
import Contact from "./components/Contact/Contact";
import Navbar from "./Assets/Navbar/Navbar";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home />
      <About />
      <Games />
      <Shop />
      <Contact />
    </div>
  );
}

export default App;
