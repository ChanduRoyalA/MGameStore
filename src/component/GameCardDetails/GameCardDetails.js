import { Component } from "react";
import React from "react";

import Header from "../Header/Header";
import "./GameCardDetails.css";
import VideoComponent from "../VideoDetails/VideoDetails";
import { AiOutlineShoppingCart } from "react-icons/ai";

class GameCardDetails extends Component {
  state = { GameDetails: [], pageStatus: "Loading" };

  componentDidMount() {
    this.getGameDetails();
  }

  getGameDetails = async () => {
    const { history } = this.props;
    // console.log(history.location.pathname);
    const url = `https://api.rawg.io/api${history.location.pathname}?key=b9391f7a56ae4401ad6ceadc9cdc02bb`;
    // console.log(url);
    const options = {
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    this.setState({ GameDetails: data, pageStatus: "Loaded" });
  };
  addToCart = () => {
    console.log("added");
  };
  renderView = () => {
    const { pageStatus } = this.state;
    switch (pageStatus) {
      case "Loading":
        return (
          <div className="ViewDiv">
            <p>Loading</p>
          </div>
        );
      case "Loaded":
        const { GameDetails } = this.state;
        const {
          description_raw,
          developers,
          website,
          released,
          stores,
          name,
          genres,
          background_image,
          id,
        } = GameDetails;
        // console.log(GameDetails);
        return (
          <>
            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 col-md-6 col-lg-4">
                  <div className="imgDiv">
                    <img style={{ width: "100%" }} src={background_image} />
                    <div>
                      <VideoComponent id={id} />
                    </div>
                  </div>
                </div>
                <div className="col-12 col-md-6 col-lg-8">
                  <div className="GameDetailsTextDiv">
                    <div>
                      <div className="d-flex justify-content-between">
                        <h3>
                          <a href={website}>{name}</a>
                        </h3>
                        <div>
                          <button className="CartBtn" onClick={this.addToCart}>
                            <AiOutlineShoppingCart className="CardIcon" />
                          </button>
                        </div>
                      </div>
                      <p>{description_raw}</p>
                      <div className="d-flex">
                        <p>RELEASE DATE:</p>
                        <p>{released}</p>
                      </div>
                      <div className="d-flex flex-column">
                        <p>DEVELOPERS</p>
                        <ul style={{ listStyle: "none" }}>
                          {developers.map((i) => (
                            <li>{i.name}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="GenresDiv">
                        <p>Genres</p>
                        <ul
                          style={{ listStyle: "none" }}
                          className="d-flex gap-3"
                        >
                          {genres.map((i) => (
                            <li>{i.name}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="d-none d-lg-block">
                        <div className="storesDiv">
                          <p>Stores:</p>
                          {stores.map((i) => (
                            <div className="IndividualstoresDiv">
                              <a
                                target="_blank"
                                href={`https://${i.store.domain}`}
                              >
                                {i.store.name}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 d-lg-none">
                  <div className="storesDiv">
                    <p>Stores:</p>
                    {stores.map((i) => (
                      <div className="IndividualstoresDiv">
                        <a target="_blank" href={`https://${i.store.domain}`}>
                          {i.store.name}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
      <div className="GameCardDetails">
        <Header />
        {this.renderView()}
      </div>
    );
  }
}

export default GameCardDetails;
