import React from 'react';
import { Carddescription, CardImage, CardTitle, MissonsContainer} from './missions.style';

import { AboutButton } from '../AboutButton';
import {useHistory} from 'react-router-dom';
const Missons = ({post}) => {
    const history = useHistory();
    //   console.log("my PRO", post.featured_image.url);
    // http://localhost:1337" + 
    return (
        <div id="mission">
           <MissonsContainer>
           <CardTitle>{post.title}</CardTitle>
           <CardImage src={post.featured_image.url}/>
           <Carddescription>
           {post.description} 
           </Carddescription>
           <AboutButton missons small onClick={()=> history.push({
               pathname: '/missions',
               state:post
           }) }>
               Read More
           </AboutButton>
           </MissonsContainer>
        </div>
    );
}


export default Missons;