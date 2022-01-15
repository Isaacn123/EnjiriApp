import styled from 'styled-components';

export const MissonsContainer = styled.div`
background-color:#f6eedf;
display:flex;
flex-direction:column;
padding: 50px 100px;
align-items: center;
text-align: center;

@media screen and (max-width:481px){
    padding: 10px 20px;
 }
`;


export const MTexts = styled.div`
 width:70%;
 @media screen and (max-width:481px){
    width: 100%;
 } 
`;

export const MTitle = styled.h1`
font-size:50px;
font-weight:600;
color:#904608;
@media screen and (max-width:481px){
    font-size:30px;
 } 

 
`;

export const Mdescription = styled.p`
margin: 20px 0px;
font-size:16px;

@media screen and (max-width:481px){
    font-size:13px;
    margin: 5px 0px;
 } 
`;

export const MList= styled.div`
display:flex;
flex-wrap:wrap; 
width:100%;
align-items:center;
justify-content:space-between;

@media screen and (max-width:481px){
    flex-direction:column;
}

@media screen and (max-width:768px){
    display:flex;
    flex-wrap:wrap;
 }

 @media screen and (max-width:1024px){
    display:flex;
    flex-wrap:wrap;
  }

`;

