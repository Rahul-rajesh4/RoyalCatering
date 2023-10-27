import React, { useState } from 'react'
import './register.css'
import regimgg from './img/reggbackimg.jpg'
import { useSelector,useDispatch } from 'react-redux'
import {register} from '../REDUX/SLICE/eventSlice'
import { useNavigate } from 'react-router-dom'
export default function Regiter() {


  const Navigate = useNavigate()


  const {data} = useSelector((state)=>state.event)

  const dispatch = useDispatch()
  console.log(data);

  const [input, setInput] = useState({
    name : '',
    contact : '',
    email : '',
    password : ''
  })

  const inputChange = (datas) =>{
    const {name,value} = datas.target

    setInput({...input,[name]:value })

  }

  const reg =()=>{
    dispatch(register(input))
    Navigate('/')
  }
  return (
    <>
      <div className='regbackimg' style={{ backgroundImage: `URL(${regimgg})` }}>
        <div className='overlayregg'>
          <div className='formdata'>
            <h1 className='heddingggg'>Sign Up</h1>
            <div className='reggformdesign'>
              <form>
              <div class="form-group">
                <label className='regNames text-white' >Full Name</label>
                <input type="text" class="form-control regform" id="exampleInputPassword1" name='name' onChange={inputChange}></input>
              </div>
              <div class="form-group">
                <label className='regNames text-white' >Contact</label>
                <input type="tel" class="form-control regform" id="exampleInputPassword1" name='contact' onChange={inputChange}></input>
              </div>
              <div class="form-group">
                <label className='regNames text-white' >Email</label>
                <input type="email" class="form-control regform" id="exampleInputPassword1" name='email' onChange={inputChange}></input>
              </div>
              <div class="form-group">
                <label className='regNames text-white' >Password</label>
                <input type="password" class="form-control regform" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
              </div>
              <button type='button' onClick={reg} class="btn btn-light regbutton">SUBMIT</button>

              </form>
              
              

            </div>
          </div>

        </div>

      </div>
    </>
  )
}
