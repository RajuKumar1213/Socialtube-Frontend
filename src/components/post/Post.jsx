import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useContext } from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import axios from "axios";


const PF = process.env.REACT_APP_PUBLIC_FOLDER;
const HOST = process.env.REACT_APP_API_HOST;

export default function Post({ post }) {
  const [like, setLike] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [user, setUser] = useState({});
  const {user:currentUser} = useContext(AuthContext);

  const clickHandler = async() => {
    try {
      const res = await axios.put(HOST+`/api/posts/${currentUser._id.$oid}/like`)
    } catch (error) {
      
    }
    
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // fetching data from the api
  useEffect(() => {
    const fetchUser = async () => {
      // API CALL :
      const response = await fetch(`${HOST}/api/users?userId=${post.userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application-json",
        },
      });
      const json = await response.json();
      setUser(json);
    };
    fetchUser();
  }, [post.userId]);  
  

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <Link to={`/profile/${user.username}`}>
              <img
                src={
                  user.profilePicture
                    ? PF + user.profilePicture
                    : PF + "person/noavatar.png"
                }
                alt=""
                className="postProfileImg"
              />
            </Link>
            <span className="postUsername">{user.username}</span>
            <span className="postDate">{}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img src={PF + post.img} alt="" className="postImg" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              className="likeIcon"
              src="/assets/like.png"
              onClick={clickHandler}
              alt=""
            />
            <img
              className="likeIcon"
              src="/assets/heart.png"
              onClick={clickHandler}
              alt=""
            />
            <span className="postLikeCounter">{like} people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
