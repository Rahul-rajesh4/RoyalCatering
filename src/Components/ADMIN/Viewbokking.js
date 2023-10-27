import React from 'react'
import './Viewbooking.css'
export default function Viewbokking() {
    return (
        <>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-company" role="tabpanel" aria-labelledby="pills-company-tab">
                    <div class="container-fluid">
                        <h2 class="mb-3 font-weight-bold">Company</h2>
                        <div className='view-Booking'>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab">
                    <div class="container-fluid">
                        <h2 class="mb-3 font-weight-bold">Add Event</h2>
                        <div className='Add-Event'>
                            <form>
                                <div class="row">
                                    <div class="col-sm mt-2">
                                        <input type="text" class="form-control formstyle bg-transparent" name='event' placeholder="ADD EVENT"></input>
                                    </div>
                                    
                                </div>
                                <button class="btn btn-light formbutton">SUBMIT</button>
                            </form>

                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">
                    <div class="container-fluid">
                        <h2 class="mb-3 font-weight-bold">News</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce porttitor leo nec ligula viverra, quis facilisis nunc vehicula. Maecenas purus orci, efficitur in dapibus vel, rutrum in massa. Sed auctor urna sit amet eros mattis interdum. Integer imperdiet ante in quam lacinia, a laoreet risus imperdiet.</p>
                        <p>Proin maximus iaculis rhoncus. Morbi ante nibh, facilisis semper faucibus consequat, facilisis ut ante. Mauris at nisl vitae justo auctor imperdiet. Cras sodales, justo sed tincidunt venenatis, ante erat ultricies eros, at mollis eros lorem ac mi. Fusce sagittis nibh nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec mollis eros sodales convallis faucibus. Vestibulum sit amet odio lectus. Duis eu dolor vitae est venenatis viverra eu sit amet nisl. Aenean vel sagittis odio. Quisque in lacus orci. Etiam ut odio lobortis odio consectetur ornare.</p>
                    </div>
                </div>
            </div>

        </>
    )
}
