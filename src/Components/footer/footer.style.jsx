import styled from 'styled-components';


export const FooterleftConater = styled.div`
flex:2;
//  background-color:green;
display:flex;
flex-direction: column;
justify-content: center;
padding-left:50px;
color:white;

h1{
    font-size:20px;
    font-family:'Archivo';
    font-weight:bold;
}

p{
    font-size:14px;
    width:60%;
    padding: 16px 0px;
    font-family:'Nunito';
    font-weight:400;
}

div{
    display:flex;
    width: 160px;
    
    justify-content:space-between;
     
    img{
        height:30px;
        width:30px;
    }
}

@media screen and (max-width:481px){
    p{
        width:100%;
        padding: 0px;
    } 
}

@media screen and (max-width:320px){
    p{
        font-size:12px;
        width:100%;
        padding: 10px 0px;
        font-family:'Nunito';
        font-weight:400;
    }
}



`;

export const FooterMiddleContainer = styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content: center;
padding-left:50px;
color:white;
// background-color:red;

h1{
    font-size:20px;
    font-family:'Archivo';
    font-weight:bold;
}

div{
    height:33%;
    // background-color:purple
}


  ul {
    margin: 0;
    padding: 0; 

    li {
        list-style: none;
       
    }
  
    li a{
        text-decoration:none;
        font-family:'Nunito';
        font-size: 16px;
        font-weight:400;
        color:white;

        :hover {
            color:#c8807a; 
            text-decoration:underline;
        }
  
    }

  }
  
 

}

@media screen and (max-width:481px){
    div{
        height:23%;
        // background-color:purple
    } 
}

@media screen and (max-width:320px){
    li a{
        font-size: 14px;
}


`;

export const FooterRightConater = styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content: center;
padding-left:50px;
color:white;
// background-color:red;

h1{
    font-size:20px;
    font-family:'Archivo';
    font-weight:bold;
}

div{
    height:33%;
    // background-color:purple
}


  ul {
    margin: 0;
    padding: 0; 

    li {
        list-style: none;
    }
  
    li a{
        text-decoration:none;
        font-family:'Nunito';
        font-size: 16px;
        font-weight:400;
        color:white;

        :hover {
            color:#c8807a; 
            text-decoration:underline;
        }
  
    }

  }
  @media screen and (max-width:320px){
    li a{
        font-size: 14px !important;
}
// background-color:orange;
`;

export const FooterRightServices = styled.div`
flex:1;
display:flex;
flex-direction: column;
justify-content: center;
padding-left:50px;
color:white;
// background-color:red;

h1{
    font-size:20px;
    font-family:'Archivo';
    font-weight:bold;
}

div{
    height:33%;
    // background-color:purple
}


  ul {
    margin: 0;
    padding: 0; 

    li {
        list-style: none;
    }
  
    li a{
        text-decoration:none;
        font-family:'Nunito';
        font-size: 16px;
        font-weight:400;
        color:white;

        :hover {
            color:#c8807a; 
            text-decoration:underline;
        }
  
    }

  }
  @media screen and (max-width:320px){
    li a{
        font-size: 14px !important;
}
`;

