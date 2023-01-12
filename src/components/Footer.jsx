import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    <div className='footer d-flex justify-content-center align-items-center'>
        <div>
          <p>Redes sociales:</p>
          <InstagramIcon fontSize='large' />
          <FacebookIcon fontSize='large' className='ms-2' />
          <YouTubeIcon fontSize='large' className='ms-2' />
          <TwitterIcon fontSize='large' className='ms-2' />
        </div>
        <div className='ms-5'>
          <span>Developed By Elvin D. Guzman 2022 || Versión Alpha</span>
        </div>
    </div>
  )
}

export default Footer