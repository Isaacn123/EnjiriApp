import styled from 'styled-components';

export const ContactContainer = styled.div`
height: 100vh;
background-color: #5d3513 !important;
position:relative;
overflow:hidden;

`;

export const Contactbackground = styled.div`
background-color:grey;
width:20px;
height:100vh;
position:absolute;
`;

export const ContactWrapper = styled.div`
 display:flex;
 padding:50px;
 @media screen and (max-width:481px){
    flex-direction:column;
} 

@media screen and (max-width:768px){
    flex-direction:column;
}

@media screen and (max-width:1280px){ 
   margin-top:80px;
//    padding:50px;
   }

   @media screen and (max-width:800px){
    margin-top:0px; 
    padding:10px 40px; 
   }

   @media screen and (max-width:400px){

 margin-top: 20px;
;
   }

   @media screen and (max-width:320px){
    padding:5px 50px 0px 50px;
    margin-top: 10px;
  }


`;

export const ContactLeft = styled.div`
flex: 1;
`;

export const ContactRight = styled.div`
flex:1;
`;


export const ContactLeftTitle = styled.h1`
font-size:60px;
font-weight:600;
width: 80%;
color:white;





@media screen and (max-width:400px){
   font-size:40px !important; 
    width: 100%;
      }

      @media screen and (max-width:320px){
        font-size:20px !important;
      }

@media screen and (max-width:481px){
    font-size:30px; 
    width: 100%;
    padding-bottom:20px;
}


@media screen and (max-width:768px){
    font-size:40px; 
    width: 100%;
 
    }

    @media screen and (max-width:1024px){
        font-size:40px; 
        width: 100%;
    }

    @media screen and (max-width:1280px){
        font-size:50px; 
        width: 100%; 
       }

       @media screen and (max-width:800px){
        font-size:30px; 
       }
`;

export const ContactInfo = styled.div`

`;


export const ContactInfoItem = styled.div`
 display:flex;
 align-items:center;
 margin: 50px 0px;
 width:60%;
 font-weight:300;
 color:white;

 

 @media screen and (max-width:481px){
    width:100%; 
    margin: 10px 0px; 
    font-size:13px;
 }
 

 @media screen and (max-width:768px){
    font-size:20px;
 
    }

    @media screen and (max-width:1024px){
        font-size:20px;
    }
    @media screen and (max-width:1280px){
        font-size:20px;
        width:80%; 
       }

       @media screen and (max-width:320px){
        font-size:12px !important;
        width:100% !important;
     }

     @media screen and (max-width:800px){
        font-size:12px ;
        width:100% ;
        margin: 10px 0px; 
       }
`;

export const ContactInfoIcon = styled.img`
 width:30px;
 height:30px;
 margin-right: 20px;
`;


export const ContactDescriptionIcon = styled.p`
 width:70%;
 color:white;

 @media screen and (max-width:481px){
     font-size:15px;
     width: 100%;
     display:none;
}

@media screen and (max-width:800px){
    display:none;
   }

@media screen and (max-width:1280px){
    font-size:20px;
    width: 100%;
   }

   @media screen and (max-width:800px){
    font-size:18px;
    width: 100%; 
   }


`;

export const ContactForm = styled.form`
display:flex;
flex-direction: column;
margin-top: 20px;

@media screen and (max-width:481px){
    margin-top: 0px;
}
`;


export const ContactFormInput = styled.input`
 height:50px;
 border:none;
 width:100%;
 border-bottom: 1px solid #403d3d;

 @media screen and (max-width:320px){
    height:40px !important;
 }

 @media screen and (max-width:481px){
     height:40px;
 }

 @media screen and (max-width:768px){
    height:50px;
  }

  @media screen and (max-width:800px){
    height:35px;
    font-size:14px;
    padding-left:10px;
}

`;

export const ContactInputContainer = styled.div`
 padding-top:10px;
 display:flex;
 width:100%;

 @media screen and (max-width:320px){
    padding-top:10px !important;
 }


 @media screen and (max-width:1024px){
  padding-top:20px;

}

@media screen and (max-width:1280px){ 
    padding-top:30px;
    }

    @media screen and (max-width:800px){
        padding-top:10px; 
    }
`;

export const ContactFormInputLabel = styled.label`
 padding-top:15px;
`;


export const ContactFormMessage = styled.textarea`
margin-top:10px;
padding: 30px 0px;
@media screen and (max-width:481px){
    padding: 20px 0px;
}

@media screen and (max-width:768px){
    padding: 40px 3px;
    }

@media screen and (max-width:1024px){
        margin-top:20px;
        padding: 30px 0px;
      }

@media screen and (max-width:1280px){ 
        margin-top:20px;
        padding: 50px 0px;
        }

@media screen and (max-width:320px){
            margin-top:10px;
            padding: 20px 0px;
          }


          @media screen and (max-width:800px){
            padding: 20px 0px; 
          }

`;


export const ContactButtonContainer = styled.div`
 margin-bottom: 10px;
 margin: 40px 0px;
 @media screen and (max-width:481px){
    margin: 20px 0px;

}

@media screen and (max-width:320px){
    margin: 20px 0px !important;
 }

@media screen and (max-width:768px){
    margin: 30px 0px;
 
    }

@media screen and (max-width:1024px){
        margin: 40px 0px;
      
      }
@media screen and (max-width:1280px){ 
        margin: 40px 0px;
        }
`;


