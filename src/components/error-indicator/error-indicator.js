import React from 'react';
import './error-indicator.css';
import icon from './death-star.png';

const errorIndicator = () => {
  return (
    <div className='error-indicator'>
        <img src={icon} alt='error icon' />
        <span className='boom'>BOOM!</span>
        <span>samething has gone terribly wrong</span>
        <span>(but we already sent droids to fix it)</span>
    </div>
  )
}

export default errorIndicator;