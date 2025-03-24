import { useState } from "react";
import { postData } from "../raw-data/post-data";

function Posts() {
  const [postList, setPostList] = useState(postData);

  const addLikes = (postId) => {
    const newLikes = postList.map((post) => {
      if (post.id === postId) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPostList(newLikes);
  };

  const disLikes = (postId) => {
    const newLikes = postList.map((post) => {
      if (post.id === postId && post.likes > 0) {
        return { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setPostList(newLikes);
  };

  return (
    <div className="app-wrapper">
      <h1 className="app-title">Posts</h1>
      <div className="post-list">
        {postList.map((post) => {
          return (
            <div className="post-item" key={post.id}>
              <div className="post-header">
                <h2>
                  #{post.id} {post.title}
                </h2>
                <div className="post-social-media-stats">
                  <span className="stats-topic">Likes: </span>
                  <span className="post-likes">{post.likes}</span>
                </div>
              </div>
              <p className="post-content">{post.content}</p>
              <div className="post-actions">
                <button
                  className="like-button"
                  onClick={() => addLikes(post.id)}
                >
                  Like
                </button>
                <button
                  className="dislike-button"
                  onClick={() => disLikes(post.id)}
                >
                  Dislike
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
