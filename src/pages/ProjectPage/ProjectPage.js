import React, { useState, useEffect } from 'react';
import DashNav from './../../components/nav/DashboardNav';
import './styles.css';
import { Link } from 'react-router-dom';

const ProjectPage = ({match}) => {
    const [state, setState] = useState({});
    const [similarPosts, setSimilarPosts] = useState({});
    
    const fetchPost = async () => {
        const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/slug/${match.params.id}/?key=dcbd247e43dc938503593427ab&formats=html,plaintext`);
        const item = await res.json();
        setState(item.posts[0]);
    };

    const fetchSimilarPost = async () => {
        const res = await fetch('https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=2&filter=tag:web-development');
        const item = await res.json();
        setSimilarPosts(item);
    };

    useEffect(()=> {
        fetchPost();
        fetchSimilarPost();
    },[])

    let morePosts;
    if (similarPosts) {
        morePosts = similarPosts.posts.map(item => {
        return <div key={item.id}><Link to={`/${item.slug}`}>
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
        morePosts = "Loading...";
    }

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>{state.title}</h1>
            <div className='post-body' dangerouslySetInnerHTML={{__html: state.html }}/>
            <div>
                <hr/>
                <p>Similar projects:</p>
                <div className='similar-posts'>
                    {morePosts}
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectPage;