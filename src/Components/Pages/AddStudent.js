import React from 'react';
import { useForm } from 'react-hook-form';

const AddStudent = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);

    return (
        <div className='v-student'>
            <h3 className='text-2xl text-accent mb-4'>Add Student</h3>
            <div className='add-grid'>
                <div className='form-control w-full gap-10 mt-3 max-w-xs'>
                    <p>Full Name</p>
                    <p>Date of Birth</p>
                    <p>School</p>
                    <p>Class</p>
                    <p>Division</p>
                    <p>Status</p>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='form-control w-full gap-4 max-w-xs'>
                            <input className='input input-bordered w-full max-w-xs' type="text" placeholder="Name" {...register("Name", { required: true, maxLength: 80 })} />
                            <input className='input input-bordered w-full max-w-xs' type="datetime" placeholder="Date of Birth" {...register("Date of Birth", { required: true, max: 15, min: 4, maxLength: 19, pattern: /^\S+@\S+$/i })} />
                            <select className='input input-bordered w-full max-w-xs' {...register("School", { required: true })}>
                                <option disabled selected>School</option>
                                <option value="Active">Blue Bird</option>
                                <option value="Invoice">Invoice</option>
                            </select>
                            <select className='input input-bordered w-full max-w-xs' {...register("Class", { required: true })}>
                                <option value="Mr">Mr</option>
                                <option value="Mrs">Mrs</option>
                                <option value="Miss">Miss</option>
                                <option value="Dr">Dr</option>
                            </select>
                            <select className='input input-bordered w-full max-w-xs' {...register("Division", { required: true })}>
                                <option value="A">A</option>
                                <option value="B">B</option>
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
        </div>
    );
}

export default AddStudent;