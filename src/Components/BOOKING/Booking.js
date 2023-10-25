import React, { useState } from 'react'
import './booking.css'
export default function Booking() {

  const log_id=localStorage.getItem('RoyalCatering_logId')
  // console.log(log_id)

  const [state,setState] = useState({})

  const inputChange = (event)=>{
        const {name,value} = event.target
        setState({...state,[name]:value})
  }

  const submit = (event)=>{
    event.preventDefault()
  if(log_id){
    console.log(state);
  }
    else{
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
              <input type="number" class="form-control formstyle bg-transparent" name='NoOfPerson' placeholder="NO. OF PERSONS" onChange={inputChange}></input>
              </div>
            </div>
            <button  class="btn btn-light formbutton" onClick={submit}>SUBMIT</button>
          </form>
        </div>
      </div>
    </>
  )
}
