import React, { useState, useEffect } from 'react';
// import './styles.css';
import DashNav from './../../components/nav/DashboardNav';

function Dashboard() {
    const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=50';
    const [state, setState] = useState();
    
    const fetchPosts = async () => {
        const res = await fetch(url);
        const allPosts = await res.json();
        setState(allPosts);
    };

    useEffect(()=> {
        fetchPosts();
    },[])

    // let postsToRender;
    // if (state) {
    //     postsToRender = state.posts.map(item => {
    //     return <div key={item.id}>{item.title}</div>;
    //   });
    // } else {
    //     postsToRender = "Loading...";
    // }

    let postsToRender;
    if (state) {
        postsToRender = state.posts.map(item => {
        return <div key={item.id}>{item.title}</div>;
      });
    } else {
        postsToRender = "Loading...";
    }

    // let webDevPosts;
    // if (state) {
    // const webDevPosts = state.posts.tags.filter(item => item.slug === 'web-development')
    // };
    console.log(postsToRender);

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>Web Development</h1>
            {postsToRender}
        </div>
    </React.Fragment>
  )
}

export default Dashboard;