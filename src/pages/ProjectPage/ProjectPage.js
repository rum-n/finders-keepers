import React, { useState, useEffect } from 'react';
import DashNav from './../../components/nav/DashboardNav';
import './styles.css';
import { Link } from 'react-router-dom';

const ProjectPage = ({match}) => {
    const [state, setState] = useState({});
    const [similarPost, setSimilarPost] = useState([]);
    const [tag, setTag] = useState('');
    
    const fetchPost = async () => {
        const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/slug/${match.params.id}/?key=dcbd247e43dc938503593427ab&formats=html,plaintext&include=tags`);
        const item = await res.json();
        setState(item.posts[0]);
        console.log(item.posts[0]);
        setTag(item.posts[0].primary_tag.slug);
    };

    const fetchSimilarPost = async () => {
        const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/tags/${tag}/?key=dcbd247e43dc938503593427ab`);
        const item = await res.json();
        setSimilarPost(item);
    };

    useEffect(()=> {
        fetchPost();
        fetchSimilarPost();
    },[])

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>{state.title}</h1>
            <div className='post-body' dangerouslySetInnerHTML={{__html: state.html }}/>
            <div>
                <hr/>
                <p>Similar project:</p>
                <div className='similar-posts'>
                    <h2>{similarPost.title}</h2>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectPage;