import React from 'react'
import './Footer.css';
import FooterSocialCircle from '../../assets/footer-social-icon.svg';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
export default function Footer() {
  return (
    <footer><p className="follow-me">Follow me on</p>	<div className='social-buttons'><button className='social-btn'>
						<img
							src={FooterSocialCircle}
							alt='facebook account'
							className='social-media-circle'
						/>
						<FacebookIcon className='social-icon' />
					</button>
          <button className='social-btn'>
						<img
							src={FooterSocialCircle}
							alt='linkedin account'
							className='social-media-circle'
						/>
						<LinkedInIcon className='social-icon' />
					</button>
          <button className='social-btn'>
						<img
							src={FooterSocialCircle}
							alt='Twitter Account'
							className='social-media-circle'
						/>
						<XIcon className='social-icon' />
					</button>
				</div> </footer>
  )
}
