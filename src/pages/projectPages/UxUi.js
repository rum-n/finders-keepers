import React, { useState, useEffect } from 'react';
import './styles.css';
import DashNav from './../../components/nav/DashboardNav';

function UxUi() {
    const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=50&filter=tag:ux-ui-design';
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
        return <div className='job-wrapper' key={item.id}>{item.title}
          <div className='date'>
            Last updated: {item.updated_at}
          </div>
        </div>;
      });
    } else {
        postsToRender = "Loading...";
    }
    
  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>UX & UI Design</h1>
            {postsToRender}
        </div>
    </React.Fragment>
  )
}

export default UxUi;