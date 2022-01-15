import {useLocation} from 'react-router-dom';

import mission1 from '../../assets/images/missions/mission1.jpg';
import Footer from '../../Components/footer';
import { ContainerGrid, ContentSection, GridItem, Intro, IntroBacground, IntroImg } from './missionStyle'
const Missions = () => {
    // window.scrollTo(0, 0);
    const location = useLocation();
    const data = location.state;
    console.log("MISSION::", data);
     const relatedImages = data.related_images;
    //  console.log(relatedImages);
    return ( <div>
       <Intro>
           <IntroBacground>
               <IntroImg src={data.featured_image.url}/> 
           </IntroBacground>
       </Intro>
       <ContentSection>
         <h1>{data.title}</h1>
         <p>{data.description}</p>
       </ContentSection>
       
           
           <ContainerGrid>
          {
               relatedImages.map((images, index)=>(
                
                <GridItem>
                    <IntroImg src={images.url}/> 
                </GridItem>

             )) 
          } 
            
           </ContainerGrid>
      
       
      
       <Footer/>
    </div> );
}
 
export default Missions;