import React from 'react'
import { Button, Form, FormControl, FormGroup, FormLabel, FormSelect } from 'react-bootstrap'
import SideNav from '../../components/SideNav'

function _InputUser() {
    return (
        <>
            <div className='flex'>
                <SideNav />
                <div className='flex-grow'>
                    <div className='p-2.5'>
                        <div className='font-bold text-gray-500'>
                            Home &gt; Input User
                        </div>
                        <div className='font-bold text-2xl'>
                            Input User
                        </div>
                        <div className='mt-3'>
                            <Form>
                                <FormGroup controlId='email'>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl type='text' placeholder='Enter Email'></FormControl>
                                </FormGroup>
                                <FormGroup controlId='password'>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl type='text' placeholder='Enter Password'></FormControl>
                                </FormGroup>
                                <FormGroup controlId='email'>
                                    <FormLabel>Role</FormLabel>
                                    <FormSelect>
                                        <option>~ Select Role ~</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </FormSelect>
                                </FormGroup>
                                <Button className='mt-3'>Save</Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default _InputUser
