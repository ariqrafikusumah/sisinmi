import React, { useState } from 'react'
import SideNav from '../../components/SideNav'

function _HomeAdmin() {
    const [isHidden, setIsHidden] = useState(false);

    return (
        <>
            <div className='flex'>
                    <SideNav />
                <div className='flex-grow'>
                    <div className='p-2.5'>
                        <div className='font-bold text-gray-500'>
                            Home &gt; 
                        </div>
                        <div className='grid grid-cols-3 gap-2 mt-5'>
                            <div className='bg-orange-400 p-5 rounded-lg shadow-xl'>
                                Card 1
                            </div>
                            <div className='bg-orange-400 p-5 rounded-lg shadow-xl'>
                                Card 2
                            </div>
                            <div className='bg-orange-400 p-5 rounded-lg shadow-xl'>
                                Card 3
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default _HomeAdmin