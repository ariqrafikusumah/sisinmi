import React, { useState } from 'react';
import { FaAlignLeft, FaArrowAltCircleLeft, FaHome, FaSignOutAlt, FaTable, FaWpforms } from 'react-icons/fa';

const SideNav = () => {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <div className="bg-gray-900 h-screen rounded-lg text-white">
            <button
                className="p-4 rounded-lg hover:bg-gray-800"
                onClick={() => setIsHidden(!isHidden)}
            >
                {isHidden ? <FaAlignLeft/> : <FaArrowAltCircleLeft />}
            </button>
            <div className={isHidden ? "hidden" : "block"}>
                <ul>
                    <a className='no-underline text-white hover:text-gray-500' href="/homeadmin">
                        <li className="p-4 rounded-lg flex cursor-pointer text-white duration-500 hover:bg-gray-800"><FaHome />&nbsp; Home</li>
                    </a>
                    <a className='no-underline text-white hover:text-gray-500' href="/tableadmin">
                        <li className="p-4 rounded-lg flex hover:bg-gray-800"><FaTable />&nbsp; Table</li>
                    </a>
                    <a className='no-underline text-white hover:text-gray-500' href="/inputuser">
                        <li className="p-4 rounded-lg flex hover:bg-gray-800"><FaWpforms />&nbsp; Input User</li>
                    </a>
                    <a className='no-underline text-white hover:text-gray-500' href="/logout">
                        <li className="p-4 rounded-lg flex hover:bg-gray-800"><FaSignOutAlt />&nbsp; Logout</li>
                    </a>
                </ul>
            </div>
        </div >
    );
};

export default SideNav;