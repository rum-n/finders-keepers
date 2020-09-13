// import React, { useEffect, useState} from 'react';

// export const PostsContext = React.createContext();

// export const PostsProvider = ({ children }) => {
//     const [allPosts, setAllPosts] = useState();
//     const url = 'https://app.finderskeepers.pro/ghost/api/v3/content/posts/?key=dcbd247e43dc938503593427ab&include=tags&limit=20&filter=tag:web-development';
    
//     const fetchPosts = async () => {
//         const res = await fetch(url);
//         const resPosts = await res.json();
//         setAllPosts(resPosts);
//     };

//     useEffect(()=> {
//         fetchPosts();
//     },[])

//     return (
//         <PostsContext.Provider value={{allPosts}}>
//             {children}
//         </PostsContext.Provider>
//     );
// };