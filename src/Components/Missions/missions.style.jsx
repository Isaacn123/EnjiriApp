import styled from 'styled-components';

export const MissonsContainer = styled.div`
 width:300px;
 height:50vh;
 margin: 20px 10px;
 background-color: #fff; 
 border-radius: 10px 10px 0px 0px;
 padding: 1rem 2rem;
 overflow:hidden;

 @media screen and (max-width:481px){
       width: 340px;
       height:55vh;
    }

    @media screen and (max-width:768px){
    width: 260px;
    height:40vh;
    padding: 2rem 0rem;
    }

    @media screen and (max-width:1024px){
      width: 250px;
      height:60vh;
      padding: 2rem 0rem;
    }

    @media screen and (max-width:400px){
      width: 340px;
      height:42vh;
    }

    @media screen and (max-width:320px){
      width: 250px;
      height:70vh;
      padding: 2rem 0rem; 
    }

    @media screen and (max-width:800px){
      width: 240px;
      height:70vh;
      padding: 2rem 0rem; 
    }
`;


export const CardImage = styled.img`
 width:14rem;
 height:12rem;
 object-fit:cover;
`;

export const CardTitle = styled.h1`
font-size:18px;
font-weight:300;
color:#f64b3c;
text-transform:uppercase;
`;

export const Carddescription = styled.p`
width:100%;
padding-top:10px;
display: -webkit-box;
   -webkit-line-clamp: 2; /* number of lines to show */
           line-clamp: 2; 
   -webkit-box-orient: vertical;
   font-size: 12px;
   font-weight: 200;
overflow:hidden;

@media screen and (max-width:400px){
   display: -webkit-box;
   -webkit-line-clamp: 3; /* number of lines to show */
           line-clamp: 3; 
   -webkit-box-orient: vertical;
   padding:3px 20px;
   width:100%;
 }

 @media screen and (max-width:800px){
  padding:0px 5px;
 }

`;