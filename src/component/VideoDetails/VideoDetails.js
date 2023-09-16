import { Component } from "react";
import ReactPlayer from "react-player";
import "./VideoDetails.css";

class VideoComponent extends Component {
  state = {
    videoUrlList: "",
    pageStatus: "Loading",
    quality: "max",
    results: "",
  };

  componentDidMount() {
    this.getVideo();
  }

  getVideo = async () => {
    const { id } = this.props;
    const url = `https://api.rawg.io/api/games/${id}/movies?key=b9391f7a56ae4401ad6ceadc9cdc02bb`;
    const options = {
      medthod: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    // console.log(data);
    if (data.results.length === 0) {
      this.setState({ results: false, pageStatus: "Loaded" });
    } else if (data.results.length !== 0) {
      this.setState({
        videoUrlList: data.results[0].data,
        pageStatus: "Loaded",
        results: true,
      });
    }
  };

  changeQuality = (event) => {
    this.setState({ quality: event.target.value });
  };

  renderView = () => {
    const { pageStatus } = this.state;
    switch (pageStatus) {
      case "Loading":
        return (
          <div className="VideoViewDiv">
            <p>Loading</p>
          </div>
        );
      case "Loaded":
        const { quality, videoUrlList, results } = this.state;
        switch (results) {
          case true:
            return (
              <div className="VideoDiv">
                <div>
                  <ReactPlayer
                    height="100%"
                    width="100%"
                    controls
                    playing
                    url={videoUrlList[quality]}
                  />
                </div>
                <div className="videoBtnDiv">
                  <button onClick={this.changeQuality} value="max">
                    Max
                  </button>
                  <button onClick={this.changeQuality} value="480">
                    480p
                  </button>
                </div>
              </div>
            );
          default:
            return (
              <div className="VideoViewDiv">
                <p>No Preview</p>
              </div>
            );
        }
      default:
        return (
          <div className="VideoViewDiv">
            <p>failed</p>
          </div>
        );
    }
  };

  render() {
    return <div>{this.renderView()}</div>;
  }
}

export default VideoComponent;
