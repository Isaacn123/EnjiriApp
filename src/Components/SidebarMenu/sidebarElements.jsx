import styled from 'styled-components'
import { Theme } from '../../Theme';

export const SidebarContainer = styled.nav`
 height:100vh;
 width:100%;
 display:flex;
 flex-direction:column;
 background : ${Theme.sidebarColor};
 justify-content:center;
 text-align: center;
 position:absolute;
 top:0;
 left:0;


transition: transform .3s ease-in-out;

transform: ${({open}) => open ? "translateX(0)" : "translateX(-100%)"};
 a{
      line-height: 4rem;
      letter-spacing: .2rem;
     font-size:25px;
     text-decoration: none;
     color: ${Theme.primaryTextLight};
     text-transform: uppercase;
     transition: all .3s ease-in-out;
     :hover{
         color: #81350c;
         transition: all .3s ease-in-out;
     }
 }
`;