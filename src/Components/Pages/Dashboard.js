import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='container'>
            <div class="drawer drawer-mobile  ">
                <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div class="drawer-side w-50">
                    <div width={500} className='flex'>
                        <h2 className=' text-4xl'>Student</h2>
                        <div class="dropdown dropdown-end ml-8">
                            <label tabindex="0" class="text-4xl btn btn-active btn-ghost">⟱</label>
                            <ul class="dropdown-content menu shadow bg-base-100 rounded-box w-52">
                                <li><Link to='/'>View Student</Link></li>
                                <li><Link to='/addStudent'>Add Student</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    );
};

export default Dashboard;


