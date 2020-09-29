import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import DashNav from './../../components/nav/DashboardNav';
// import Breadcrumbs from './../../components/breadcrumbs/Breadcrumbs';

function WebDev() {
    const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=20&filter=tag:web-development';
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
        {/* <Breadcrumbs/> */}
            <h1>Web Development</h1>
            <p>Projects for freelance contractors and small agencies</p>
            {postsToRender}
        </div>
    </React.Fragment>
  )
}

export default WebDev;