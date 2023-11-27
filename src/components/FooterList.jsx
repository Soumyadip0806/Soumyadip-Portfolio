import React from 'react';
import { Link } from 'react-router-dom';
import './FooterList.css';

function FooterList(
    {
        heading = 'Col Heading',
        links = [
          {
            type: 'Link',
            title: 'Home',
            path: '/home',
          },
          {
            type: 'Link',
            title: 'About',
            path: '/about',
          },
        ],
      }
) {
  return (
    <div className='footerList'>
        <h2 className="footerList-heading">{heading}</h2>
    <ul>
      {links.map((item, index) => (
        <li key={index} className='footerList-li'>
          {item.type === 'Link' ? (
            <Link className='footerList-a' to={item.path}>{item.title}</Link>
          ) : (
            <a className='footerList-a' href={item.path} target="_blank" rel="noreferrer">
              {item.title}
            </a>
          )}
        </li>
      ))}
    </ul>
    </div>
  )
}

export default FooterList