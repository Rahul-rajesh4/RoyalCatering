import React from 'react';
import './About.css'; 
import Navbar from '../NAVBAR/Navbar';
import burg from '../ABOUT US/AboutImg/burg.jpg';
import glas from '../ABOUT US/AboutImg/glas.jpg';
import shell from '../ABOUT US/AboutImg/shell.jpg';
import cake from '../ABOUT US/AboutImg/cake.jpg';
import baby from '../ABOUT US/AboutImg/baby.jpg';
import grilled from '../ABOUT US/AboutImg/grilled.jpg';
import menu from '../ABOUT US/AboutImg/menu.jpg';

export default function AboutUs() {
  return (


<div class="responsive-container-block bigContainer">
<Navbar></Navbar><br></br><br></br>
  <div class="responsive-container-block Container">
    <div class="responsive-container-block leftSide">
      <p class="text-blk heading">
        Meet Our Creative Team.
      </p>
      <p class="text-blk subHeading">
        ASHIF V.K-MANAGER<br></br>
        RAHUL RAJESH-ASSISTANT MANAGER<br></br>
        ABHINAND TK-FOUNDER<br></br>
        AFNAN TK-CO FOUNDER
      </p>
    </div>
    <div class="responsive-container-block rightSide">
      <img class="number1img" src={glas}></img>
      <img class="number2img" src={burg}></img>
      <img class="number3img" src={shell}></img>
      <img class="number5img" src={cake}></img>
      <img class="number4vid" src={menu}></img>
      
      <img class="number7img" src={baby}></img>
      <img class="number6img" src={grilled}></img>
    </div>
  </div>
</div>

  )}