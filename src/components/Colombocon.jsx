import React from 'react'
import { BsFillCloudSunFill } from "react-icons/bs";
import './Colomboco.css'


function Colombocon() {
  return (
    <div className='container1'>
        <div className='leftp'>
            <h2>colombo</h2>
        </div>

        <div>
        <BsFillCloudSunFill style={{color:"yellow",fontSize:'40px'}}/>
        </div>

        <div>
            <h3>clearly</h3>
        </div>

        <div className='rightp'>
            <h1>20C</h1>
        </div>
    </div>
  )
}

export default Colombocon