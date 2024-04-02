import { useRef } from "react";
import { useNavigate } from "react-router";
import "./register.css";
import axios from "axios";
import { Link } from "react-router-dom";
const host = process.env.REACT_APP_API_HOST;

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Password don't match !");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post(host + "/api/auth/register", user);
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Socialtube</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on socialtube
          </span>
        </div>
        <div className="registerRight">
          <form className="registerBox" onSubmit={handleClick}>
            <input
              placeholder="Username"
              required
              ref={username}
              className="registerInput"
            />
            <input
              placeholder="Email"
              required
              ref={email}
              type="email"
              className="registerInput"
            />
            <input
              placeholder="Password"
              required
              ref={password}
              type="password"
              className="registerInput"
              minLength={6}
            />
            <input
              placeholder="Password Again"
              required
              ref={passwordAgain}
              type="password"
              className="registerInput"
              minLength={6}
            />
            <button className="registerButton" type="submit">
              Sign Up
            </button>
            <Link to={"/login"}>
              <button className="registerRegister" type="submit">
                Login into Account
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
