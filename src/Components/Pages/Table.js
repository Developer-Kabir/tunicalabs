import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Table = () => {
 const [students, setStudents] = useState([]);
 useEffect( () =>{
    fetch('http://localhost:5000/students')
    .then(res => res.json())
    .then(data => setStudents(data))
 }, [])

 const handleDelete = id => {
    const proceed = window.confirm('Are you sure to delete the student from your student list ?');
    if (proceed) {
        const url = `http://localhost:5000/students/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                
                const remaining = students.filter(item => item._id !== id);
                setStudents(remaining);
            })
    }
}
 
    return (
        <div className='my-6'>
            <div class="overflow-x-auto">
                <table id='table-to-xls' class="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>School</th>
                            <th>Class</th>
                            <th>Division</th>
                            <th>Status</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        students.map((student, index) =>
                             <tr
                        key={student._id}
                        >
                            <th>{index + 1}</th>
                            <td>{student.Name}</td>
                            <td>{2022 - student.dob}</td>
                            <td>{student.School}</td>
                            <td>{student.Class}</td>
                            <td>{student.Division}</td>
                            <td>{student.Status}</td>
                            <td><button class="btn btn-active btn-link">Edit</button></td>
                            <td onClick={() => handleDelete(student._id)}><button class="btn btn-active btn-link">Delete</button></td>
                        </tr> )
                       }
                        
                    </tbody>
                </table>
            </div>

          <div class="btn-group pagination">
                <button class="btn btn-accent mx-3">1</button>
                <button class="btn mx-3 ">2</button>
                <button class="btn mx-3">3</button>
                <button class="btn mx-3">4</button>
            </div>
            <ReactHTMLTableToExcel
                    id="test-table-xls-button"
                    className="download-table-xls-button btn btn-accent"
                    table="table-to-xls"
                    filename="Student Table"
                    sheet="tablexls"
                    buttonText="Download Excel ⇩"/>
        </div>
    );
};

export default Table;