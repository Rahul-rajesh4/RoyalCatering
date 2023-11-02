import React, { useState } from 'react'
import './nav.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

  const navigate = useNavigate()



  const role = localStorage.getItem('role')
  console.log(role);

  function ani() {
    document.getElementById('anim').className = 'classname';
  }

  function closediv() {
    document.getElementById('anim').className = 'no';

  }

  const [state, setState] = useState({})

  const inputChange = (event) => {
    const { name, value } = event.target
    setState({ ...state, [name]: value })
  }

  const submit = () => {
    console.log(state);
    axios.post('http://127.0.0.1:8000/api/loginAPI', state).then((response) => {
      console.log(response.data.message);
      // console.log(response.data.data.log_id);
      localStorage.setItem('RoyalCatering_logId', response.data.data.log_id)
      localStorage.setItem('role', response.data.data.role)
      window.location.reload()

    }).catch((error) => {
      console.log(error.response.data);
    })
  }

  const logout = () => {
    localStorage.clear()
    window.location.reload()
  }
  const adminpage = ()=>{
    navigate('/admin')

  }
  return (
    <div>
  <nav class="navbar navbar-expand-lg bg fixed-top">
    <div class="container">
      <a class="navbar-brand text-white" href="#">RC.G</a>
      <button class="navbar-toggler bg2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-white nav-textsize" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white nav-textsize" href="/blog">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-white nav-textsize" href='/About'>About Us</a>
          </li>
          {role == 'user' ? (
            <li class="nav-item">
              <a class="nav-link text-white nav-textsize" onClick={logout}>Logout</a>
            </li>
          ) : role === 'admin' ? (
            <li class="nav-item">
              <a class="nav-link text-white nav-textsize" onClick={adminpage} >Profile</a>
            </li>
          ) : (
            <li class="nav-item">
              <a class="nav-link text-white nav-textsize" onClick={ani}>Login</a>
            </li>
          )}
        </ul>
      </div>
    </div>
  </nav>

  <div id='anim'>
    <div class="mod">
      <div class="modal-content modback">
        <div class="modal-header">
          <h5 class="modal-title text-white" id="staticBackdropLabel">LOGIN HERE!</h5>
          <button type="button" class="close-div" onClick={closediv}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form className='modleft'>
            <div class="form-group" style={{ marginBottom: '40px' }}>
              <label for="exampleInputEmail1" className='text-white'>Email address</label>
              <input type="email" class="form-control loginform" id="exampleInputEmail1" name='email' aria-describedby="emailHelp" onChange={inputChange}></input>
              <small id="emailHelp" class="form-text text-white">We'll never share your email with anyone else.</small>
            </div>
            <div class="form-group">
              <label className='modleft text-white'>Password</label>
              <input type="password" class="form-control loginform" id="exampleInputPassword1" name='password' onChange={inputChange}></input>
            </div>
            <label className='text-white'>Don't have an account ?</label>
            <a className='ml-3' href='/sighnup'>&nbsp;&nbsp;SIGN UP</a>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary btn-login" onClick={submit}>Login</button>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
