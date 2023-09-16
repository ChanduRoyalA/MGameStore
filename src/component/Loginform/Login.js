import { Component } from "react";
import Cookies from "js-cookie";
import { Redirect } from "react-router-dom";
import "./Loginform.css";
import { SiAmazongames } from "react-icons/si";
import Lottie from "lottie-react";
import animationData from "../MyAssets/animation_llotbh1v.json";

class Login extends Component {
  state = { username: "", password: "" };
  loginOK = (token) => {
    Cookies.set("token", token, { expires: 15 });
    const { history } = this.props;
    history.replace("/");
  };

  name = (event) => {
    this.setState({ username: event.target.value });
  };
  password = (event) => {
    this.setState({ password: event.target.value });
  };

  loginBtn = async (event) => {
    // event.preventDefault()
    const { username, password } = this.state;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      this.loginOK(data.jwt_token);
    }
  };

  render() {
    const Token = Cookies.get("token");
    if (Token !== undefined) {
      return <Redirect to="/" />;
    }
    const { name, password } = this.state;
    return (
      <>
        <div className="LoginPage">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-4 d-none d-md-flex animationDiv">
                <Lottie className="animation" animationData={animationData} />
              </div>
              <div className="col-md-1 col-2"></div>
              <div className="col-8 col-md-4 loginSmallDiv ">
                <div className="d-flex flex-row justify-content-center d-md-none">
                  <Lottie
                    className="animationSmall"
                    animationData={animationData}
                  />
                </div>
                <div className="LoginDiv">
                  <SiAmazongames className="loginIcon" />
                  <input
                    type="text"
                    onChange={this.name}
                    value={name}
                    id="name"
                    placeholder="Name"
                  />
                  <input
                    type="password"
                    onChange={this.password}
                    value={password}
                    id="password"
                    placeholder="Password"
                  />
                  <button className="button" onClick={this.loginBtn}>
                    Login
                  </button>
                </div>
              </div>
              <div className="col-md-1 col-2"></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
