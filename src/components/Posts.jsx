import { useState } from "react";
import {postData} from "../raw-data/post-data"


function Posts() {
  const [posts, setPosts] = useState(postData)

  function handleLike(id){
    const newPosts = posts.map((post) => post.id === id ? {...post, likes: post.likes+1} : {...post})
    setPosts(newPosts)
  }

  function handleDisLike(id){
    const newPosts = posts.map((post)=> ((post.id===id && post.likes>0) ? 
      {...post, likes: post.likes-1} : post))
    setPosts(newPosts)
  }


  return (
    <div class="app-wrapper">
      <h1 class="app-title">Posts</h1>
      <div class="post-list">
      {posts.map((post)=>{
        return(
          <div class="post-item" key={post.id}>
            <div class="post-header">
              <h2>Post Title #{post.id}</h2>
              <div class="post-social-media-stats">
                <span class="stats-topic">Likes: </span>
                <span class="post-likes">{post.likes}</span>
              </div>
            </div>
            <p class="post-content">
              {post.content}
            </p>
            <div class="post-actions">
              <button class="like-button" onClick={()=>handleLike(post.id)}>Like</button>
              <button class="dislike-button" onClick={()=>handleDisLike(post.id)}>Dislike</button>
            </div>
          </div>
        )
      })}
      </div>
    </div>
  );
}

export default Posts;
