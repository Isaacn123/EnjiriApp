import styled from 'styled-components';
import mission from '../../assets/images/missions/mission1.jpg';

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
 background-image: url(${mission});

`;


export const  ContentSection = styled.div`
 background: white;
 width:100vw;

 h1{
     text-align: center;
     padding: 20px;
     font-size:18px;
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