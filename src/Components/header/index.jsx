/* eslint-disable react/jsx-pascal-case */
import React , {useState} from 'react';
import styled from 'styled-components';
import { Button } from '../Button';
import Navbar from '../navbar';
import Img from '../../../src/assets/images/intro_image.jpeg';
import {Intro, Intro_right,Intro_left,IntroNavContainer, Intro_h1, Intro_h2, Intro_P, IntroImg,IntroImgBackground} from './header.style'
import { BurgerMenu } from '../Burger';
import { SidebarMenu } from '../SidebarMenu';

   const IntroleftWrapper = styled.div`
   padding:50px;
   margin-top:50px;


   @media only screen 
  and (min-device-width: 768px) 
  and (max-device-width: 1024px) 
  and (-webkit-min-device-pixel-ratio: 1) {
   padding:10px;
      align-items:center;
      text-align:center;
      justify-content: center;
}
   
   @media screen and (max-width:481px){
      padding:10px;
      align-items:center;
      text-align:center;
      justify-content: center;
  } 

  @media screen and (max-width:768px){

   align-items:center;

   padding : 100px 20px;

  }

  @media screen and (max-width:1280px){
   padding : 30% 50px;
  }

  @media screen and (max-width:320px){
   
   align-items:center;
   padding:0px;
   margin-top:20px;
}

@media screen and (max-width:800px){
   padding : 100px 14px;
}



   `;
   const IntrorightWrapper = styled.div` 
   width:100%;
   height:100%;
`;

   const ButtonContainer = styled.div`
  position:absolute;
  bottom: 30px;
  left:80px;

  @media screen and (max-width:481px){
   top: 40%;
   transform: translateX(50%);
   display:none;
} 

@media screen and (max-width:768px){

   top: 60%;
   transform: translateX(-5%);
   
}

@media screen and (max-width:1280px){
   bottom: 100px;
  }

  @media screen and (max-width:320px){
   top: 35%;
   transform: translateX(10%);
 }

 @media screen and (max-width:800px){
   top: 80%;
   transform: translateX(-5%);
 }


   `;

  
const Header =() => {
   const [open, setOpen ] = useState(false);
    return <div> 
       <IntroNavContainer>
          <Navbar/>
           <BurgerMenu  open={open} setOpen={setOpen} />
           <SidebarMenu open={open} setOpen={setOpen} />
         
       </IntroNavContainer>
     
       
   <Intro>
   
       <Intro_left> 
         <IntroleftWrapper>
              <Intro_h2>Welcom to</Intro_h2>
              <Intro_h1>ENJIRI CENTER</Intro_h1>
              <Intro_P>Preaching Christ Restoring Hope</Intro_P>

              <ButtonContainer>
                  <Button>JOIN US TODAY</Button> 
              </ButtonContainer>
             
         </IntroleftWrapper>
    
       </Intro_left>
       <Intro_right>
           <IntrorightWrapper>
              <IntroImgBackground>
              <IntroImg src={Img}/> 
              </IntroImgBackground>
                
           </IntrorightWrapper>
           </Intro_right> 
   </Intro>

    </div>
}


export default Header;