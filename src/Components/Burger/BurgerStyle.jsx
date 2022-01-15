import styled from 'styled-components'
import { Theme } from '../../Theme';

export const BurgerStyle= styled.button`
display:flex;
flex-direction:column;
background:transparent;
z-index:10;
justify-content:space-around;
height:2rem;
width:2rem;
position: absolute;
top:20%;
right:2rem;

border:none;
cursor:pointer;
:focus{
    outline:none;
}



div{
    display:none;
    height:0.25rem;
    width:2rem;
    transform-origin: 1px;
    border:none;
    position:relative;
    background: ${Theme.primaryTextLight};
    transition: all 0.3s linear;
    @media screen and (max-width:768px){
    display:block;
    transition: all .3s ease;
   
   
}

 :first-child{
        transform: ${({ open }) => open ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2){
        opacity: ${({ open }) => open ? "0" : "1"};
        transform: ${({ open }) => open ? "translateX(20)" : "translateX(0)"};
    }

    :nth-child(3){
        transform: ${({ open }) => open ? "rotate(-45deg)" : "rotate(0)"};
    }

}


`;