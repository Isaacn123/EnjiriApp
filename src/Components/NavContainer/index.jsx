import styled from 'styled-components';
import { BurgerMenu } from '../Burger';
import Navbar from '../navbar';
import { SidebarMenu } from '../SidebarMenu';
import {IntroNavContainer} from './navStyle'
import {useState} from 'react';

const NavControllers = () => {
    const [open, setOpen ] = useState(false);
    return ( <div>
          <IntroNavContainer>
          <Navbar/>
           <BurgerMenu open={open} setOpen={setOpen} />
           <SidebarMenu open={open} setOpen={setOpen} />
         
       </IntroNavContainer>
    </div>);
}
 
export default NavControllers;