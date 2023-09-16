import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "./component/MyHome/Home";
import Login from "./component/Loginform/Login";
import Notfound from "./component/Notfound/Notfound";
import Cart from "./component/MyCart/Cart";
import "./App.css";
import ProtectedRoute from "./component/ProtectedRoute/ProtectedRoute";
import Games from "./component/Games/Games";
import GameCardDetails from "./component/GameCardDetails/GameCardDetails";

const App = () => {
  const k = "";
  return (
    <div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/" component={Home} />
        <ProtectedRoute exact path="/cart" component={Cart} />
        <ProtectedRoute exact path="/games" component={Games} />
        <ProtectedRoute exact path="/games/:id" component={GameCardDetails} />
        <Route path="*" component={Notfound} />
      </Switch>
    </div>
  );
};

export default App;
