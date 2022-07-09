import React from 'react';

const SearcgEngin = () => {
    return (
        <div>
             <h3 className='text-2xl mb-4 text-accent'>View Student</h3>
            <div className='flex justify-between'>
                <input type="text" placeholder="Name" class="input input-bordered input-md" />
                <input type="text" placeholder="Age" class="input input-bordered input-md" />
                <div class="form-control">
                    <div class="input-group">
                        <select class="select select-bordered">
                            <option disabled selected>School</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                        </select>
                    </div>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <select class="select select-bordered">
                            <option disabled selected>Class</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                        </select>
                    </div>
                </div>
                <div class="form-control">
                    <div class="input-group">
                        <select class="select select-bordered">
                            <option disabled selected>Division</option>
                            <option>T-shirts</option>
                            <option>Mugs</option>
                        </select>
                    </div>
                </div>
                <button class="btn btn-accent">Search</button>
            </div>
        </div>
    );
};

export default SearcgEngin;