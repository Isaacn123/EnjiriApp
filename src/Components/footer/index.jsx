import React from 'react';
import styled from 'styled-components';
import facebook from  '../../assets/images/icons/Facebook.png';
import instagram from '../../assets/images/icons/Instagram.png';
import twitter from   '../../assets/images/icons/Twitter.png';
import whatsapp from  '../../assets/images/icons/WhatsApp.png';
import youtube from  '../../assets/images/icons/youtube.png';

import { FooterleftConater, FooterMiddleConater, FooterMiddleContainer, FooterRightConater, FooterRightServices } from './footer.style';

const FooterContainer = styled.div`
background-color:#222222;
height:100vh;
padding: 60px 100px;
display:flex;
justify-content:space-between;

@media screen and (max-width:481px){
  flex-direction:column;
  padding: 10px 30px;
} 
`;

const Footer = ()=>{

    return (
        <div id="footer">
            <FooterContainer>
            <FooterleftConater>
         <h1>Enjiri Center Ministries</h1>

         <p>
         God called Evangelist Kalagi Peter into the ministry of evangelism at the age of 14, he never knew anything about preaching, but the fire to evangelize to people never stopped burning on the inside of him.. 
         </p>

         <div>
            <a href="http://"> <img src={instagram} alt="Instagram" srcset="" target="_blank"/></a>
            <a href="https://www.facebook.com/enjiri.center.ministries/" rel="noreferrer" target="_blank"> <img src={facebook} alt="Facebook" srcset="" /></a>
            <a href="http://"><img src={twitter} alt="Twitter" srcset="" target="_blank" /></a>
            <a href="https://www.youtube.com/channel/UChx1ivB1l3NJyuhRLSWucQg" rel="noreferrer" target="_blank"><img src={youtube} alt="youtube" srcset="" /></a> 
            {/* <a href="http://"><img src={whatsapp} alt="whatsap" srcset="" /></a>  */}

         </div>

            </FooterleftConater>
            <FooterMiddleContainer>
              <div>
              <h1>About</h1>
                
                <ul>
                    <li><a href="http://">History</a></li>
                    <li><a href="http://">Our Team</a></li>
                </ul>
              </div>
               
            </FooterMiddleContainer>
                <FooterRightConater>

                <div>
              <h1>Services</h1>
                
                <ul>
                    <li><a href="http://">Revival Meetings</a></li>
                    <li><a href="http://">missions</a></li>
                    <li><a href="http://">Crusades</a></li>
                </ul>
              </div>
                
                </FooterRightConater>    
               <FooterRightServices>
               <div>
              <h1>Others</h1>
                
                <ul>
                    <li><a href="http://">Contact us</a></li>
                    <li><a href="http://">Help</a></li>
                    <li><a href="http://">Privacy</a></li>
                </ul>
              </div>
                
                </FooterRightServices>  
            </FooterContainer>
        </div>
    )
}


export default Footer;