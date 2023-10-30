import React, { useEffect, useState } from 'react'
import './Viewbooking.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddEvent, viewBooking } from '../REDUX/SLICE/eventSlice';

export default function Viewbokking() {

    const { data } = useSelector((state) => state.event)
    const dispatch = useDispatch()
    console.log(data);

    const [get, SetGet] = useState([])

    useEffect(() => {
        dispatch(viewBooking())
    }, [])


    const [add, setAdd] = useState({})

    const inputChange = (event) => {
        const { name, value } = event.target
        setAdd({ ...add, [name]: value })
    }

    const SUBMIT = () => {
        dispatch(AddEvent(add))
    }



    return (
        <>
            <div class="tab-content" id="pills-tabContent">
                <div class="tab-pane fade show active" id="pills-company" role="tabpanel" aria-labelledby="pills-company-tab">
                    <div class="container-fluid">
                        <h2 class="mb-3 font-weight-bold">Slot</h2>
                        <div className='view-Booking'>
                            <div className='row'>
                                {data?.map((value, key) => (
                                    <div className='col-sm-6 mb-3 mb-sm-0'>
                                        <div class="card text-bg-secondary low">
                                            <div class="card-body">
                                                <h5 class="card-title">{value.name}</h5>
                                                <h6 class="card-subtitle mb-2 text-body-secondary">{value.email}</h6>
                                                <h6 class="card-subtitle mb-2 text-body-secondary">CONTACT: {value.contact}</h6>
                                                <p class="card-text">TYPE OF EVENT: {value.typeofevent}</p>
                                                <p>DATE: {value.date}<br></br>
                                                    TIME: {value.time}<br></br>
                                                    NO.OF PERSONS: {value.noofperson}</p>
                                            </div>
                                            
                                        </div>
                                    </div>


                                ))}
                            </div>
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
                                        <input type="text" class="form-control formstyle bg-transparent border-dark" name='events' placeholder="ADD EVENT" onChange={inputChange}></input>
                                    </div>
                                </div>
                                <button class="btn btn-dark formbutton" onClick={SUBMIT}>SUBMIT</button>
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}
