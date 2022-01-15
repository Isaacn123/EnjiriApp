import React from 'react';
import {NavbarContainer, BrandContainer,ButtonWrapper, NavMenuContainer, NavbarMenu} from './navbar.style';
import Logo from '../../Components/Logo';
import { Button } from '../Button';
import { HashLink as Link } from 'react-router-hash-link';

class Navbar extends React.Component {
    render() { 
        return <>
           <NavbarContainer>
               <BrandContainer>
               <Logo />
               </BrandContainer>
               <NavMenuContainer>
                   <NavbarMenu>
                           {/* <li>
                               <a href="/" >Home</a>
                           </li>
                           <li>
                               <a href="/" >Services</a>
                           </li>
                           <li>
                               <a href="/" >Events</a>
                           </li>
                           <li>
                               <a href="/" >About</a>
                           </li>
                           <li>
                               <a href="/" >Contact</a>
                           </li> */}
 
        <Link to="/#" title="Home" >Home</Link>
        <Link to="/#mission" title="Missions">Missions</Link>
        <Link to="#" title="Missions">Events</Link>
        <Link to="/#about" title="About">About</Link>
        <Link to="/#contact-us" title="Contact Us">Contact</Link>
        <Link href="#footer" title="Footer" />



                       

                           <ButtonWrapper>
                       <Button inline small>Donate</Button>
                   </ButtonWrapper>
                   </NavbarMenu>

                  

               </NavMenuContainer>
           </NavbarContainer>
        </>;
    }
}
 
export default Navbar;