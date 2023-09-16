import { Component } from "react";
import "./Games.css";
import Header from "../Header/Header";
import GamesCard from "../GamesCard/GamesCard";
import { BallTriangle } from "react-loader-spinner";
class Games extends Component {
  state = { gameList: [], pageStatus: "Loading", GamesDataRecived: [] };

  componentDidMount() {
    this.getGamesOnLoad();
  }

  getGamesOnLoad = async (newUrl) => {
    const url =
      "https://api.rawg.io/api/games?key=b9391f7a56ae4401ad6ceadc9cdc02bb";
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    this.setState({ pageStatus: "Loaded", GamesDataRecived: data.results });
  };

  renderView = () => {
    const { pageStatus } = this.state;
    switch (pageStatus) {
      case "Loading":
        return (
          <div className="ViewDiv">
            <BallTriangle
              type="ThreeDots"
              color="#0b69ff"
              height="50"
              width="50"
            />
          </div>
        );
      case "Loaded":
        const { GamesDataRecived } = this.state;
        // console.log(GamesDataRecived);
        return (
          <>
            <div className="col-12">
              <h1>Games filterHeader</h1>
            </div>
            {GamesDataRecived.map((i) => (
              <GamesCard
                id={i.id}
                backgroundImg={i.background_image}
                name={i.name}
                rating={i.rating}
              />
            ))}
          </>
        );

      default:
        return (
          <div>
            <p>failed</p>
          </div>
        );
    }
  };

  render() {
    return (
      <div className="Games">
        <Header />
        <div className="container-fluid">
          <div className="row">{this.renderView()}</div>
        </div>
      </div>
    );
  }
}

export default Games;
