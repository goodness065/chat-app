import React, { useState, useRef } from "react";
import { withRouter } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase";
import Layout from "../layout";
// import eye from "../../assets/icons/close eye.svg";


const SignUp = () => {
  // const [click, setClick] = useState(true);
  // const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  // const togglePassword = () => {
  //   setPasswordShown(!passwordShown);
  // };
  // const changeEye = () => setClick(!click);

  const emailRef = useRef()
  const passwordRef = useRef()
  const passworConfiredRef = useRef()

  const handleSignUp =  async(e) =>{
    e.preventDefault();
    if (passwordRef.current.value !== passworConfiredRef.current.value) {
      return setError("Password do not match")
    }

    try{
      setError("");
      setLoading(true);
      await createUserWithEmailAndPassword(auth ,emailRef.current.value, passwordRef.current.value);
      alert("Your account has been created")
    } 
    catch{
      setError('Failed to create an account')
    }
    setLoading(false);
  };

  return (
    <Layout>
      {error && <h1>{error}</h1>}
      <form onSubmit={handleSignUp}>
        <input type="email" placeholder="Email" className="login-email" ref={emailRef} required/>
        {/* <div className="flex1 password-con">
          <input
            // type={passwordShown ? "text" : "password"}
            className="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            ref={passwordRef}
            required
          />
          <img
            src={eye}
            alt=""
            className={click ? "close-eye" : "open-eye"}
            onClick={() => {
              changeEye();
              togglePassword();
            }}
          />
        </div> */}
        <input
          type="password"
          placeholder="Password"
          className="login-email"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="login-email"
          ref={passworConfiredRef}
          required
        />
        <br />
        <button type="submit" className="login-btn" disabled={loading}>
          Register
        </button>
      </form>
    </Layout>
  );
};

export default withRouter(SignUp);
