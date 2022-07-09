import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
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
                            <div  style={{
                                marginTop:'-25px', marginLeft:'-15px'
                            }} class="badge">1</div>
                        </button></li>
                        <li><div>
                            <div class="avatar online">
                                <div class="w-10 rounded-full">
                                    <img src="https://placeimg.com/192/192/people" alt='' />
                                </div>

                            </div>
                            <p>Developer</p>
                        </div></li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;