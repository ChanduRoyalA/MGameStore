import Cookies from "js-cookie";
import Header from "../Header/Header";
import { Redirect, Link } from "react-router-dom";
import HomeGameList from "../HomeGameList/HomeGameList";
import {
  AiOutlineTwitter,
  AiFillInstagram,
  AiOutlineGooglePlus,
} from "react-icons/ai";

import "./Home.css";

const Home = () => {
  const k = "";
  // const token = Cookies.get("token");
  // if (token === undefined) {
  //   return <Redirect to="/login" />;
  // }
  return (
    <div className="Home">
      <Header />
      <HomeGameList />
      <div className="section01">
        <h1>Play some Popular games in the Business</h1>
        <p>
          <span className="select">Select</span> and{" "}
          <span className="select">Play</span> our games on huge number of
          categories. Dont worry about the Platform. A game is developed such
          that it can be played on multiple Platforms .Play some popular games
          to connect players around the Gloab
        </p>
        <Link to="/games">
          <button className="btnHome">Show Games</button>
        </Link>
        <h2>Our Pricing</h2>
        <p>
          Transparent, fair and flexible pricing options with access to all of
          our services. Senior experts. Fast turnarounds. Remarkable designs!
        </p>
      </div>
      <footer>
        <div className="d-flex flex-row justify-content-around">
          <div className="textDiv">
            <h4>Contact Us:</h4>
          </div>
          <div className="iconDivFooter">
            <AiOutlineTwitter className="footerIcons" />
            <AiFillInstagram className="footerIcons" />
            <AiOutlineGooglePlus className="footerIcons" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
