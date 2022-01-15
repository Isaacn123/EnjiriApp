import React from 'react';
import styled from 'styled-components';

export const AboutLeftContainer = styled.div`
flex:1;
display:flex;
justify-content:center;
align-items:center;
position:relative;
height:100%;
color:white;

@media screen and (max-width:481px){
   width:100%;
}
`;

export const AboutRightContainer = styled.div`
flex:1;
justify-content:center;
// padding:50px;

@media screen and (max-width:1024px){
   
}
`;

export const  AboutCardBackgroud = styled.div`
position:absolute;
top:50px;
left:50px;
background-color:#333;
border-radius:30px;
width:60%;
height:70vh;

@media screen and (max-width:481px){
   display:none;
}
`;
export const  AboutCard = styled.div`
width:60%;
height:70vh;
border-radius:30px;
position:relative;
overflow:hidden;

@media screen and (max-width:481px){
    margin-top:10px;
    height:40vh;
}




`;

export const  CardImg = styled.img`
 height:110%;
 width:100%;
 object-fit:cover;
`;


export const AboutMe = styled.h1`
color:#f7e7db;
@media screen and (max-width:481px){
  font-size:20px;
  padding-top:5px;
}


@media screen and (max-width:800px){
  font-size:20px;
  padding-top:5px;
}




`;

export const AboutSub = styled.p`
margin: 20px 0px;
color:#f7e7db;

@media screen and (max-width:320px){
  padding: 0px 10px;
 
 }

`;

export const AboutDescription = styled.p`
font-weight:300;
margin: 20px 0px;
padding-right:3rem;
color:#f0c6a8;
@media screen and (max-width:481px){
    align-items:center;
  font-size:12px;
  padding-right:0px;

}



@media screen and (max-width:320px){
  font-size:10px !important;
  display: -webkit-box !important;
  -webkit-line-clamp: 9 !important; /* number of lines to show */
          line-clamp: 9 !important; 
   -webkit-box-orient: vertical;
   display:none !important;
}

@media screen and (max-width:280px){
  // padding: 40px 3px;
  font-size:10px;
  display: -webkit-box;
  -webkit-line-clamp: 15; /* number of lines to show */
          line-clamp: 15; 
   -webkit-box-orient: vertical;
  }

  @media screen and (max-width:800px){
    font-size:10px;
    display: -webkit-box;
    -webkit-line-clamp: 11; /* number of lines to show */
            line-clamp: 11; 
     -webkit-box-orient: vertical;
     
    }
  }

  @media screen and (max-width:1024px){
    font-size:14px;
  }
`;


export const AboutButtonContainer = styled.div`
 padding:50px;

 @media screen and (max-width:481px){
  padding:0px;
  margin:10px;
 } 
`;
