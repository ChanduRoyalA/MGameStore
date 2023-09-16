import { Link } from "react-router-dom";

const Notfound = () => {
  const k = "";
  return (
    <div>
      <h1>Notfound</h1>
      <Link to="/">
        <button>Home</button>
      </Link>
    </div>
  );
};

export default Notfound;
