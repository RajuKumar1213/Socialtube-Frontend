import { useContext, useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";
import { AuthContext } from "../../context/AuthContext";

const HOST = process.env.REACT_APP_API_HOST;

export default function Feed({ username }) {
  const [posts, setPosts] = useState([]);
  const {user} = useContext(AuthContext);


  console.log(user)

  useEffect(() => {
    const fetchPosts = async () => {
      // API CALL :
      const response = await fetch(
        username
          ? `${HOST}/api/posts/profile/${username}`
          : `${HOST}/api/posts/timeline/${user._id.$oid}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application-json",
          },
        }
      );
      const json = await response.json();
      setPosts(json);
    };

    fetchPosts();
  }, [username ,user._id.$oid ]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {/* {!posts ? <h2>No posts to show</h2> : posts.map((p) => {
          /// data is comming from the api and get saved into the posts state
          return <Post post={p} key={p._id} />;
        })} */}
        {Array.isArray(posts) ? (
          posts.map((p) => {
            return <Post post={p} key={p._id} />

          }
          )
        ) : (
          // Render a fallback UI or null if posts is not an array
          <h2 style={{marginTop : "30px"}}>No posts to see</h2>
        )}
      </div>
    </div>
  );
}
