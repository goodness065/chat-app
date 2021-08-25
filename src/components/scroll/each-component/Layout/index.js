import Video from "../../../../assets/icons/videocam.png";
import "./layout.css";
import "./imgCon.css";
const Layout = ({ name, img, time, key }) => {
  return (
    <div className="card" key={key}>
      <div className="card-img">
        <div className="img-con">
          <img src={img} alt="" className="img-con-item" />
        </div>
      </div>
      <div className="card-main">
        <p className='card-name'>{name}</p>
        <p className="card-time">{time}</p>
        <div className="card-foot-con">
          <div title="Start video call" className="card-video">
            <img src={Video} alt=" " className="layout-video" />
          </div>
          <div className="card-options">
            <h1 title="More options">...</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
