import "./online.css";

export default function Online({user}) {
  return (
    <div>
      <li className="rightbarOnlineFriend">
            <div className="rightbarProfileImgContainer">
              <img
                src={user.profilePicture}
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
