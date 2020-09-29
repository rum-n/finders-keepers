import React, { useState, useEffect } from 'react';
import DashNav from './../../components/nav/DashboardNav';
import './styles.css';
// import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';

const ProjectPage = ({match}) => {
    const [state, setState] = useState({});
    // const [similarPost, setSimilarPost] = useState({});
    // const [tag, setTag] = useState([]);
    
    const fetchPost = async () => {
        const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/slug/${match.params.id}/?key=dcbd247e43dc938503593427ab&formats=html,plaintext&include=tags`);
        const item = await res.json();
        setState(item.posts[0]);
        console.log(item.posts[0]);
    };

    // const fetchSimilarPost = async () => {
    //     // const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/tags/web-development/?key=dcbd247e43dc938503593427ab`);
    //     const res = await fetch(`https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=20&filter=tag:web-development`)
    //     const item = await res.json();
    //     // function randomItem(items) {
    //     //     return items[Math.floor(Math.random()*items.length)];
    //     // }
    //     setSimilarPost(item.posts[0]);
    //     console.log(item.posts[0]);
    // };

    useEffect(()=> {
        fetchPost();
    },[])

    // let backlink;
    // if (state.primary_tag.slug = "web-development"){
    //     return backlink = 'web-dev';
    // } else if (state.primary_tag.slug = "ux-ui-design") {
    //     return backlink = 'ux-ui-design';
    // } else if (state.primary_tag.slug = "graphic-design") {
    //     return backlink = 'graphic-design';
    // } else if (state.primary_tag.slug = "mobile-development") {
    //     return backlink = 'mobile-development';
    // }

    // let postsToRender;
    // if (state) {
    //     postsToRender = state.posts.map(item => {
    //     return <div className='job-wrapper' key={item.id}><Link to={`/${item.slug}`}>
    //       <h2>{item.title}</h2>
    //     <div>
    //       <p>{item.excerpt}</p>
    //     </div>
    //       <div className='date'>
    //         Last updated: {Date.parse(item.updated_at)}
    //       </div>
    //       </Link></div>;
    //   });
    // } else {
    //     postsToRender = "Loading...";
    // }

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
        {/* <Breadcrumbs/> */}
            <h1>{state.title}</h1>
            <div className='post-body' dangerouslySetInnerHTML={{__html: state.html }}/>
            <div>
                <hr/>
                {/* <Link to={backlink}><p className='back'>Back</p></Link> */}
                {/* <p>Similar project:</p>
                <div className='similar-posts'><Link to={`/${similarPost.slug}`}>
                    <h2>{similarPost.title}</h2>
                    <p>{similarPost.excerpt}</p>
                    </Link></div> */}
            </div>
        </div>
    </React.Fragment>
  )
}

export default ProjectPage;