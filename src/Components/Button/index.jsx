import React from 'react'
import {ButtonStyle} from './button.style'

export function Button (props){
    
    return <ButtonStyle {...props}>
        {props.children} </ButtonStyle>
}