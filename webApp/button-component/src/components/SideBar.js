import { useState } from 'react';

const SideBar = () => {
    const [sidebarWidth, setSideBarWidth] = useState('w-1/4');

    const handleClick = () => {
        sidebarWidth === 'w-1/4'
            ? setSideBarWidth('w-1/6')
            : setSideBarWidth('w-1/4');
    };

    return (
        <div
            className={`h-screen ${sidebarWidth} shadow-2xl transition duration-500 ease-in-out p-8`}
        >
            <div className='brand-logo flex justify-center items-center'>
                <img
                    src='https://png.pngtree.com/element_origin_min_pic/17/03/25/ec98824ea2dacb618e95f750be66e52b.jpg'
                    alt=''
                    className='logo w-20 h-20'
                />
                <span className='text-green-300'>Travellog</span>
            </div>
            <div className='sidebar-links flex flex-col divide-y divide-opacity-1'>
                <a href='/' className='my-5 text-green-300'>
                    Home
                </a>
                <a href='/' className='my-5 text-green-300'>
                    Project
                </a>
                <a href='/' className='my-5 text-green-300'>
                    Contact
                </a>
            </div>
            <button onClick={handleClick}> click me</button>
        </div>
    );
};

export default SideBar;
