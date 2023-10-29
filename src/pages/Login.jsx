import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import page from '../assets/44.jpg'

const Login = () => {
  return (
    <div className='login' style={{ backgroundImage: `url(${page})` }}>
      <div className='logincon'>
        <div className='leftcon'>
          <h2>WEATHER DED</h2>
          <p> provides up-to-date weather forecasts and conditions for the Sri Lankan capital, including temperature, and precipitation.</p>
        </div>
        <div className='rightcon'>
          <form>
            <input type='email' className='email' placeholder='Email' />
            <input type='password' className='password' placeholder='Password' />
            <Link to='/home' className='btnl'>
              <button>Log in</button>
            </Link>
            <span>Forgot password?</span>
            <Link to="/register" className='btny'>
              <button>Create a new account</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
