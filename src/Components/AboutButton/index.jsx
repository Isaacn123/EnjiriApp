import React from 'react'
import {ButtonStyle} from './button.style'

export function AboutButton (props){
    
    return <ButtonStyle {...props}>
        {props.children} </ButtonStyle>
}