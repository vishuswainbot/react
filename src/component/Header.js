import { CDN_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
  const [btnName, setBtnName] = useState("login");
  const onlineStatus = useOnlineStatus();
  
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={CDN_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">
              <button>Home</button>
            </Link>
          </li>
          <li>
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <button>Contact Us</button>
            </Link>
          </li>
          <li>
            <Link to="/grocery">
              <button>Grocery</button>
            </Link>
          </li>
          <li>
            <button>Cart</button>
          </li>
          <button
            className="login"
            onClick={() => {
              btnName == "login" ? setBtnName("logout") : setBtnName("login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
