import React from 'react'
import './Footer.css';
import FooterSocialCircle from '../../assets/footer-social-icon.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
  return (
    <footer><p className="follow-me">Follow me on</p>	<div className='social-buttons'><a className='social-btn' target="blank" href="https://www.facebook.com/profile.php?id=61557086201754&mibextid=LQQJ4d">
						<img
							src={FooterSocialCircle}
							alt='facebook account'
							className='social-media-circle'
						/>
						<FacebookIcon className='social-icon' />
					</a>
          <a className='social-btn' target="blank" href="https://www.linkedin.com/in/kirsten-griffin-2b29b7151?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
						<img
							src={FooterSocialCircle}
							alt='linkedin account'
							className='social-media-circle'
						/>
						<LinkedInIcon className='social-icon' />
					</a>
          <a className='social-btn' target="blank" href="https://x.com/kirbystene?s=21&t=_vMGwwcX1WhPZR9S8IMscA">
						<img
							src={FooterSocialCircle}
							alt='Twitter Account'
							className='social-media-circle'
						/>
						<XIcon className='social-icon' />
					</a>
				</div> </footer>
  )
}
