import React, {useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import {useFormik} from 'formik';
import { Link } from 'react-router-dom';
import {MdPlace,MdLocalPhone,MdWhatsapp,MdEmail,} from 'react-icons/md'
import {FiSend} from 'react-icons/fi'
import { signUpSchema } from '../components/Schemas';
import { Fade } from "react-awesome-reveal";



const initialValues={
  your_name: "",
  email: "",
  phone_number: "",
  message: "",
}




 



function Contact(){


  const [statusMessage, setStatusMessage] = useState("");
  const {values, errors, handleBlur,touched, handleChange,handleSubmit} = useFormik({
    initialValues:initialValues,
    validationSchema:signUpSchema,
    onSubmit:(values, action)=>{
      action.resetForm();
    }
  
  });

  const formRef = useRef()
  const sendEmail = (e) => {
      e.preventDefault();
      handleSubmit();

      emailjs.sendForm('service_sdwl0hm', 'template_nhvk80y', e.target, 'user_bILalCw4fRU8hNPicGBu6')
      .then((result) => {
          console.log(result.text);
          setStatusMessage("Thank You. I will connect you soon");
          setTimeout(() => {
            setStatusMessage("")
          }, 3000)
      }, (error) => {
          console.log(error.text);
          setStatusMessage(`${error.text} happened`);
      });


    
    };

  return (
    <div className='contact'>
        <div className='contact-container'>
            <Fade duration={1800}>
            <div className='home-titleSection'>
              <p className='subTitle contactSub'>Get in touch</p>
              <h2 className='mainTitle contactMainTitle'>Contact</h2>
            </div>
            </Fade>

          <div className='contactSection'>
            <div className='contactSection-left'>
          <Fade  duration={1800} >
              <Link to='tel:+918609900665'>
              <div className='contactInfoItem'>
                <div className='contactInfoItem-icon'><MdLocalPhone/></div>
                <div className='contactInfoItem-info'>+91 8609900665</div>
              </div>
              </Link>
              <Link to="https://api.whatsapp.com/send?phone=+918609900665&text=I'd like to connect with you" target='_blank'>
              <div className='contactInfoItem'>
                <div className='contactInfoItem-icon'><MdWhatsapp/></div>
                <div className='contactInfoItem-info'>+91 8609900665</div>
              </div>
              </Link>
              <Link to='mailto:soumya50052pc@gmail.com'>
              <div className='contactInfoItem'>
                <div className='contactInfoItem-icon'><MdEmail/></div>
                <div className='contactInfoItem-info'>Soumyadip @ gmail</div>
              </div>
              </Link>
              <Link to='https://maps.app.goo.gl/3exKacyfRgioPM798' target='_blank'>
              <div className='contactInfoItem'>
                <div className='contactInfoItem-icon'><MdPlace/></div>
                <div className='contactInfoItem-info'>Arambagh, India</div>
              </div>
            </Link>
            </Fade>
            </div>

            <div className='contactSection-right'>
            <Fade  duration={1800} >
                <div className='form-style'>
                  <form ref={formRef}   onSubmit={sendEmail} >
                    <div className='form-group'>
                      <label for='name'>Your Name
                        <input 
                        type='text' 
                        placeholder='Your Name' 
                        name="your_name" 
                        value={values.your_name} 
                        onChange={handleChange} 
                        autoComplete='off' 
                        onBlur={handleBlur}
                        required
                        />
                        {errors.your_name && touched.your_name?(<p className='contact-error'>{errors.your_name}</p>) : null}
                        </label>
                    </div>
                    <div className='form-group'>
                      <label for='email'>Email
                        <input 
                        type='email' 
                        placeholder='abc@gmail.com' 
                        name="email" 
                        value={values.email} 
                        onChange={handleChange} 
                        autoComplete='off' 
                        onBlur={handleBlur}
                        required
                        />
                        {errors.email && touched.email?( <p className='contact-error'>{errors.email}</p>):null}
                        </label>
                    </div>
                    <div className='form-group'>
                      <label for='phone'>Phone Number
                        <input 
                        type='text' 
                        placeholder='phone number' 
                        name="phone_number" 
                        value={values.phone_number} 
                        onChange={handleChange} 
                        autoComplete='off' 
                        onBlur={handleBlur}
                        required
                        />
                        {errors.phone_number && touched.phone_number ?( <p className='contact-error'>{errors.phone_number}</p>):null}
                        </label>
                    </div>
                    <label for='message'>Message
                        <textarea 
                        rows="5" 
                        placeholder='message' 
                        name="message" 
                        value={values.message} 
                        onChange={handleChange} 
                        autoComplete='off' 
                        onBlur={handleBlur}
                        required
                        />
                        {errors.message && touched.message ?( <p className='contact-error'>{errors.message}</p>):null}
                        </label>
                      <button className='contactSubmit btns btn' type="submit" value='Send' >
                        Send
                        <FiSend className='contact-send' />
                      </button>
                      <p className='thankYou'>{statusMessage}</p>
                  </form>
                  </div>
                  </Fade>
              </div>
          </div>

          <div className='contact-Bottommap'>
          <Fade  duration={1800} >
             <div className='google-map'>
                <div className='mapCard-container'>
                  <div className='map-card'>
                    <h3 className='map-card-heading'>Here is me</h3>
                    <p className='map-card-info'>Arambagh, WestBengal, India</p>
                    <a href='https://maps.app.goo.gl/3exKacyfRgioPM798' target='_blank' rel='noreferrer' className='map-card-link'>Open in Map</a>
                  </div>
                </div>
              </div>
              </Fade>
          </div>
        </div>
    </div>
  )
}

export default Contact