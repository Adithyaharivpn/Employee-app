import React, { useState } from 'react'
import Navbar from './Navbar'

const Emptable = () => {

    const [emp,changeemp] = useState(

        [
            {"Name": "John Smith", "EmployeeID": "EMP01", "Designation": "Data Scientist", "Salary": "85000"},
            {"Name": "Jane Williams", "EmployeeID": "EMP02", "Designation": "HR Specialist", "Salary": "65000"},
            {"Name": "David Moore", "EmployeeID": "EMP03", "Designation": "Team Lead", "Salary": "105000"},
            {"Name": "Sarah Anderson", "EmployeeID": "EMP04", "Designation": "Marketing Specialist", "Salary": "60000"},
            {"Name": "Michael Taylor", "EmployeeID": "EMP05", "Designation": "Manager", "Salary": "130000"},
            {"Name": "Emily Davis", "EmployeeID": "EMP06", "Designation": "Software Engineer", "Salary": "68000"},
            {"Name": "Daniel Wilson", "EmployeeID": "EMP07", "Designation": "Finance Analyst", "Salary": "72000"},
            {"Name": "Christopher Jones", "EmployeeID": "EMP08", "Designation": "Project Manager", "Salary": "95000"},
            {"Name": "Andrew Brown", "EmployeeID": "EMP09", "Designation": "Business Analyst", "Salary": "78000"},
            {"Name": "Matthew Miller", "EmployeeID": "EMP10", "Designation": "Sales Representative", "Salary": "55000"}
          ]
    )
    return (
        <div>
            <Navbar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-lg-12 col-xl-12 col-xxl-12">

                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">EmployeeID</th>
                                    <th scope="col">Designation</th>
                                    <th scope="col">Salary</th>
                                </tr>
                            </thead>
                            <tbody>

                                {emp.map(
                                    (value, index) => {
                                        return <tr>
                                            <th scope="row">{value.Name}</th>
                                            <td>{value.EmployeeID}</td>
                                            <td>{value.Designation}</td>
                                            <td>{value.Salary}</td>
                                        </tr>
                                    }

                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Emptable
