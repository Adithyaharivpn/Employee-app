import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Employee</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" href="/">Employee Registration</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/search">Employee Search</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/del">Remove Employee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="/table">Employee Data</a>
                            </li>                       
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar