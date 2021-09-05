import React from "react";
import "./layout.css";
import Logo from "../../assets/icons/stone.png";
import { Link } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="layout-started">
      <div className="dark">
        <div className="layout-con">
          <div className="flex1">
            <div className="layout-logo-con">
              <Link to="/">
                <img src={Logo} alt="" className="layout-logo" />
              </Link>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
