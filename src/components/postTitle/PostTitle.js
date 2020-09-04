import React, { useState, useEffect } from 'react';
// import './styles.css';

const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&limit=5';

function PostTitle() {
    const [state, setState] = useState();
    
    const fetchPosts = async () => {
        const res = await fetch(url);
        const allPosts = await res.json();
        setState(allPosts);
    };

    useEffect(()=> {
        fetchPosts();
    },[])

    let postsToRender;
    if (state) {
        postsToRender = state.posts.map(item => {
        return <div key={item.id}>{item.title}</div>;
      });
    } else {
        postsToRender = "Loading...";
      }

    return (
        <div>
            {postsToRender}
        </div>
    )
  }
  
  export default PostTitle;