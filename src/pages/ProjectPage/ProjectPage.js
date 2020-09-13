import React, { useState, useEffect } from 'react';
import DashNav from './../../components/nav/DashboardNav';

const ProjectPage = ({match}) => {
    const [state, setState] = useState({});
    
    const fetchPost = async () => {
        const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/slug/${match.params.id}/?key=dcbd247e43dc938503593427ab&formats=html,plaintext`);
        const item = await res.json();
        setState(item.posts[0]);
        console.log(item.posts[0]);
    };

    useEffect(()=> {
        fetchPost();
    },[])

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>{state.title}</h1>
            <div>
                {state.plaintext}
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectPage;