import React from 'react'
import './carousel.css'
import bday from '../Carousel/IMG/bday101.jpg'
import pparty from '../Carousel/IMG/pp2.jpg'
import wedding1 from '../Carousel/IMG/wedding1.jpg'
import { Navigate, useNavigate } from 'react-router-dom'
import Booking from '../BOOKING/Booking'
export default function Carousel() {

    const Navigate = useNavigate()
    const submit = () =>{
        Navigate('/blog')
    }
    return (
        <>
            <div className='main10card'>

                <div className='main11card'>
                    <div className='row'>
                        <div className='col-md-7 bottemspace'>
                            <h2 className='bloghome'>Our Vision</h2>
                            <p className='pera'>To pursue service excellence by establishing highly acclaimed catering<br></br>
                                facilities and service that set the industry benchmark in the region while<br></br>
                                aiming to exceed culinary and hospitality expectations</p>
                            <button type='submit' onClick={submit} className='btn btn-light blogbutton' >BLOG</button>

                        </div>
                        <div className='col-md-5 '>
                            <div id="carouselExampleCaptions" class="carousel slide carouselsize">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <img src={bday} class="d-block w-100 imgheight" />
                                        <div className='overlay2'>
                                            <div class="carousel-caption d-none d-md-block carouseltext">


                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={pparty} class="d-block w-100 imgheight" />
                                        <div className='overlay2'>
                                            <div class="carousel-caption d-none d-md-block carouseltext">


                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <img src={wedding1} class="d-block w-100" alt="..." />
                                        <div className='overlay2'>
                                            <div class="carousel-caption d-none d-md-block carouseltext">

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next carouselarro" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>

                        </div>

                    </div>

                </div>

                <Booking/>

            </div>
        </>
    )
}
