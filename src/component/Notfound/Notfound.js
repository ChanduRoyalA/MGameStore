import { Link } from "react-router-dom";

const Notfound = () => {
  const k = "";
  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ color: "white", backgroundColor: "black", height: "100vh" }}
    >
      <h3>Go to Login Page to view Site</h3>
      <p>UserName:rahul</p>
      <p>Password:rahul@2021</p>
      <Link to="/">
        <button>Go to Login page</button>
      </Link>
    </div>
  );
};

export default Notfound;
