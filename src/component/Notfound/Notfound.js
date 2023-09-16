import { Link } from "react-router-dom";

const Notfound = () => {
  const k = "";
  return (
    <div
      className="d-flex flex-row justify-content-center align-items-center"
      style={{ color: "white", backgroundColor: "black" }}
    >
      <h1>Notfound</h1>
      <p>UserName:rahul</p>
      <p>Password:rahul@2021</p>
      <Link to="/">
        <button>Go to Login page</button>
      </Link>
    </div>
  );
};

export default Notfound;
