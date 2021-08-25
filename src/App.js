import './App.css';
import logo from "../src/assets/icons/logo2.png";
import Main from './page/Main';
function App() {
  return (
    <div className="app">
      <div className="app-con">
        <div className="app-logo-con">
        <img src={logo} alt="logo" className="app-logo" />
        </div>
      </div>
      <div  className="app-con2">
        <Main />
      </div>
    </div>
  );
}

export default App;
