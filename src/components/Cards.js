import './Cards.css'
import React from 'react'
import CardItems from './CardItems';

function Cards() {
  return (
    <div className='cards'>
        <h1>Check out this EPIC destination</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                   <CardItems 
                    path='/services'
                    src= '/images/img-9.jpg'
                    label= 'Adventure'
                    text='Explore the waterfall in the jungle of amazon'
                    />
                     <CardItems 
                    path='/services'
                    src= '/images/img-2.jpg'
                    label= 'Luxury'
                    text='Travel through the islands of Bali in a private cruise.'
                    />
                </ul>
                <ul className="cards__items">
                   <CardItems 
                    path='/products'
                    src= '/images/img-4.jpg'
                    label= 'Adventure'
                    text='Explore football in the top of HImaliya!'
                    />
                     <CardItems 
                    path='/sign-up'
                    src= '/images/img-8.jpg'
                    label= 'Adventure'
                    text='Ride through Sahra desert on a camel tour!'
                    />
                     <CardItems 
                    path='/services'
                    src= '/images/img-3.jpg'
                    label= 'Mystery'
                    text='Set sell on the Atlantic ocean.'
                    />
                </ul>
            </div>
        </div>
         
    </div>
  )
}

export default Cards