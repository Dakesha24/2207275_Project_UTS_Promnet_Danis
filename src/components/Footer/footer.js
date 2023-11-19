import React from 'react';
import './footer.css';

import FacebookIcon from '../../assets/logo-facebook.png';
import GithubIcon from '../../assets/logo-github.png';
import InstagramIcon from '../../assets/logo-instagram.png';
import linkedInIcon from '../../assets/logo-whatsapp.png';

const Footer = () => {
  return (
    <section>
      
      <footer className='footer'>
        <div className="for-more">For more information</div>

        <div className="links">
          <a href="https://web.facebook.com/ueusjaha.hahdhshsh/" target="_blank" rel="noopener noreferrer">
            <img src={FacebookIcon} alt="Facebook" className="link" />
          </a>
          <a href="https://github.com/Dakesha24" target="_blank" rel="noopener noreferrer">
            <img src={GithubIcon} alt="Twitter" className="link" />
          </a>
          <a href="https://www.instagram.com/daniskeysaras/" target="_blank" rel="noopener noreferrer">
            <img src={InstagramIcon} alt="Youtube" className="link" />
          </a>
          <a href="https://www.linkedin.com/in/danis-keysara-saputra-1485131b7/" target="_blank" rel="noopener noreferrer">
            <img src={linkedInIcon} alt="linkedIn" className="link" />
          </a>
        </div>


        <div className="copyright">
          Coyright &#169; 2023 DanisKeysara Saputra. All right received
        </div>
        
        
      </footer>

      
    </section>
    
  )
}

export default Footer