
import React from 'react'
import {SidebarContainer} from './sidebarElements'
import {bool} from 'prop-types'
import styled from 'styled-components'
import { Button } from '../Button'
import { Theme } from '../../Theme'
import { HashLink as Link } from 'react-router-hash-link';
const ButtonContact = styled(Button)`
width: 180px;
height:40px;
position:inherit;
margin-top: 30rem;
margin-left: 50%;
background:${Theme.primary};
border:none;
color: ${Theme.primaryTextLight};
transform: translateX(-50%);

`;
export function SidebarMenu({open, setOpen}) {
    return (
        <div>
            <SidebarContainer open={open}>
                {/* <a href="/">Home</a>  
                <a href="/">About</a>  
                <a href="/">Service</a>  
                <a href="/">product</a>  */}
 <Link to="#" title="Home"  onClick={()=> setOpen(!open)} >Home</Link>
<Link to="#mission" title="Missions" onClick={()=> setOpen(!open)}>Missions</Link>
<Link to="#" title="Missions" onClick={()=> setOpen(!open)} >Events</Link>
<Link to="#about" title="About" onClick={()=> setOpen(!open)} >About</Link>
             <ButtonContact inline  onClick={()=> setOpen(!open)}>Contact Us</ButtonContact>
            </SidebarContainer> 
        </div>
    )
}


SidebarMenu.propTypes = {
    open:bool.isRequired,
}