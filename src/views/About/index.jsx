import React from 'react'; 
import Footer from '../../Components/footer';
import {useLocation} from 'react-router-dom';
import { ContentSection, Intro, IntroBacground} from './about-us.style';

const About = ({props}) => {
    const location = useLocation();
//  const {name} = this.props.match.params;
    const data = location.state;
    console.log("ABOUT DETAILS::", location.state);
    // window.scrollTo(0, 0);
return (
    <div>
     <Intro>
      <IntroBacground>

      </IntroBacground>
     </Intro> 
     <ContentSection>

         <h1>About Me</h1>
         <h2>{data.About}</h2>
         <p>{data.description}</p>

     </ContentSection>
     <Footer/>
    </div>
);


}

export default About;