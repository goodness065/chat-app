import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import GetStarted from "./components/getStarted";
import Login from "./components/login";
import SignUp from "./components/Register";
import { AuthProvider } from "../src/contexts/AuthContext";
// import logo from "../src/assets/icons/logo2.png";
// import Main from './page/Main';
import Chat from "./components/chat/Chat";
// import PrivateRoute from "./PrivateRoute";
// import Login from "./components/login";
function App() {
  return (
    // <div className="app">
    //   <div className="app-con">
    //     <div className="app-logo-con">
    //     <img src={logo} alt="logo" className="app-logo" />
    //     </div>
    //   </div>
    //   <div  className="app-con2">
    //     <Main />
    //   </div>
    // </div>
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path="/" component={GetStarted} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <Route  path="/chat" exact>
            <Chat />
          </Route>
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
