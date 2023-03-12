import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { FaUserAlt, FaUserLock } from "react-icons/fa"

function Sign() {
    return (
        <>
            <div>
                <div className='h-screen'>
                    <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 border-2 bg-orange-400 border-gray-200 rounded-xl p-3 w-lg shadow-xl'>
                        <div className='p-3'>
                            <img className='rounded-xl' src="https://www.posindonesia.co.id/en/artikel/image/Umrq07UinRfsf5i5.jpg" alt="" />
                        </div>
                        <div className='p-3'>
                            <div className='text-center mb-3'>
                                <img className='w-52' src="https://dias.ulbi.ac.id/assets/vendors/images/logo/logo_1656943348.png" alt="ulbi" />
                                <h2 className='text-white text-left'>Sign-in</h2>
                            </div>

                            <div className='grid grid-cols-1'>
                                <Form >
                                    <FormGroup className='mb-3' controlId='email'>
                                        <FormLabel className='font-bold text-white'>
                                            <FaUserAlt className='w-5' /> E-mail
                                        </FormLabel>
                                        <FormControl className=""  type='email' placeholder="Enter Email"  />
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='Password'>
                                        <FormLabel className='font-bold text-white'>
                                            <FaUserLock className="w-5" /> Password
                                        </FormLabel>
                                        <FormControl className=""  type='Password' placeholder="Enter Password"  />
                                    </FormGroup>
                                    <Button type='submit'>Login</Button>
                                    
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sign