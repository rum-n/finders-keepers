import React, { useState, useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import DashNav from './../../components/nav/DashboardNav';

function MobileDev() {
    const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=50&filter=tag:mobile-development';
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
        return <div className='job-wrapper' key={item.id}><Link to={`/${item.slug}`}>
        <h2>{item.title}</h2>
      <div>
        <p>{item.excerpt}</p>
      </div>
        <div className='date'>
          Last updated: {Date.parse(item.updated_at)}
        </div>
        </Link></div>;
      });
    } else {
        postsToRender = "Loading...";
    }
    
  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>Mobile Development</h1>
            {postsToRender}
        </div>
    </React.Fragment>
  )
}

export default MobileDev;