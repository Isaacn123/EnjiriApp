import styled from 'styled-components';
import { Theme } from '../../Theme';


export const ButtonStyle = styled.button`
width:${({inline})=> inline ? "110px" : "290px"};
height:${({ inline }) => inline ? "35px" : "80px"};
background: ${Theme.primary};
background: ${({ inline }) => inline ? "transparent" : "#DD5C14"};
font-size: ${({ small }) => small ? "14px" : "25px"};;
border:${({ inline }) => inline ? "1px solid #F4F3F2" : "none"};;
cursor:pointer;
text-transform: uppercase;
color: ${({ inline }) => inline ? "#DD5C14" : "white"} ;
border-radius:${({ inline }) => inline ? "8px" : "103px"};

:focus{
    outline:none;
}

:hover{
    border: ${({ inline }) => inline ? "2px solid  #DD5C14" : "3px solid  #DD5C14"};;
    background: transparent;
    color: ${Theme.primaryTextLight};
    transition: .2s ease-in-out;
}
  transition: all .4s ease-in-out;
  @media screen and (max-width:1100px){
      width:${({inline})=> inline ? "100px" : "280px"};
      height: ${({ inline }) => inline ? "33px" : "80px"};
      font-size:${({ inline }) => inline ? "12px" : "20px"};;
  }



  @media screen and (max-width:481px){
    width: 140px;
    height:40px ;
    font-size: 13px;
 } 




`;