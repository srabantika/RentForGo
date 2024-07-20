import "./App.css";
//import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import GetStarted from "./components/GetStarted/GetStarted";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Residencies from "./components/Residencies/Residencies";
import Value from "./components/Value/Value";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Link, Element } from 'react-scroll';
import FloatingChatBot from "./utils/FloatingChatBot";

function App() {
  return (
    <div className="App">
      <div>
        {/* making the whitish effect, to make this effect betweem the navbar and hero section, i have to keep this 2 sections inside the same div, then only we will b able to put the effect  */}
         
        <div className="white-gradient" />
        <Header />
        <FloatingChatBot/>
        <Hero />
      </div>
      <SocialMedia />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>
      {/* <Element name="residencies">
        <Residencies />
      </Element>
      <Element name="value">
        <Value />
      </Element>
      <Element name="contact">
        <Contact />
      </Element>
      <Element name="get-started">
        <GetStarted />
      </Element> */}
      <Footer/>
    </div>
  );
}

export default App;
