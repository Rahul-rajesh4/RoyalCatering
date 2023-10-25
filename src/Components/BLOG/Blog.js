import React from 'react'
import './blog.css'
import baby from '../BLOG/Blogimg/bdaybabby.jpg'
import baby2 from '../BLOG/Blogimg/babby.jpg'
import bday from '../BLOG/Blogimg/bday.jpg'
import dinner from '../BLOG/Blogimg/dinner4.jpg'
import food from '../BLOG/Blogimg/food.jpg'
import food2 from '../BLOG/Blogimg/food2.jpg'
import gift from '../BLOG/Blogimg/gift.jpg'
import party from '../BLOG/Blogimg/party.jpg'
import pp from '../BLOG/Blogimg/pp.jpg'
import bp2 from '../BLOG/Blogimg/pp2.jpg'
import priv from '../BLOG/Blogimg/private.jpg'
import table from '../BLOG/Blogimg/table.jpg'
import table2 from '../BLOG/Blogimg/table2.jpg'
import table4 from '../BLOG/Blogimg/table4.jpg'





import Navbar from '../NAVBAR/Navbar'
export default function Blog() {
  return (
    <>
      <Navbar />
      <div className='bodyy'>
        <div className='container bbloggimg'>
          <h1 className='heddinggg'>BLOG</h1>
        </div>
        <div className='photoalign'>
          <div className='container9'>
            
          <div className='photo-gallery'>
            <div className='column'>
              <div className='photo'>
                <img src={baby} alt=''></img>
              </div>
              <div className='photo'>
                <img src={food} alt=''></img>
              </div>
              <div className='photo'>
                <img src={bday} alt=''></img>
              </div>
              <div className='photo'>
                <img src={table} alt=''></img>
              </div>
              <div className='photo'>
                <img src={gift} alt=''></img>
              </div>
            </div>
            <div className='column'>
              <div className='photo'>
                <img src={dinner} alt=''></img>
              </div>
              <div className='photo'>
                <img src={baby2} alt=''></img>
              </div>
              <div className='photo'>
                <img src={food2} alt=''></img>
              </div>
              <div className='photo'>
                <img src={priv} alt=''></img>
              </div>
              <div className='photo'>
                <img src={table2} alt=''></img>
              </div>
              

            </div>
            <div className='column'>
              <div className='photo'>
                <img src={gift} alt=''></img>
              </div>
              <div className='photo'>
                <img src={party} alt=''></img>
              </div>
              <div className='photo'>
                <img src={pp} alt=''></img>
              </div>
              <div className='photo'>
                <img src={bp2} alt=''></img>
              </div>
              <div className='photo'>
                <img src={table4} alt=''></img>
              </div>

            </div>


          </div>
        </div>
        </div>

      </div>

    </>
  )
}
