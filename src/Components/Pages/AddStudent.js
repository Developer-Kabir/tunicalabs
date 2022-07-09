import React from 'react';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddStudent = () => {
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
                    toast(`Student has been added successfully`)
                }
                else{
                    toast.error(`May You are missing something`)
                }
            
            })
    };
    console.log(errors);

    return (
        <div className='v-student'>
            <h3 className='text-2xl text-accent mb-4'>Add Student</h3>
            <div className='add-grid'>
                <div className='form-control w-full gap-10 mt-3 max-w-xs'>
                    <p>Full Name</p>
                    <p>Date of Birth (Birth Year Only)</p>
                    <p>School</p>
                    <p>Class</p>
                    <p>Division</p>
                    <p>Status</p>
                </div>
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
                <ToastContainer />
            </div>
        </div>
    );
}

export default AddStudent;