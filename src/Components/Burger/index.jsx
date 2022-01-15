import React from 'react'
import {BurgerStyle} from './BurgerStyle'
import {bool, func} from 'prop-types'
export function BurgerMenu ({open, setOpen}){

    return  <BurgerStyle onClick={()=> setOpen(!open)} open={open}>
            <div />
            <div />
            <div />
           </BurgerStyle>
}

BurgerMenu.propTypes = {
    open: bool.isRequired,
    setOpen: bool.isRequired,
}