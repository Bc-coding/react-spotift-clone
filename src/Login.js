import React from "react";
import "./Login.css";
import logo from "./assets/Spotify_Logo_RGB_White.png";

import { loginURL } from "./spotify";

function Login() {
  return (
    <div className="wrapper__login">
      <div className="login">
        <div className="login__div">
          <img src={logo} alt="" className="login__div__logo" />
        </div>

        <a href={loginURL}>LOGIN WITH SPOTIFY</a>
      </div>
    </div>
  );
}

export default Login;
