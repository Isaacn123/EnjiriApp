import styled from 'styled-components';
import {Theme} from '../../Theme';
export const NavbarContainer = styled.div`
 height:80px;
 padding: 1rem 3rem;
//  background-color:orange;

 
 display:flex;
 color:white;
 justify-content: space-between;

/* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,7db9e8+100&1+0,0+100 */
background: -moz-linear-gradient(top,  rgba(0,0,0,1) 0%, rgba(125,185,232,0) 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(top,  rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to bottom,  rgba(0,0,0,1) 0%,rgba(125,185,232,0) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#007db9e8',GradientType=0 ); /* IE6-9 */



`;

export const BrandContainer = styled.div`
//  background-color:red;
`;

export const NavMenuContainer = styled.div`
// background-color:blue;
`;

export const NavbarMenu = styled.ul`
 display:inline-flex;
 font-size:20px;
 font-family:"Poppins";

 @media screen and (max-width:481px){
    flex-direction:column;
} 

//  color: ${Theme.primaryTextLight};
 
 li{
     list-style: none;
 }

 a{
    margin-right: 50px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight:400; 
    color: ${Theme.primaryTextLight};
    transition: all 0.5s ease;

    :hover{
        color:red;
    }
 }

 @media screen and (max-width:1100px){
    font-size: 16px;

    a{
        font-weight:300; 
        margin-right: 30px;}
   }

 
 @media screen and (max-width:768px){
    display:none;
}
`;


export const ButtonWrapper = styled.div`
`;