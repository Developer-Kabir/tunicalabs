import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';

const Header = () => {

    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    return (
        <div>
            <div class="navbar bg-accent px-12">
                <div class="flex-1">
                    <Link className='text-2xl' to='/'>TUNICALABS MEDIA</Link>
                </div>
                <div class="flex-none">
                    <ul class="menu menu-horizontal p-0">

                        <li><button class="text-2xl">
                            💬
                            <div style={{
                                marginTop: '-25px', marginLeft: '-15px'
                            }} class="badge">1</div>
                        </button></li>

                        <li>{user ? <div>
                            <div class="avatar online">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>
                            </div>
                            <p><div class="dropdown dropdown-end">
                                <label tabindex="0" class="btn btn-ghost">{user.displayName} <span className='text-2xl ml-2'>⇩</span></label>
                                <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <button className="btn btn-ghost" onClick={logout} >Sign Out</button>
                                </ul>
                            </div></p>
                        </div> : <Link to="/login">Login</Link>}</li>
                        <li></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;