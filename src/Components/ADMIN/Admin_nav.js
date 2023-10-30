import React from 'react'
import './admin_nav.css'
import { useNavigate } from 'react-router-dom'
export default function Admin_nav() {

    const Navigate = useNavigate()

    const logout = () => {
        localStorage.clear()
        Navigate('/')
        window.location.reload()
    }


    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container">
                    <h3 class="adnavh3">Admin</h3>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#adminNav" aria-controls="adminNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="adminNav">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0 navul">
                            <li class="nav-item">
                                <a class="nav-link ad-textsize" href="/">
                                    Go Home
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ad-textsize" onClick={logout}>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
