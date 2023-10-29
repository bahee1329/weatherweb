import { Link } from 'react-router-dom';
import './Register';
import React from 'react'
import page from '../assets/44.jpg'

const Register = () => {
    return (
        <div className='login' style={{ backgroundImage: `url(${page})` }}>
            <div className='logincon'>
                <div className='leftcon'>
                    <h2>Malakabook</h2>
                    <p>Connect with friends and the world <br />
                        around you on Malakabook</p>
                </div>
                <div className='rightcon'>
                    <form action="">
                        <input type='text' className='name1' placeholder='username' />
                        <input type='email' className='email' placeholder='Email' />
                        <input type='password' className='password' placeholder='password' />
                        <input type='password' className='password' placeholder='Password again' />

                        <Link to='/' className='btny'><button >Sign up</button></Link>

                        <Link to='/' className='btny'><button >Log into Account</button></Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;
