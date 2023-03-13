import React from 'react'
import SideNav from '../../components/SideNav'

function _TableAdmin() {
    return (
        <>
            <div className='flex'>
                <SideNav />
                <div className=' flex-grow'>
                    <div className='p-2.5'>
                        <div className='font-bold text-gray-500'>
                            Home &gt; Table
                        </div>
                    </div>
                    <div className=''>
                        <div className='p-2.5 rounded-lg bg-orange-400 font-bold text-white'>
                            Header
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default _TableAdmin