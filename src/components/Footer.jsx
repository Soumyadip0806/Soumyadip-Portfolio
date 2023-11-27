import React from 'react'
import FooterList from './FooterList'
import {Link } from 'react-router-dom';
import './Footer.css'
import { Fade } from "react-awesome-reveal";

function Footer() {
  return (
    <div className='footer'>
        <div className='footer-container'>
        <span className='blur'></span>
        <span className='blur'></span>
            <div className='footer-col1'>
              <Fade duration={1800} direction='up'>
                <h1 className='footer-col1-title'>Soumyadip Ghosh</h1>
                <p className='footer-col1-desc'>A web designer and developer from Arambagh, WestBengal, India. I love spending time on fixing little details and optimizing web apps and I also stand for quality. I always make websites that have unique design and also has a good performance rate.</p>
              </Fade>
            </div>
            <Fade duration={1800} direction='up'>
            <div className='footer-col2'>
                <FooterList
                    heading="Important Links"
                    links={[
                      {
                        title: 'Home',
                        path: '/',
                        type: 'Link',
                      },
                      {
                        type: 'Link',
                        title: 'About',
                        path: '/about',
                      },
                      {
                        type: 'Link',
                        title: 'Project',
                        path: '/project',
                      },
                      {
                        type: 'Link',
                        title: 'Contact',
                        path: '/contact',
                      },
                    ]}
                />
            </div>
            </Fade>
            <div className='footer-col3'>
            <Fade duration={1800} direction='up'>
            <FooterList
            heading="Contact Info"
            links={[
              {
                title: '+91 8609900665',
                path: 'tel:+918609900665',
              },
              {
                title: 'Soumyadip @ gmail',
                path: 'mailto:soumya50052pc@gmail.com',
              },
              {
                title: 'Arambagh, West Bengal, India',
                path: 'https://maps.app.goo.gl/3exKacyfRgioPM798',
              },
            ]}
          />
          </Fade>
          </div>
            <div className='footer-col4'>
            <Fade duration={1800} direction='up'>
            <FooterList
            heading="social Links"
            links={[
              {
                title: 'WhatsApp',
                path: "https://api.whatsapp.com/send?phone=+918609900665&text=I'd like to connect with you",
              },
              {
                title: 'Linkedin',
                path: 'https://www.linkedin.com/in/soumyadipghosh0806',
              },
              {
                title: 'Facebook',
                path: 'https://www.facebook.com/soumyadip.ghosh.96199',
              },
              {
                title: 'Github',
                path: 'https://github.com/Soumyadip0806',
              },
            ]}
          />
          </Fade>
          </div>
        </div>
        <div className="copyright">
        <div className="copyright-container">
        <Fade duration={2000}>
          <p>
            <Link rel="noreferrer" to='/privacy'>
            © 2023-Soumyadip Ghosh |{' '} All rights reserved
            </Link>{' '}
            <Link rel="noreferrer" to='/terms'>
            / Terms
            </Link>{' '}
          </p>
          </Fade>
        </div>
      </div>
    </div>
  )
}

export default Footer