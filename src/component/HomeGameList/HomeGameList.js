import { Component } from "react";
import "./HomeGameList.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const list = [
  {
    id: 0,
    name: "Grand Theft Auto V",
    img: "https://media.rawg.io/media/games/456/456dea5e1c7e3cd07060c14e96612001.jpg",
    rating: 4.47,
    ratingTop: 5,
  },
  {
    id: 1,
    name: "The Witcher 3: Wild Hunt",
    img: "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg",
    rating: 4.66,
    ratingTop: 5,
  },
  {
    id: 2,
    name: "Left 4 Dead 2",
    img: "https://media.rawg.io/media/games/d58/d588947d4286e7b5e0e12e1bea7d9844.jpg",
    rating: 4.61,
    ratingTop: 5,
  },
  {
    id: 3,
    name: "Tomb Raider (2013)",
    img: "https://media.rawg.io/media/games/021/021c4e21a1824d2526f925eff6324653.jpg",
    rating: 4.05,
    ratingTop: 5,
  },
  {
    id: 4,
    name: "Counter-Strike: Global Offensive",
    img: "https://media.rawg.io/media/games/736/73619bd336c894d6941d926bfd563946.jpg",
    rating: 3.47,
    ratingTop: 5,
  },
];

class HomeGameList extends Component {
  state = { item: list[0], index: 0 };
  componentDidMount() {
    const { index } = this.state;
    this.changeFrame = setInterval(this.changePic, 1500);
  }

  changePic = () => {
    const { index } = this.state;
    let i = index + 1;
    if (i > 4) {
      this.setState({ index: 0 });
      i = 0;
    }
    const newList = list[i];
    this.setState({ item: newList, index: i });
  };

  render() {
    const { item } = this.state;
    const { id, name, img, rating, ratingTop } = item;
    return (
      <Link style={{ textDecoration: "none" }} to="/games">
        <div className="listDiv">
          <div className="Listtext">
            <h>{name}</h>
            <p>
              Rating: {rating}/{ratingTop}
            </p>
          </div>
          <div className={`bgimg${id}`}></div>
          <div className="duplicate"></div>
        </div>
      </Link>
    );
  }
}

export default HomeGameList;
