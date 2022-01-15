import styled from 'styled-components';

export const  Intro = styled.div`
 display:flex;
 height:100vh;
 background-color:#201a19;
//  201a19
@media screen and (max-width:481px){
    flex-direction:column;
} 

`;

export const  IntroBacground = styled.div`
 height:100vh;
 width:100vw;
 background-repeat: no-repeat;
 background-size: cover;
 

`;


export const  ContentSection = styled.div`
 background: white;
 width:100vw;

 padding: 50px 10px;

 h1{
     text-align: center;
     padding: 20px;
     font-weight: bold;
     color:#d9831f;
 }

 h2{
    text-align: left;
    padding: 20px 60px;

}

 p{
     padding: 0px 60px;
     font-size:16px;
     font-weight: 400px;
     line-Height: 1.8rem;
     color:grey;
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


export const ContainerGrid = styled.div`
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
grid-gap: 12px;
`;


export const GridItem = styled.div`
 min-height:300px;
 background:#eee;
`;