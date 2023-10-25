import React from 'react'
import './cards.css'
import bday from './cardimgs/bday1 (1).jpg'
import weddinng from './cardimgs/wedd.jpg'
import busines from './cardimgs/business.jpg'
import partyy from './cardimgs/p2.jpg'
export default function Maincards() {
    return (
        <div>
            <div className='main'>
                <div className='container'>
                    <div className='row rowspace'>
                        <div className='col-lg-3'>
                            {/* card-1 */}
                            <div class="card designn">
                                <img src={bday} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            birthday<br></br>
                                        </h2>
                                        <p>
                                        Another Adventure Filled Year Awaits You. Welcome It By Celebrating Your Birthday With Pomp And Splendor.                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-2 */}
                            <div class="card designn">
                                <img src={weddinng} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            wedding<br></br>
                                        </h2>
                                        <p>
                                        The Bride and Groom — May Their Joys Be As Bright As The Morning, And Their Sorrows But Shadows That Fade In The Sunlight Of Love.                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-3 */}
                            <div class="card designn">
                                <img src={busines} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            business<br></br>
                                        </h2>
                                        <p>
                                            Remember To Celebrate Milestone As You Prepare For The Road Ahead.And Be The Party.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-3'>
                            {/* card-4 */}
                            <div class="card designn">
                                <img src={partyy} alt="" />
                                <div className='overlay2'>
                                    <div class="card-content">
                                        <h2>
                                            private<br></br>
                                        </h2>
                                        <p>
                                            I Sneezed On The Beat And The Beat Got Sicker.So Eat Sleep Party Repeat.
                                        </p>
                                        <a href="#" class="button">
                                            Find out more
                                            <span class="material-symbols-outlined">
                                                __
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>

            </div>
        </div>
    )
}
