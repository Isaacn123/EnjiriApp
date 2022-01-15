import styled from 'styled-components';
import { Theme } from '../../Theme';


export const ButtonStyle = styled.button`
width:${({missons})=> missons ? "160px" : "240px"};
height:${({ missons }) => missons ? "40px" : "60px"};
background: ${Theme.primary};
background: ${({ missons }) => missons ? "#f64b3c" : "white"};
font-size: ${({ small }) => small ? "13px" : "20px"};;
border:${({ missons }) => missons ? "1px solid #F4F3F2" : "none"};;
cursor:pointer;
text-transform: uppercase;
color: ${({ missons }) => missons ? "white" : "DD5C14"} ;
border-radius:${({ missons }) => missons ? "60px" : "103px"};

:focus{
    outline:none;
}

:hover{
    border: ${({  missons }) =>  missons ? "2px solid  #DD5C14" : "3px solid  #DD5C14"};;
    background: transparent;
    color: ${({  missons }) =>  missons ? "#f64b3c" : "#F4F3F2"};
    transition: .2s ease-in-out;
}
  transition: all .4s ease-in-out;
  @media screen and (max-width:1100px){
          width:${({ missons })  =>  missons? "110px" : "280px"};
        height: ${({  missons }) =>  missons ? "40px" : "80px"};
      font-size:${({  missons }) =>  missons? "12px" : "20px"};;
  }

  @media screen and (max-width:800px){
    width:${({ missons })  =>  missons? "110px" : "210px"};
    height: ${({  missons }) =>  missons ? "40px" : "60px"};
  font-size:${({  missons }) =>  missons? "12px" : "16px"};;
  }

  @media screen and (max-width:481px){
    width: 140px;
    height:40px ;
    font-size: 13px;
 } 




`;