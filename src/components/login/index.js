import React, {useState, useRef} from "react";
import "./login.css";
import eye from "../../assets/icons/close eye.svg";
import google from "../../assets/icons/google.png";
import Layout from "../layout";
import { Link } from "react-router-dom";
import { signInWithRedirect, signInWithEmailAndPassword } from "firebase/auth";
import {auth, provider} from "../../firebase";

const Login = () => {

  const [click, setClick] = useState(true);
  const [passwordShown, setPasswordShown] = useState(false);
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const emailRef = useRef()
  const passwordRef = useRef()

  // const {user} = useContext(AuthContext);

  // if (user) {
    // alert(`${user.email} is logged in`)
    // return <Redirect to="/chat" />;
  // }

  const handleLogin =  async(e) =>{
    e.preventDefault();

    try{
      setError("");
      setLoading(true);
      await signInWithEmailAndPassword(auth ,emailRef.current.value, passwordRef.current.value);
      alert("You have been signed in successfully")
    } 
    catch{
      setError('Failed to sign in')
      // eslint-disable-next-line
      error('')
    }
    setLoading(false);
    // eslint-disable-next-line
    loading(false)
  };

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const changeEye = () => setClick(!click);

  return (
    <Layout>
        <div className="login-button google" onClick={() => {signInWithRedirect(auth, provider)}}>
          <img src={google} alt="" className="google-icon" />
          <p>Continue with Google</p>
        </div>
        <br />
        <div className="flex1 line-con">
          <div className="line"></div>
          <p className="line-text">OR</p>
          <div className="line"></div>
        </div>

        <form onSubmit={handleLogin}>
          <input type="email" placeholder="Email" className="login-email" ref={emailRef} required/>
          <div className="flex1 password-con">
          <input
            type={passwordShown ? "text" : "password"}
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
        </div>
        <Link to="" className="link forgot">
          Forgot your password?
        </Link>
        <br />
        <button type="submit" className="login-btn">
          Login
        </button>
        </form>
        <div className="flex1">
          <p className="no-acc">No Account?</p>
          <Link to="/signup" className="link sign-text">
            Sign up
          </Link>
        </div>
    </Layout>
 
  );
};

export default Login;
