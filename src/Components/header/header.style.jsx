import React from 'react';
import styled from "styled-components";

export const  Intro = styled.div`
 display:flex;
 height:100vh;
 background-color:#201a19;
//  201a19
@media screen and (max-width:481px){
    flex-direction:column;
} 

`;

export const Intro_left = styled.div`
flex:1;
`;

export const Intro_right = styled.div`
flex:1;
position:relative;
`;

export const Intro_h2 = styled.h2`
font-size:50px;
font-weight:700;
color:white;
margin:0 !important;

@media screen and (max-width:481px){
   font-size:20px;
} 

@media screen and (max-width:320px){
   font-size:20px;
}
@media screen and (max-width:800px) {
   /*CSS for wide screens*/
   font-size:20px;
 }
`;

export const Intro_h1 = styled.h1`
margin:0 !important;
font-size:60px;
font-weight:900;
color:white;
@media screen and (max-width:481px){
    font-size:40px;
 } 
 @media screen and (max-width:800px) {
   /*CSS for wide screens*/
   font-size:40px;
 }

`;


export const Intro_P = styled.p`
 padding-top: 20px;
 font-size:25px;
 color:white;
 opacity:0.5;
 

 @media screen and (max-width:320px){
   font-size:16px;
   color:white;
   opacity:0.9;
 }
`;


export const IntroImg = styled.img`
 width:100%;
 height:100%;
 object-fit:cover;
 position:relative;

 @media screen and (max-width:768px){
   object-fit:fit;
 }

`;
// clip-path: polygon(56% 0, 100% 55%, 50% 100%, 0 43%); e19351
// clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%);
export const IntroImgBackground = styled.div`
// clip-path: polygon(75% 0, 100% 0, 100% 43%, 100% 69%, 51% 100%, 0 34%, 40% 0);
clip-path: polygon(75% 0, 100% 0, 100% 43%, 100% 77%, 67% 100%, 0 33%, 31% 0);
background-color:#291203;
width:100%;
height:100%;
position:absolute;
top:0;
right:0;
z-index: 3;


@media screen and (max-width:481px){
    clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); 
 }

 @media screen and (max-width:768px){

    clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); 
}



@media screen and (max-width:800px) {
   clip-path: polygon(100% 0%, 100% 49%, 100% 100%, 25% 100%, 0% 50%, 25% 0%); 
}
`;


export const IntroNavContainer= styled.div`
 width:100%;
//  height:70px;
//  background-color: #59b256;
//  position:absolute;
//  top:0;
    z-index: 5;
    position: fixed;
    top: 0;

`;


