import { Link } from "react-router-dom";
import "./GamesCard.css";
import { AiOutlineShoppingCart, AiFillLike } from "react-icons/ai";

const GamesCard = (props) => {
  const { id, name, backgroundImg, rating } = props;

  return (
    <>
      <div className="col-6 col-md-4">
        <Link style={{ textDecoration: "none" }} to={`/games/${id}`}>
          <div className="GameCardDiv">
            <div className="imgDivGameCard">
              <img src={backgroundImg} alt={name} />
            </div>
            <div className="GameCardTextDiv">
              <div className="d-flex flex-row justify-content-between align-items-baseline">
                <h5>{name}</h5>
                <div className="d-flex flex-row align-items-baseline">
                  <AiFillLike className="likeIcon" />
                  <p>{rating}</p>
                </div>
              </div>
              <div className="btndivcard d-flex flex-row justify-content-between align-items-baseline ">
                <button className="GameCardBtn">
                  <Link
                    style={{ textDecoration: "none", color: "inherit" }}
                    to="/games/id"
                  >
                    Read More
                  </Link>
                </button>
                {/* <button className="CartBtn" onClick={addToCart}>
                  <AiOutlineShoppingCart className="CardIcon" />
                </button> */}
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default GamesCard;
