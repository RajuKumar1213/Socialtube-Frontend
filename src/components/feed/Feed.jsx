import { useEffect, useState } from "react";
import Share from "../share/Share";
import "./feed.css";
import Post from "../post/Post";

const HOST = process.env.REACT_APP_API_HOST;


export default function Feed({username}) {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      // API CALL :
      const response = await fetch(
        username
          ? `${HOST}/api/posts/profile/${username}`
          : `${HOST}/api/posts/timeline/656341d7938250e3e73d4d88`,
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
  }, [username]);

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
        {posts.map((p) => {  /// data is comming from the api and get saved into the posts state
          return <Post post={p} key={p._id} />;
        })}
      </div>
    </div>
  );
}
