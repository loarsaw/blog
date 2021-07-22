import React from "react";
import "./Navbar.css";
function Navbar() {
  const user = true;
  return (
    <div className="top">
      <div className="topLeft">
        <h1>Blogger</h1>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <div className="link">HOME</div>
          </li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">
            <div className="link">WRITE</div>
          </li>
          {user && <li className="topListItem">LOGOUT</li>}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <div className="link">
            <img
              className="topImg"
              src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
            />
          </div>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <div className="link" to="/login">
                LOGIN
              </div>
            </li>
            <li className="topListItem">
              <div className="link" to="/register">
                REGISTER
              </div>
            </li>
          </ul>
        )}
        <i class="topSettingIcon fas fa-cog"></i>
      </div>
    </div>
  );
}

export default Navbar;
