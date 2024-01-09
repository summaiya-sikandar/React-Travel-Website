import React from 'react'
import { Button } from './Button'
import '../components/HeroSection.css'
import'../App.css'

function HeroSection() {
  return (
    <div className="hero-container">
        <video src="/videos/video-2.mp4" autoPlay muted loop ></video>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiing for?</p>
        <div className="hero-btns">
            <Button className='btns' buttonSize='btn--large' buttonStyle='btn--outline'>
                GET STARTED
            </Button>
            <Button className='btns' buttonSize='btn--large' >
                Watch Trailer
            </Button>
        </div>
    </div>
  )
}

export default HeroSection