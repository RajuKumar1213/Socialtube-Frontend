import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import "./profile.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

const HOST = process.env.REACT_APP_API_HOST;
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Profile() {
  // eslint-disable-next-line
  const params = useParams();
  console.log(params)
  const [user, setUser] = useState({});
  useEffect(() => {
    const fetchPosts = async () => {
      // API CALL :
      const response = await fetch(`${HOST}/api/users/?username=${params.username}`, {
        method: "GET",
        headers: {
          "Content-Type": "application-json",
        },
      });
      const json = await response.json();
      setUser(json);
      console.log(json)
    };

    fetchPosts();
  }, [params.username]);

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
                  src={user.coverPicture ? PF+user.coverPicture : PF+"post/no-cover.jpg"}
                  className="profileCoverImg"
                  alt="cover img"
                />

                <img
                  src={user.profilePicture ? PF+user.profilePicture : PF+"person/noavatar.png"}
                  className="profileUserImg"
                  alt="cover img"
                />
              </div>
              <div className="profileInfo">
                <h4 className="profileInfoName">{user.username}</h4>
                <span className="profileInfoDesc">{user.desc}</span>
              </div>
            </div>
            <div className="profileRightBottom">
              <Feed username={params.username}/>
              <Rightbar user={user} />
            </div>
          </div>
        </div>
      </>
    </div>
  );
}
