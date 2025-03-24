import React, { useState, useEffect } from 'react';
import {postData} from '../raw-data/post-data';
function Posts() {
  const [posts, setPosts] = useState([]);
  const [likes, setLikes] = useState(0);

  useEffect(() => 
  {
    setPosts(postData);
  }, []);
  const handleLike = (id) => {
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes + 1 };
      }
      return post;
    });
    setPosts(newPosts);
  }

  const handleDisLike = (id) => {
    const newPosts = posts.map((post) => {
      if (post.id === id) {
        return { ...post, likes: post.likes - 1 };
      }
      return post;
    });
    setPosts(newPosts);
  }

  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
        {posts.map((post) => (
          <div class="post-item" key={post.id}>
            <div class="post-header">
              <h2>{post.title}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">
              {post.content}
            </p>
            <div class="post-actions">
              <button class="like-button" onClick={() => handleLike(post.id)}>Like</button>
              <button class="dislike-button" onClick={() => handleDisLike(post.id)}>Dislike</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
