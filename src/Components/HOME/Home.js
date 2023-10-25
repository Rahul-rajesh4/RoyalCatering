import React, { useState } from 'react'
import "./home.css"
import videobg from '../HOME/IMG_VIDEOS/first.mp4'
import Navbar from '../NAVBAR/Navbar'
import Maincards from '../CARDS/Maincards'
import Carousel from '../Carousel/Carousel'
export default function Home() {

  
    return (
        <>
            <Navbar />
            
            <div className='main'>
            
                <video className='video' src={videobg} autoPlay loop muted />
                <div className='overlay'>
                    <div className='content'>
                        <h1>RoyalCatering</h1>
                    </div>
                </div>
            </div>

            <div className='spacecard'> 
            <h2 className='textdesign'>Our Services</h2> 
                <Maincards/>
            </div>
            <div className='container1'>
                <h1 className='hedding11'>Our Mission</h1>
                <p className='pera2'>To bring to service a seasoned group of catering professional that will turn on<br></br> 
                   an unrivaled customer service that will have our clients guests wanting more.<br></br>
                   To make your event wonderful and truly memorable is our only aim and<br></br>
                   business.This is because it is as important us as it is for you.Therefore,we take<br></br>
                   care of all details so you can simply enjoy yourself.</p>
            </div>
            <div>
                <Carousel/>
            </div>
            
    
    
        </>
    )
}
