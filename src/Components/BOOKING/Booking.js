import React, { useState } from 'react'
import './booking.css'
import { useDispatch, useSelector, } from 'react-redux'
import { Bookingapi, viewEvent } from '../REDUX/SLICE/eventSlice'
import { useEffect } from 'react'
export default function Booking() {

  const log_id = localStorage.getItem('RoyalCatering_logId')
  // console.log(log_id)


  const { data } = useSelector((state) => state.event)
  const dispatch = useDispatch()
  console.log(data);



  useEffect(()=>{
    dispatch(viewEvent())
},[])


  const [slot, setSlot] = useState({})

  const inputChange = (datas) => {
    const { name, value } = datas.target
    setSlot({ ...slot, [name]: value })
  }

  const send = (event) => {
    event.preventDefault();
    if (log_id) {
      console.log(slot);
      dispatch(Bookingapi(slot))
    }
    else {
      window.alert('please login')

    }
  }
  return (
    <>
      <div class="card carddesignn">
        <div class="card-body">
          <h5 class="card-title titlecenter">BOOK YOUR EVENT</h5>
          <form>
            <div class="row">
              <div class="col-sm mt-2">
                <input type="text" class="form-control formstyle bg-transparent" name='name' placeholder="YOUR NAME" onChange={inputChange}></input>
              </div>
              <div class="col-sm mt-2">
                <input type="email" class="form-control formstyle bg-transparent" name='email' placeholder="YOUR EMAIL" onChange={inputChange}></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm mt-2">
                <input type="tel" class="form-control formstyle bg-transparent" name='contact' placeholder="PHONE NUMBER" onChange={inputChange}></input>
              </div>
              <div class="col-sm mt-2">
                <input type="time" class="form-control formstyle bg-transparent" name='time' placeholder="TIME" onChange={inputChange}></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm mt-2">
                <input type="date" class="form-control formstyle bg-transparent" placeholder="DATE" name='date' onChange={inputChange}></input>
              </div>
              <div class="col-sm mt-2">
                <input type="number" class="form-control formstyle bg-transparent" name='noofperson' placeholder="NO. OF PERSONS" onChange={inputChange}></input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm mt-2">
                <select class="form-select formstyle bg-transparent" aria-label="Default select example" name='typeofevent' onChange={inputChange}>
                  <option selected>Open this select menu</option>
                  {data?.map((value, key) => (
                    <option key={value.event} value={value.event} className='text-dark'>
                      {value.events}
                    </option>
                  ))}
                </select>
              </div>

            </div>
            <button class="btn btn-light formbutton" onClick={send}>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}
