import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import '../styles/footer.css'
// import TwitterIcon from '@mui/icons-material/Twitter';
// import YouTubeIcon from '@mui/icons-material/YouTube';
// import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => {
  return (
    // <div className='footer d-flex justify-content-center align-items-center'>
    //     <div className=''>
    //       <p>Redes sociales:</p>
          // <a href='https://www.instagram.com/jone24gm/' target='_blank'>
          //   <InstagramIcon fontSize='large' />
          // </a>
    //       {/* <FacebookIcon fontSize='large' className='ms-2' />
    //       <YouTubeIcon fontSize='large' className='ms-2' />
    //       <TwitterIcon fontSize='large' className='ms-2' /> */}
    //     </div>
    //     <div className='ms-5'>
    //       <span>Developed By Elvin D. Guzman 2023 || Versión Beta</span>
    //     </div>
    // </div>
    <footer>
      <div className='waves'>
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
      <ul className='social_icon'>
        <li>
          <a href='https://www.instagram.com/jone24gm/' target='_blank'>
            <InstagramIcon fontSize='large' />
          </a>
        </li>
      </ul>
      <ul className='text'>
        <li>
          <span>Developed & Designed By Elvin D. Guzmán || Versión Beta</span>
        </li>
      </ul>
      <p>
        ©2023 JED Solution | All Rights Reserved
      </p>
    </footer>
  )
}

export default Footer