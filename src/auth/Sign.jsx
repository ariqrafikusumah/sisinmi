<<<<<<< HEAD
import React, { useState } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { FaUserAlt, FaUserLock } from "react-icons/fa"

function Sign() {
=======
import React, { useState, useEffect } from 'react';
import { Button, Form, FormControl, FormGroup, FormLabel } from 'react-bootstrap'
import { FaUserAlt, FaUserLock } from "react-icons/fa"
import { db } from '../database/firebase';
import { auth } from '../database/firebase';

function Sign() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if (user) {
                db.firestore().collection('users').doc(user.email).get().then((doc) => {
                    const role = doc.data().role;
                    if (role === 'admin') {
                        window.location.href = '/admin';
                    } else if (role === 'baak') {
                        window.location.href = '/baak';
                    } else if (role === 'dosen') {
                        window.location.href = '/dosen';
                    } else if (role === 'kaprodi') {
                        window.location.href = '/kaprodi';
                    }
                });
            }
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                alert(error.message);
            });
    };
>>>>>>> 681abbb1627b790876e37eab9994c3e44cdfe1f8
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
<<<<<<< HEAD
                                <Form >
=======
                                <Form onSubmit={handleSubmit} >
>>>>>>> 681abbb1627b790876e37eab9994c3e44cdfe1f8
                                    <FormGroup className='mb-3' controlId='email'>
                                        <FormLabel className='font-bold text-white'>
                                            <FaUserAlt className='w-5' /> E-mail
                                        </FormLabel>
<<<<<<< HEAD
                                        <FormControl className=""  type='email' placeholder="Enter Email"  />
=======
                                        <FormControl className="" type='email' placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
>>>>>>> 681abbb1627b790876e37eab9994c3e44cdfe1f8
                                    </FormGroup>
                                    <FormGroup className='mb-3' controlId='Password'>
                                        <FormLabel className='font-bold text-white'>
                                            <FaUserLock className="w-5" /> Password
                                        </FormLabel>
<<<<<<< HEAD
                                        <FormControl className=""  type='Password' placeholder="Enter Password"  />
                                    </FormGroup>
                                    <Button type='submit'>Login</Button>
                                    
=======
                                        <FormControl className="" type='Password' placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                    </FormGroup>
                                    <Button type='submit'>Login</Button>

>>>>>>> 681abbb1627b790876e37eab9994c3e44cdfe1f8
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