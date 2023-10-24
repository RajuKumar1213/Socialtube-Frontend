import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";

export default function Home() {
  return (
    <div>
      <>
        <Topbar />
        <div className="profile">
          <Sidebar />
          <div className="profileRight">
            <div className="profileRightTop">
              <div className="profileCover">
                <img
                  src="/assets/post/3.jpeg"
                  className="profileCoverImg"
                  alt="cover img"
                />
                <img
                  src="/assets/person/gorgia.jpg"
                  className="profileUserImg"
                  alt="cover img"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">Gorgia Meloni</h4>
                <span className="profileInfoDesc">Hello my friends !</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed />
              <Rightbar profile />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
