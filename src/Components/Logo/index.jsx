
import React from 'react';
import styled from 'styled-components';

import Logo from '../../assets/images/EnjiriLogo.png';

const ImageContainer = styled.div`
display:flex;
flex-direction:column;
`;

const LogoImage = styled.img`
height:4rem;
width:4rem;
`;

export default function ImgLogo (){

    return  <ImageContainer>
        <LogoImage src={Logo} ></LogoImage>
    </ImageContainer>
    
}