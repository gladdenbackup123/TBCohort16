import React from "react";


function Objects(){
    const employees = [
        {
            id: 1,
            name: 'Alice Johnson',
            department: 'Engineering',
            position: 'Software Engineer',
            salary: 85000
        },
        {
            id: 2,
            name: 'Bob Smith',
            department: 'Marketing',
            position: 'Marketing Manager',
            salary: 75000
        },
        {
            id: 3,
            name: 'Carol White',
            department: 'Human Resources',
            position: 'HR Specialist',
            salary: 65000
        },
        {
            id: 4,
            name: 'David Brown',
            department: 'Finance',
            position: 'Financial Analyst',
            salary: 90000
        },
        {
            id: 5,
            name: 'Eve Black',
            department: 'Sales',
            position: 'Sales Executive',
            salary: 70000
        }
    ];
    
    return (
        <>
        <h1>Employee Data!</h1>
        <div class="center">
            <table border="1">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Department</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee) => (
                    <tr key={employee.id}>
                        <td>{employee.name}</td>
                        <td>{employee.department}</td>
                        <td>{employee.position}</td>
                        <td>{employee.salary}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        </div>
        </>
    )
}

export default Objects;