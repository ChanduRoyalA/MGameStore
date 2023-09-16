import Cookies from "js-cookie";
import { Link, withRouter } from "react-router-dom";
import { SiAmazongames } from "react-icons/si";
import "./Header.css";

const Header = (props) => {
  const k = "";
  const Logout = () => {
    Cookies.remove("token");
    const { history } = props;
    history.replace("/login");
  };
  return (
    <navbar>
      <div>
        <SiAmazongames className="logoIcon" />
      </div>
      <div className="subnavs">
        <Link to="/">
          <button className="btn01">Home</button>
        </Link>
        <Link to="/cart">
          <button className="btn01">Cart</button>
        </Link>
        <Link to="/games">
          <button className="btn01">Games</button>
        </Link>
        <button className="btn01" onClick={Logout}>
          Logout
        </button>
      </div>
    </navbar>
  );
};

export default withRouter(Header);
