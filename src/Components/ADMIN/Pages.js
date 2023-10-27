import React, { useEffect } from 'react'
import './Page.css'
import $ from "jquery";
import Viewbokking from './Viewbokking';
export default function Pages() {

    useEffect(() => {
        $(document).ready(function () {
            $('.nav-link').on('click', function () {
                const targetTab = $(this).attr('data-target');
                $('.tab-pane').removeClass('show active');
                $(targetTab).addClass('show active');
            });
        });
        // JavaScript code
        $(document).ready(function () {
            $('.nav-link').on('click', function () {
                // Remove the 'active' class from all buttons
                $('.nav-link').removeClass('active');
                // Add the 'active' class to the clicked button
                $(this).addClass('active');
                // Change the button color to green when it's active
                if ($(this).hasClass('active')) {
                    $('.tabs-to-dropdown .dropdown-toggle').css('color', 'var(--darkgreen)');
                } else {
                    // Reset the button color to the default color when it's not active
                    $('.tabs-to-dropdown .dropdown-toggle').css('color', 'var(--darkgreen)');
                }
            });
        });

    }, []);
    return (
        <>
          <div className="tabs-to-dropdown">
          <div className="nav-wrapper d-flex align-items-center justify-content-between">
            <ul className="nav nav-pills d-flex flex-wrap" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <a className="nav-link active" data-target="#pills-company" href="#" role="tab">
                  View Booking
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-target="#pills-product" href="#" role="tab">
                  Add Event
                </a>
              </li>
              <li className="nav-item" role="presentation">
                <a className="nav-link" data-target="#pills-news" href="#" role="tab">
                  Users
                </a>
              </li>
            </ul>
          </div>

          <Viewbokking />
        </div>


        </>
    )
}
