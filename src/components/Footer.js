import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <>
    <div className="footer-container">
        <section className="footer-subcription">
            <p className="footer-subcription-heading">
                Join the Adventure newspaper to see our vacation deals
            </p>
            <p className="footer-subcrption-text">You can unsubscribe at any time</p>

            <div className="input-areas">
                <form action="">
                    <input type="email" placeholder='Your email' className='footer-input'  />
                    <Button buttonStyle='btn--outline'>Subcribe</Button>
                </form>
            </div>
        </section>
        <div className="footer-links">
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/services'>How it works</Link>
                    <Link to='/services'>Testimonials</Link>
                    <Link to='/services'>Investment</Link>
                    <Link to='/services'>Career</Link>
                    <Link to='/services'>Terms of services</Link>
                </div>
                
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/services'>How it works</Link>
                    <Link to='/services'>Testimonials</Link>
                    <Link to='/services'>Investment</Link>
                    <Link to='/services'>Career</Link>
                    <Link to='/services'>Terms of services</Link>
                </div>
            </div>
            <div className="footer-link-wrapper">
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/services'>How it works</Link>
                    <Link to='/services'>Testimonials</Link>
                    <Link to='/services'>Investment</Link>
                    <Link to='/services'>Career</Link>
                    <Link to='/services'>Terms of services</Link>
                </div>
                
                <div className="footer-link-items">
                    <h2>About us</h2>
                    <Link to='/services'>How it works</Link>
                    <Link to='/services'>Testimonials</Link>
                    <Link to='/services'>Investment</Link>
                    <Link to='/services'>Career</Link>
                    <Link to='/services'>Terms of services</Link>
                </div>
            </div>
        </div>
        <section className="social-media">
            <div className="social-media-wrap">
                <div className="footer-logo">
                <Link to="/" className="social-logo">TRVL<i className="fa-solid fa-plane"></i></Link>
                </div>
                <small class='website-rights'>TRVL © 2024</small>
          <div class='social-icons'>
                <Link to="/" target='_blank' className="social-icon-link facebook">
                <i class="fa-brands fa-facebook-f"></i>
                </Link>
                <Link to="/" target='_blank' className="social-icon-link instagram">
                <i class="fa-brands fa-instagram"></i>
                </Link>
                <Link to="/" target='_blank' className="social-icon-link LinkedIn">
                <i class="fa-brands fa-linkedin"></i>
                </Link>
                <Link to="/" target='_blank' className="social-icon-link twitter">
                <i class="fa-brands fa-x-twitter"></i>
                </Link>

                </div>
            </div>
        </section>
        
    </div>
    </>
  )
}
