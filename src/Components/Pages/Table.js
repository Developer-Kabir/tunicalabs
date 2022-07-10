import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import ReactHTMLTableToExcel from 'react-html-table-to-excel';

const Table = () => {
    const [modals, setModals] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
       

        fetch('http://localhost:5000/student', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if(data){
                    toast(`Student data has been Updated successfully`)    
                }
                else{
                    toast.error(`May You are missing something`)
                }
               setInterval(() =>{
                setModals(false)
               },2000)
            })
    };
    console.log(errors);
    const [students, setStudents] = useState([]);
    useEffect(() => {
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
                            <th>ID </th>
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
                                    <td><label onClick={()=> setModals(true)} for="my-modal" class="btn btn-accent modal-button">Edit</label></td>
                                    <td onClick={() => handleDelete(student._id)}><button class="btn btn-accent">Delete</button></td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <input type="checkbox" id="my-modal" class="modal-toggle" />
            {
                modals && <div class="modal">
                <div class="modal-box">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full gap-4 max-w-xs'>
                            <input className='input input-bordered w-full max-w-xs' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                            <input className='input input-bordered w-full max-w-xs' type="number" placeholder="Year of Birth" {...register("dob", {required: true, maxLength: 80})} />
                            <select className='input input-bordered w-full max-w-xs' {...register("School", { required: true })}>
                                <option disabled selected>School</option>
                                <option value="Blue Bird">Blue Bird</option>
                                <option value="Milstone">Milestone</option>
                                <option value="Child Care">Child care</option>
                                <option value="Twinkle">Twinkle</option>
                            </select>
                            <select className='input input-bordered w-full max-w-xs' {...register("Class", { required: true })}>
                            <option disabled selected>Class</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                            <select className='input input-bordered w-full max-w-xs' {...register("Division", { required: true })}>
                            <option disabled selected>Division</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                               
                            </select>

                            <div className='flex mx-auto mt-2'>
                                <div className='flex mr-8'>
                                    <p>Active</p>
                                    <input className='ml-4' {...register("Status", { required: true })} type="radio" value="Active" />
                                </div>
                                <div className='flex'>
                                    <p>Invoice</p>
                                    <input className='ml-4' {...register("Status", { required: true })} type="radio" value="Invoice" />
                                </div>
                            </div>

                            <input className='btn btn-accent' type="submit" value='Save' />
                        </div>
                    </form>
                </div>
                </div>
                <ToastContainer/>
            </div>
            }

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
                buttonText="Download Excel ⇩" />
        </div>


    );
};

export default Table;