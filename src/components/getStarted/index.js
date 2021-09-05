import React from "react";
import "./get.css";
import { Link } from "react-router-dom";
import Layout from "../layout";

const GetStarted = () => {
  return (
      <Layout>
          <p className="get-text">Stay connected to family and friends</p>
          <Link to="/signup">
            <button type="button" className="creat-btn">
              Create account
            </button>
          </Link>
          <br />
          <Link to="/login" className="link flex1">
            <p className="log">Log in</p>
          </Link>
      </Layout>

  );
};

export default GetStarted;
