import React, { useEffect, useState } from 'react'
import './Viewbooking.css'
import { useDispatch, useSelector } from 'react-redux';
import { AddEvent, viewBooking, singleslot , Replymessage } from '../REDUX/SLICE/eventSlice';



export default function Viewbokking() {

    const { data,reply } = useSelector((state) => state.event)
    const dispatch = useDispatch()
    console.log(data,reply);


    useEffect(() => {
        dispatch(viewBooking())
    }, [])






    const replyy = (id) => {
        dispatch(singleslot(id))
    }


    const [input, setInput] = useState({})


    const inputChangee = (event) => {
        const { name, value } = event.target
        setInput({ ...input, [name]: value })
    }
    console.log(input);

    const send =()=>{
        dispatch(Replymessage(input))
        
    }


    const [add, setAdd] = useState({})

    const inputChange = (event) => {
        const { name, value } = event.target
        setAdd({ ...add, [name]: value })
    }

    const SUBMIT = () => {
        dispatch(AddEvent(add))
    }

useEffect(()=>{
    const data ={
        id:reply?.id,
        name:reply?.name,
        email:reply?.email
    }
    setInput(data)
},[reply])




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

                                                {value.status == "1" ?
                                                    <label className='replyedd'>
                                                    REPLYED
                                                </label>

                                                    :
                                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => { replyy(value.id) }}>
                                                        REPLY
                                                    </button>


                                                }

                                            </div>

                                        </div>
                                    </div>


                                ))}
                            </div>
                        </div>
                    </div>



                    {/* <!-- Button trigger modal --> */}


                    {/* <!-- Modal --> */}
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                <form>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Name:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='name' value={reply?.name}></input>
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" class="col-form-label">Recipient:</label>
                                    <input type="text" class="form-control" id="recipient-name" name='email'  value={reply?.email}></input>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label" >Message:</label>
                                    <textarea class="form-control" id="message-text" name='Reply' onChange={inputChangee}></textarea>
                                </div>
                            </form>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary" onClick={()=>{send(reply?.id)}}>send</button>
                                </div>
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
