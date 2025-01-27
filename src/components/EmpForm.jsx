import React from 'react'
import Navbar from './NavBar'

const Empadd = () => {
    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Employee ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Designation</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">D.O.B</label>
                                <input type="date" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">AGE</label>
                                <input type="number" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Company Name</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Blood Group</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Salary</label>
                                <input type="number" name="" id="" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                                <label htmlFor="" className="form-label">Email ID</label>
                                <input type="text" className="form-control" />

                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 d-flex align-items-end">

                                <button className="btn btn-success">Submit</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Empadd