import "./online.css";
const PF = process.env.REACT_APP_PUBLIC_FOLDER;

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarOnlineFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={PF+user.profilePicture}
                alt=""
                className="rightbarProfileImg"
              />
              <span className="rightbarFriendOnlineBadge"></span>
            </div>
            <span className="rightbarUsername">{user.username}</span>
          </li>
    </div>
  )
}
