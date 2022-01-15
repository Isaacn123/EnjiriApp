import React from 'react';
import phone from '../../assets/images/icons/phone-call.png';
import address from '../../assets/images/icons/address.png';
import email from '../../assets/images/icons/email.png';
import { Contactbackground, ContactButtonContainer, ContactContainer, ContactDescriptionIcon, ContactForm, ContactFormInput, ContactFormInputLabel, ContactFormMessage, ContactInfo, ContactInfoIcon, ContactInfoItem, ContactInputContainer, ContactLeft, ContactLeftTitle, ContactRight, ContactWrapper } from './contact-us.style';
import { AboutButton } from '../AboutButton';
const state = {
    name: '',
    email: '',
    subject: '',
    message: ''
}
const ContactUs = () => {

    const [state,setState] = React.useState({
             fullname: '',
            email: '',
            subject: '',
            message: ''
    })

    

    function handleonStateChange (event){
        const target = event.target;
        const {name, value} = target;

       setState({
            [name]: value,
        });

        // console.log("new value", event.target.value);
        // console.log('STATE _', state);
    }


  const sendMail = () =>{
      const Base_Url = "http://dashboard.enjiricenterministries.org/contacts"
      const sendOptions = {
          method: 'POST',
          headers:{
              'Content-Type': 'application/json',
              'Accept': 'application/json'
          }, 
          body: JSON.stringify({
              name:state.user_name,
              email:state.user_email,
              subject:state.user_subject,
              message:state.message,
          })
      };

      fetch(Base_Url, sendOptions).then( (response)=> response.json()).then( (data)=>{
          console.log(`RETURNED DATA:: ${data}`);
      });
  }


    console.log('STATE _', state);

    return (
        <div id="contact-us">
            <ContactContainer>
                <Contactbackground></Contactbackground>
               <ContactWrapper>
                 <ContactLeft> 

                     <ContactLeftTitle >
                         Send us a message to:-
                     </ContactLeftTitle>

                     <ContactInfo >
                         <ContactInfoItem>
                             <ContactInfoIcon src={phone} alt="Icon" />
                             +256 781-573-536
                         </ContactInfoItem>
                         <ContactInfoItem>
                             <ContactInfoIcon src={email} alt="Icon" />
                             evkpeter@enjiricenterministries.org
                         </ContactInfoItem>
                         <ContactInfoItem>
                             <ContactInfoIcon src={address} alt="Icon" />
                            kampala Uganda East Africa
                         </ContactInfoItem>
                     </ContactInfo>
                 </ContactLeft>
                 <ContactRight> 
                     <ContactDescriptionIcon>
                         For any Queries, Get in touch with us. we will be waiting thanks
                     </ContactDescriptionIcon> 
                     <ContactForm>
                         <ContactInputContainer>
                          <ContactFormInput type="text" value={state.fullname} onChange={handleonStateChange} placeholder="Enter your name" name="user_name"/>
                         </ContactInputContainer>
                       
                      <ContactInputContainer>
                         <ContactFormInput type="text" value={state.email} onChange={handleonStateChange} placeholder="Enter your Email" name="user_email" />
 
                      </ContactInputContainer>

                      <ContactInputContainer>
                         <ContactFormInput type="text" value={state.subject} onChange={handleonStateChange} placeholder="Enter your Subject" name="user_subject" />
                         </ContactInputContainer>
                    
                        <ContactFormMessage type="text" value={state.message}  onChange={handleonStateChange}  name="message" />
                        
                        <ContactButtonContainer>
                        <AboutButton missons onClick={()=> sendMail()}>Send Mail</AboutButton>
                        </ContactButtonContainer>
                        

                     </ContactForm>
                 </ContactRight>
               </ContactWrapper>
            </ContactContainer>
           
        </div>
    )
}


export default ContactUs;